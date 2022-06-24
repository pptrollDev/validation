export interface IInput {
  id: string
  type?: 'text' | 'password'
  defaultValue?: string
  autoFocus?: boolean
  onChange: (id: string, value: string) => void
  onEnter?: () => void
}
