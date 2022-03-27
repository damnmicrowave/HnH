import type { NextApiResponse } from 'next'
import { GenericResponse } from '@api/_app'
import { getArticle } from './knowledge'
import { Article } from 'pages/app/types'
import { NextApiRequest } from 'next'

interface Request extends NextApiRequest {
  query: {
    articleId: string
  }
}

interface Response extends GenericResponse {
  object?: Article
}

export default async function handler(
  req: Request,
  res: NextApiResponse<Response>
) {
  if (req.method === 'GET') {
    const { articleId } = req.query
    const { response, error } = await getArticle(articleId)

    if (error || !response)
      return res.status(400).json({
        status: 'error',
        error: "Couldn't load article"
      })

    return res.status(200).json({
      status: 'success',
      object: response.data
    })
  }

  res.status(200).json({ status: 'success' })
}
