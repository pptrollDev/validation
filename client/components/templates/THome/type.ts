import { IForm } from '../../organisms/Home/type'

export interface ITHome {
  form: IForm
  setForm: (form: IForm) => void
  setIsVisible: (isVisible: boolean) => void
}
