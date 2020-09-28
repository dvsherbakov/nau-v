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
          this.refreshRequest = await this.client.post('/auth/refresh', {
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
    const { data } = await this.client.post('/auth/login', { login, password })
    this.token = data.token
    this.refreshToken = data.refreshToken
  }

  logout() {
    this.token = null
    this.refreshToken = null
  }

  getProducts() {
    return this.client('/products').then(({ data }) => data)
  }
}
