export interface IButton {
  id: string
  label: string
  color?: string
  backgroundColor?: string
  width?: string
  disabled?: boolean
  onClick?: (id: string) => void
}
