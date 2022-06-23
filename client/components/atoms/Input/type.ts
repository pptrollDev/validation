export interface IInput {
  id: string
  type?: 'text' | 'password'
  defaultValue?: string
  onChange: (id: string, value: string) => void
}
