type Values = { [name: string]: any }
type Endpoint<Request, Response> = (
  values: Request
) => Promise<{ ok: boolean; data: Response }>

interface EndpointParams {
  request: Values
  response: Values
}

type EndpointRegisterer = <EP extends EndpointParams>(
  path: string,
  method: 'get' | 'post'
) => Endpoint<EP['request'], EP['response']>

export const registerEndpoint: EndpointRegisterer = (path, method) => {
  return async request => {
    try {
      const response = await fetch(`/api/${path}`, {
        method,
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(request)
      })
      if (!response.ok) {
        console.error(`API request to ${path} failed`)
      }
      return { ok: response.ok, data: await response.json() }
    } catch (error) {
      return { ok: false, data: undefined }
    }
  }
}
