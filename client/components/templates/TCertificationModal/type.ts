import { IForm } from '../../organisms/Certification/type'

export interface ITCertificationModal {
  form: IForm
  isVisible: boolean
  setIsVisible: (isVisible: boolean) => void
}
