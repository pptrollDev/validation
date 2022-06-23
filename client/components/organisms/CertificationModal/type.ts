export interface ICertificationModal {
  form: IForm
  setForm: (form: IForm) => void
  isVisible: boolean
  setIsVisible: (isVisible: boolean) => void
  submit: () => void
}

export interface IForm {
  privacy: boolean
  service: boolean
  unique: boolean
  info: boolean
}
