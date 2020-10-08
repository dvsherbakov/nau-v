import axios from 'axios'

export default class Api {
  constructor(options = {}) {
    this.client = options.client || axios.create()
    this.token = options.token || null
    this.userId = options.userId || null
    this.refreshToken = options.refreshToken || null
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
          throw error
        }
        if (!this.refreshRequest) {
          this.refreshRequest = await this.client.post(`/api/refresh-tokens`, {
            refreshToken: this.refreshToken,
          })
        }

        const { data } = await this.refreshRequest
        this.token = data.accessToken
        this.refreshToken = data.refreshToken
        const newRequest = { ...error.config, retry: true }
        this.refreshRequest = null
        return this.client(newRequest)
      }
    )
  }

  isAuthenticated() {
    return !!this.token
  }

  async login({ email, password }) {
    const { data, status } = await this.client.post('/api/auth', {
      email,
      password,
    })
    this.token = data.accessToken
    this.refreshToken = data.refreshToken
    this.userId = data.userId
    return status
  }

  async register({ email, password, firstName, lastName }) {
    const { data } = await this.client.post('/api/register', {
      email,
      password,
      firstName,
      lastName,
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

  async checkTest(answers) {
    const { data, status } = await this.client.post('/api/checktest', {
      userId: this.userId,
      answers,
    })
    return data
  }
}
