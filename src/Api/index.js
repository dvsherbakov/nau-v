import axios from 'axios'

export default class Api {
  constructor(options = {}) {
    this.client = options.client || axios.create()
    this.token = options.token || null
    this.refreshToken = options.refreshToken || null
    this.refreshRequest = null

    this.client.interceptors.request.use(
      (config) => {
        if (!this.config) {
          return config
        }
        const newConfig = {
          headers: {},
          ...config,
        }
        newConfig.headers.Autorization = `Bearer ${this.token}`
        console.log('newConf', newConfig)
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
          throw error
        }
        if (!this.refreshRequest) {
          this.refreshRequest = await this.client.post(`/api/refresh-tokens`, {
            refreshtoken: this.refreshToken,
          })
        }
        const { data } = await this.refreshRequest
        this.token = data.token
        this.refreshToken = data.refreshToken
        const newRequest = { ...error.config, retry: true }
        return this.client(newRequest)
      }
    )
  }

  async login({ login, password }) {
    const { data } = await this.client.post('/api/auth', {
      login,
      password,
    })
    console.log('Data', data)
    this.token = data.accessToken
    this.refreshToken = data.refreshToken
  }

  async register({ login, password }) {
    const { data } = await this.client.post('/api/register', {
      login,
      password,
    })
    return data
  }

  logout() {
    this.token = null
    this.refreshToken = null
  }

  getProducts() {
    return this.client('/api/products').then(({ data }) => data)
  }
}
