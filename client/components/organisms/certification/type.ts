export interface ICertification {
  form: IForm
  setForm: (form: IForm) => void
  error: IError
  setError: (error: IError) => void
  disabled: boolean | undefined
  setDisabled: (disabled: boolean) => void
}

export interface IForm {
  name: string
  phone: string
  regNo: string
}

export interface IError {
  name?: string
  phone?: string
  regNo?: string
}
