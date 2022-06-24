import { IForm } from '../../organisms/Home/type'

export interface ITHomeModal {
  form: IForm
  isVisible: boolean
  setIsVisible: (isVisible: boolean) => void
}
