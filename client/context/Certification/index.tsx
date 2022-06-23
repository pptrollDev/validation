import React, { createContext, useContext, useReducer } from 'react'
import {
  ICertificationAction,
  ICertificationDispatch,
  ICertificationState,
} from './type'

const CertificationStateContext = createContext<
  ICertificationState | undefined
>(undefined)
const CertificationDispatchContext = createContext<
  ICertificationDispatch | undefined
>(undefined)

function reducer(
  state: ICertificationState | undefined,
  action: ICertificationAction,
): ICertificationState | undefined {
  switch (action.type) {
    case 'createCertification':
      return action.data
    default:
      throw new Error('Unhandled action')
  }
}

export function CertificationProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [state, dispatch] = useReducer(reducer, undefined)

  return (
    <CertificationStateContext.Provider value={state}>
      <CertificationDispatchContext.Provider value={dispatch}>
        {children}
      </CertificationDispatchContext.Provider>
    </CertificationStateContext.Provider>
  )
}

export function useCertificationState() {
  const state = useContext(CertificationStateContext)
  return state
}

export function useCertificationDispatch() {
  const dispatch = useContext(CertificationDispatchContext)
  if (!dispatch) throw new Error('Cannot find Provider')
  return dispatch
}
