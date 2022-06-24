import { ICertificationState } from '../../../context/Certification/type'

export interface IComplete {
  certification: ICertificationState
  incomes: IIncome[]
  office: IOffice
}

export interface IIncome {
  type: 'prepaid' | 'refund'
  amount: number
}

export interface IOffice {
  name: string
  phone: string
}
