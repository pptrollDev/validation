import { IForm } from '../../organisms/Certification/type'

export interface ITCertification {
  form: IForm
  setForm: (form: IForm) => void
  setIsVisible: (isVisible: boolean) => void
}
