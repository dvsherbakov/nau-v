import axios from 'axios'
import { AxiosInstance } from 'axios'

export interface IApiOptions {
  client?: AxiosInstance
  token?: string
  refreshToken?: string
  userId?: string
}

export interface IToken {
  id?: string
  type: string
  expiresIn: string
}

export interface ITokensInterface {
  accessToken?: IToken
  refreshToken?: IToken
}

export interface IRegisterRequestConfig {
  email?: string
  password?: string
  firstName?: string
  lastName?: string
}

export interface IAuthRequestConfig {
  email: string
  password: string
}

export interface IFullUserInfo {
  firstName: string;
  lastName: string;
  email: string;
  accepted: number;
}
