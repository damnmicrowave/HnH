export interface GenericResponse {
  status: 'success' | 'error'
  error?: string
  data?: any
}
