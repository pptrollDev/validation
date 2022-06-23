import React, { createContext, useContext, useReducer } from 'react'
import { IEasySignAction, IEasySignDispatch, IEasySignState } from './type'

const EasySignStateContext = createContext<IEasySignState | undefined>(
  undefined,
)
const EasySignDispatchContext = createContext<IEasySignDispatch | undefined>(
  undefined,
)

function reducer(
  state: IEasySignState | undefined,
  action: IEasySignAction,
): IEasySignState | undefined {
  switch (action.type) {
    case 'createEasySign':
      return action.data
    default:
      throw new Error('Unhandled action')
  }
}

export function EasySignProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, undefined)

  return (
    <EasySignStateContext.Provider value={state}>
      <EasySignDispatchContext.Provider value={dispatch}>
        {children}
      </EasySignDispatchContext.Provider>
    </EasySignStateContext.Provider>
  )
}

export function useEasySignState() {
  const state = useContext(EasySignStateContext)
  return state
}

export function useEasySignDispatch() {
  const dispatch = useContext(EasySignDispatchContext)
  if (!dispatch) throw new Error('Cannot find Provider')
  return dispatch
}
