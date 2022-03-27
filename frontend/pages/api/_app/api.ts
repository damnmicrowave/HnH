export interface GenericResponse {
  status: 'success' | 'error'
  error?: string
}

// handy wrapper for try-catch to avoid towers of doom
export const promise = async <Response>(promise: Promise<Response>) => {
  try {
    const response = await promise
    return { response }
  } catch (error: any) {
    console.error(error)
    return { error }
  }
}
