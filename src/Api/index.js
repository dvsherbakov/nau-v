import axios from 'axios'

export default class Api {
  constructor(options = {}) {
    this.client = options.client || axios.create()
    this.token = options.token || null
    this.userId = options.userId || null
    this.refreshToken = options.refreshToken || null
    this.refreshRequest = null
    this.firstName = 'Ошибка'
    this.lastName = 'Ошибка'
    this.email = 'abs@mail.com'
    this.accepted = 0

    this.changeUserInfo = function (options) {}

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
    this.userInfo = this.getUserInfo(data.userId)
    return status
  }

  logout() {
    this.token = null
    this.userId = null
    this.refreshToken = null
    this.refreshRequest = null
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

  getProducts() {
    return this.client('/api/products').then(({ data }) => data)
  }

  async checkTest(answers, count) {
    const { data, status } = await this.client.post('/api/checktest', {
      userId: this.userId,
      answers,
      count,
    })
    if (status === 200) return data
    else return {}
  }

  async getUserInfo(userId) {
    const { data, status } = await this.client.post(`/api/users/${userId}`)
    if (status === 200) {
      this.firstName = data.firstName
      this.lastName = data.lastName
      this.email = data.email
      this.accepted = data.accepted
      this.changeUserInfo({
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        accepted: data.accepted,
      })
      return data
    } else return false
  }

  async GetUsers() {
    const { data, status } = await this.client.get('/api/users')
    if (status === 200) {
      return data
    }
    return false
  }
}
