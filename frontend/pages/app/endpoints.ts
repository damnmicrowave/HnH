type Values = { [name: string]: any }
type Endpoint<Request, Response> = (options?: {
  values?: Request
  query?: string
}) => Promise<{ ok: boolean; data: Response }>

interface EndpointParams {
  request?: Values
  response: Values
}

type EndpointRegisterer = <EP extends EndpointParams>(
  path: string,
  method: 'get' | 'post'
) => Endpoint<EP['request'], EP['response']>

export const registerEndpoint: EndpointRegisterer = (path, method) => {
  return async options => {
    try {
      const { values, query } = options ?? {}
      const queryString = query ? `?${query}` : ''
      const response = await fetch(`/api/${path}${queryString}`, {
        method,
        headers: {
          'Content-Type': 'application/json'
        },
        body: values ? JSON.stringify(values) : null
      })
      if (!response.ok) {
        console.error(`API request to ${path} failed`)
      }
      return { ok: response.ok, data: await response.json() }
    } catch (error) {
      console.error(error)
      return { ok: false, data: undefined }
    }
  }
}
