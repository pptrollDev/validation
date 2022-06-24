export interface IInputWithLabel {
  id: string
  label: string
  defaultValue?: string
  autoFocus?: boolean
  tipLabel?: string
  errorLabel?: string
  onChange: (id: string, value: string) => void
  onEnter?: () => void
}
