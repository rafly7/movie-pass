import React, { createContext, useContext, useReducer } from "react"
import { lk21Reducer, initialState } from "./lk21_reducer"

const LK21StateContext = createContext()
const LK21DispatchContext = createContext()

function LK21Provider({children}) {
  const [state, dispatch] = useReducer(lk21Reducer, initialState)

  const thunkDispatch = React.useCallback(
    (action) =>
      typeof action === 'function'
        ? action(dispatch, state)
        : action,
    []
  );

  return (
    <LK21StateContext.Provider value={state}>
      <LK21DispatchContext.Provider value={thunkDispatch}>
        {children}
      </LK21DispatchContext.Provider>
    </LK21StateContext.Provider>
  )
}

function useLK21State() {
  const context = useContext(LK21StateContext)
  if (context === undefined) throw new Error('useLK21State must be within a LK21Provider')
  return context
}

function useLK21Dispatch() {
  const context = useContext(LK21DispatchContext)
  if (context === undefined) throw new Error('useLK21Dispatch must be within a LK21Provider')
  return context
}

export { LK21Provider, useLK21Dispatch, useLK21State }