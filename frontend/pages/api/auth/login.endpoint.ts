import type { NextApiRequest, NextApiResponse } from 'next'
import { GenericResponse, getClient, promise, query } from '@api/_app'
import q from 'faunadb'

type UserSecret = {
  secret: string
}

interface Request extends NextApiRequest {
  body: {
    data: {
      email: string
      password: string
    }
  }
}

interface Response extends GenericResponse {
  object?: {
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

  const { email, password } = req.body.data

  const client = getClient()
  const loginQuery = query<UserSecret>(
    client,
    q.Call(q.Function('loginUser'), {
      email,
      password
    })
  )
  const { response, error } = await promise<UserSecret>(loginQuery)

  if (error || !response)
    return res.status(404).json({
      status: 'error',
      error: 'Invalid email or password'
    })

  res.status(200).json({ status: 'success', object: response })
}
