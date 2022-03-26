import type { NextApiRequest, NextApiResponse } from 'next'
import { GenericResponse } from '@api/_app'
import { Comment, Comments, createComment, getComments } from './knowledge'

interface Request extends NextApiRequest {
  query: {
    articleId: string
  }
  body: {
    secret: string
    data: {
      articleId: string
      text: string
    }
  }
}

interface Response extends GenericResponse {
  object?: Comments | Comment
}

export default async function handler(
  req: Request,
  res: NextApiResponse<Response>
) {
  if (req.method === 'GET') {
    const { articleId } = req.query
    const { response, error } = await getComments(articleId)

    if (error || !response)
      return res.status(400).json({
        status: 'error',
        error: "Couldn't load comments"
      })

    return res.status(200).json({
      status: 'success',
      object: response.data
    })
  }

  if (req.method === 'POST') {
    const {
      secret,
      data: { articleId, text }
    } = req.body
    const { response, error } = await createComment({
      secret,
      articleId,
      text
    })

    if (error || !response)
      return res.status(400).json({
        status: 'error',
        error: "Couldn't create comment"
      })

    return res.status(200).json({
      status: 'success',
      object: response
    })
  }

  res.status(400).json({ status: 'error', error: 'Wrong method' })
}
