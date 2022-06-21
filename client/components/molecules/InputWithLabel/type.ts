export interface IInputWithLabel {
  id: string
  label: string
  tipLabel?: string
  errorLabel?: string
  onChange: (id: string, value: string) => void
}
