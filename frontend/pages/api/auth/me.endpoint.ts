import type { NextApiRequest, NextApiResponse } from 'next'
import {
  GenericResponse,
  getClient,
  promise,
  query
} from '@api/_app'
import q from 'faunadb'

interface Request extends NextApiRequest {
  body: {
    secret: string
  }
}

type User = {
  id: string
  username: string
}

interface Response extends GenericResponse {
  object?: User
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

  const { secret } = req.body

  const client = getClient(secret)
  const meQuery = query<User>(
    client,
    q.Let(
      {
        user: q.Get(q.CurrentIdentity())
      },
      {
        id: q.Select(['ref', 'id'], q.Var('user')),
        username: q.Select(['data', 'username'], q.Var('user'))
      }
    ))
  const { response, error } = await promise<User>(meQuery)

  if (error || !response)
    return res.status(404).json({
      status: 'error',
      error: 'Invalid email or password'
    })

  res.status(200).json({ status: 'success', object: response })
}
