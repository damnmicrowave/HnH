import { Client, ExprArg, QueryOptions, values } from 'faunadb'
import Ref = values.Ref

export const db = new Client({
  secret: process.env.FAUNADB_SERVER!,
  domain: 'db.eu.fauna.com'
})

export type DBResponse<Data> = {
  ref?: Ref
  ts?: number
  data: Data & { [_: string]: any }
}

export const dbQuery = <Data>(expr: ExprArg, options?: QueryOptions) =>
  db.query<DBResponse<Data>>(expr, options)
