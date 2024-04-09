import axios from 'axios'
import type { AxiosInstance } from 'axios'

import { LOCAL_STORAGE_TOKEN_KEY, AUTH_SIGN_IN_PATH } from '@/infrastructure/constants'

type ApiToken = {
  token: string
  expIn: number
  expTime: Date
}
export interface ApiCore {
  redirectToSignIn: () => void

  init(apiBaseUrl: string, authBaseUrl?: string): void
  getInst(): AxiosInstance
  setApiToken(token: ApiToken): void
  removeApiToken(): void
}

export class ApiCoreImpl implements ApiCore {
  protected apiBaseUrl = new URL(window.location.origin)
  protected authBaseUrl = new URL(window.location.origin)
  protected inst = axios.create()

  protected token: ApiToken | null = null

  public redirectToSignIn = (): void => {
    const url = new URL(`${this.authBaseUrl.origin}${AUTH_SIGN_IN_PATH}`)
    url.searchParams.set('redirect', window.location.href)
    window.open(url.toString(), '_self')
  }

  constructor() {
    this.inst.interceptors.response.use(
      (response) => response,
      (err) => {
        if (
          err.response &&
          err.response.status === 401 &&
          !['/authenticated', '/sign-in', '/users/current/password'].includes(err.config.url)
        ) {
          this.removeApiToken()
          if (this.redirectToSignIn) {
            this.redirectToSignIn()
          }
        }
        return Promise.reject(err)
      }
    )
  }

  public init(apiBaseUrl: string, authBaseUrl?: string) {
    this.apiBaseUrl = new URL(apiBaseUrl)

    if (authBaseUrl) {
      this.authBaseUrl = new URL(authBaseUrl)
    }

    this.setBaseUrl()
    this.restoreToken()
    this.setTokenInHeader()
  }

  public getInst(): AxiosInstance {
    return this.inst
  }

  public setApiToken(token: ApiToken): void {
    this.token = token

    this.storeToken()
    this.setTokenInHeader()
  }

  public removeApiToken(): void {
    this.token = null

    this.removeStoredToken()
    this.removeTokenFromHeader()
  }

  protected setBaseUrl(): void {
    const apiBaseUrl = new URL(this.apiBaseUrl.toString())
    apiBaseUrl.username = ''
    apiBaseUrl.password = ''
    this.inst.defaults.baseURL = apiBaseUrl.toString()
  }

  protected restoreToken(): void {
    const token = localStorage.getItem(LOCAL_STORAGE_TOKEN_KEY)
    this.token = token ? (JSON.parse(token) as ApiToken) : null
  }

  protected storeToken(): void {
    if (!this.token) {
      this.removeStoredToken()
    } else {
      localStorage.setItem(LOCAL_STORAGE_TOKEN_KEY, JSON.stringify(this.token))
    }
  }

  protected removeStoredToken(): void {
    localStorage.removeItem(LOCAL_STORAGE_TOKEN_KEY)
  }

  protected setTokenInHeader(): void {
    if (this.apiBaseUrl.username && this.apiBaseUrl.password) {
      this.inst.defaults.auth = {
        username: this.apiBaseUrl.username,
        password: this.apiBaseUrl.password
      }
    } else if (!this.token) {
      this.removeTokenFromHeader()
    } else {
      this.inst.defaults.headers.common['Authorization'] = `Bearer ${this.token.token}`
    }
  }

  protected removeTokenFromHeader(): void {
    delete this.inst.defaults.headers.common['Authorization']
  }
}
