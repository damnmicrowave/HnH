import { GenericResponse } from '@api/_app'

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
  } & GenericResponse
}

export type SignupParams = {
  request: {
    data: {
      email: string
      password: string
      username: string
    }
  }
  response: {
    object?: {
      secret: string
    }
  } & GenericResponse
}
