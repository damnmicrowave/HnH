import type {NextApiRequest, NextApiResponse} from 'next'
import {GenericResponse} from '@api/_app'

interface Request extends NextApiRequest {
  body: {
    email: string
    password: string
  }
}

interface Response extends GenericResponse {
  data?: {
    secret: string
  }
}

export default function handler(
  req: Request,
  res: NextApiResponse<Response>
) {
  if (req.method !== 'POST') return res.status(401).json({
    status: 'error',
    error: 'Wrong method'
  })
  // res.status(200).json({name: 'John Doe'})
}
