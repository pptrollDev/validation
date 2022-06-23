export interface IRegNoWithLabel {
  id: string
  label: string
  defaultValue?: string
  tipLabel?: string
  errorLabel?: string
  onChange: (id: string, value: string) => void
}
