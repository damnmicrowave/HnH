import { registerEndpoint } from './endpoints'

export type LoginParams = {
  request: {
    data: {
      email: string
      password: string
    }
  }
  response: {
    object?: {
      secret: string
    }
  }
}

export const api = {
  auth: {
    login: registerEndpoint<LoginParams>('auth/login', 'post')
  },
}
