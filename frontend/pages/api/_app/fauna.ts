import { Client, ExprArg, QueryOptions, values } from 'faunadb'
import Ref = values.Ref

export const getClient = (secret?: string) =>
  new Client({
    secret: secret ? secret : process.env.FAUNADB_SECRET!,
    domain: 'db.eu.fauna.com'
  })

export type DBResponse<Data> = {
  ref?: Ref
  ts?: number
  data: Data & { [_: string]: any }
}

export const query = <Data>(
  client: Client,
  expr: ExprArg,
  options?: QueryOptions
) => client.query<Data>(expr, options)
