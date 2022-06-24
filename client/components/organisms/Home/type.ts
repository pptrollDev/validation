export interface IHome {
  form: IForm
  setForm: (form: IForm) => void
  error: IError
  setError: (error: IError) => void
  disabled: boolean | undefined
  setDisabled: (disabled: boolean) => void
  setIsVisible: (isVisible: boolean) => void
}

export interface IForm {
  name: string
  phoneNumber: string
  regNumber: string
}

export interface IError {
  name?: string
  phoneNumber?: string
  regNumber?: string
}
