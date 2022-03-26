import type { NextApiResponse } from 'next'
import { GenericResponse } from '@api/_app'
import { type Articles, getArticles } from './knowledge'

interface Response extends GenericResponse {
  object?: Articles
}

export default async function handler(
  req: Request,
  res: NextApiResponse<Response>
) {
  if (req.method === 'GET') {
    const { response, error } = await getArticles()

    if (error || !response)
      return res.status(400).json({
        status: 'error',
        error: "Couldn't load articles"
      })

    return res.status(200).json({
      status: 'success',
      object: response.data
    })
  }

  res.status(200).json({ status: 'success' })
}
