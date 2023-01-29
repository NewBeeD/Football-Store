import { createContext, useReducer } from "react";

export const EcommContext = createContext()

export const ecomReducer = (state, action) => {

  switch(action.type){

    case 'ADD_ITEM':
      return { items: [action.payload, ...state.items]}
    
    default:
      return state;

  }

}

export const EcomContextProvider = ({ children }) => {

  const [state, dispatch] = useReducer(ecomReducer, {
    items: null
  });

  

  return (
    <EcommContext.Provider value={{...state, dispatch}}>
      { children }
    </EcommContext.Provider>
  )

}