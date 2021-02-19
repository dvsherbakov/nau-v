import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'
import {
  IApiOptions,
  IRegisterRequestConfig,
  IAuthRequestConfig,
} from './api.t'

export default class Api {
  client: AxiosInstance

  token: string | undefined

  userId: string | null

  refreshToken: string | undefined

  refreshRequest: any // AxiosResponse<ITokensInterface> | null

  constructor(options: IApiOptions = {}) {
    const startConfig: AxiosRequestConfig = {
      withCredentials: true,
      responseType: 'json',
      baseURL: 'api/',
    }

    const tokensStr = localStorage.getItem('tokens')
    const tokens = tokensStr
      ? this.rebuildToken(tokensStr)
      : { accessToken: '', refreshToken: '' }

    this.client = options.client || axios.create(startConfig)
    this.token = options.token || tokens.accessToken
    this.userId = options.userId || null
    this.refreshToken = options.refreshToken || tokens.refreshToken

    this.refreshRequest = null

    this.client.interceptors.request.use(
      (config) => {
        if (!this.token) {
          return config
        }

        const newConfig = {
          headers: {},
          ...config,
        }
        newConfig.headers.Authorization = `Bearer ${this.token}`
        return newConfig
      },
      (e) => Promise.reject(e)
    )
    this.client.interceptors.response.use(
      (r) => r,
      async (error) => {
        if (
          !this.refreshToken ||
          error.response.status !== 401 ||
          error.config.retry
        ) {
          console.error('all token expired')
          throw error
        }
        if (!this.refreshRequest) {
          this.refreshRequest = this.test
        }

        const { data } = await this.refreshRequest()
        this.token = data.accessToken
        this.refreshToken = data.refreshToken
        if (this.token && this.refreshToken) {
          localStorage.setItem(
            'tokens',
            JSON.stringify({
              token: this.token,
              refresh: this.refreshToken,
            })
          )
        }
        const newRequest = { ...error.config, retry: true }
        this.refreshRequest = null
        return this.client(newRequest)
      }
    )
  }

  rebuildToken(tokensStr: string) {
    const { token, refresh } = JSON.parse(tokensStr)
    return { accessToken: token, refreshToken: refresh }
  }

  async login({ email, password }: IAuthRequestConfig) {
    const { data, status } = await this.client.post('/auth', {
      email,
      password,
    })
    this.token = data.accessToken
    this.refreshToken = data.refreshToken
    this.userId = data.userId
    return { status, data }
  }

  async register({
    email,
    password,
    firstName,
    lastName,
  }: IRegisterRequestConfig) {
    const { data } = await this.client.post('/register', {
      email,
      password,
      firstName,
      lastName,
    })
    return data
  }

  async checkTest(answers: any, count: number) {
    const { data, status } = await this.client.post('/checktest', {
      answers,
      count,
    })
    if (status === 200) return data
    else return {}
  }

  async my() {
    return this.client.post('/my')
  }

  async isauth() {
    const res = await this.client.post('isauth')
    return res.status === 200
  }

  async getUserInfo(userId: string) {
    const resp = await this.client.post(`/users/${userId}`)
    if (resp.status === 200) {
      return resp.data
    } else return false
  }

  async test() {
    try {
      const resp = await this.client.post(`/refresh-tokens`, {
        refreshToken: this.refreshToken,
      })
      return resp
    } catch (e) {
      console.log(e)
    }
    return { data: 'error' }
  }

  async GetUsers() {
    const { data, status } = await this.client.get('/users')
    if (status === 200) {
      return data
    }
    return false
  }

  async ChangeFirstName(fName: string) {
    const { status } = await this.client.put('/users/updatefname', {
      firstName: fName,
    })
    return status === 200
  }
}
