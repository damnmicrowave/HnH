import type { NextApiRequest, NextApiResponse } from 'next'
import {
  GenericResponse,
  getClient,
  promise,
  query
} from '@api/_app'
import q from 'faunadb'

type SignupResult = {
  secret: string
} | null

interface Request extends NextApiRequest {
  body: {
    data: {
      email: string
      password: string
      username: string
    }
  }
}

interface Response extends GenericResponse {
  data?: {
    secret: string
  }
}

export default async function handler(
  req: Request,
  res: NextApiResponse<Response>
) {
  if (req.method !== 'POST')
    return res.status(400).json({
      status: 'error',
      error: 'Wrong method'
    })

  const { email, password, username } = req.body.data

  const client = getClient()
  const signupQuery = query<SignupResult>(
    client,
    q.Call(q.Function('createUser'), {
      email,
      password,
      username
    })
  )
  const { response, error } = await promise<SignupResult>(signupQuery)

  if (error || !response)
    return res.status(400).json({
      status: 'error',
      error: 'User with this e-mail already exists'
    })

  res.status(200).json({ status: 'success', data: response })
}
