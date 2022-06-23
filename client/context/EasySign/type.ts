import { Dispatch } from 'react'

export type IEasySignDispatch = Dispatch<IEasySignAction>

export interface IEasySignState {
  startedAt: Date
  expiredAt: Date
}

export type IEasySignAction = { type: 'createEasySign'; data: IEasySignState }
