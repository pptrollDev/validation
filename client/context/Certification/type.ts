import { Dispatch } from 'react'

export type ICertificationDispatch = Dispatch<ICertificationAction>

export interface ICertificationState {
  name: string
  phoneNumber: string
  regNumber: string
}

export type ICertificationAction = {
  type: 'createCertification'
  data: ICertificationState
}
