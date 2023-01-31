import { createContext, useReducer } from "react"

export const EcommContext = createContext()

export const ecomReducer = (state, action) => {

  switch(action.type){

    case 'DISPLAY_ITEMS':
      return {
        items: action.payload
      }

    case 'ADD_ITEM':
      return { items: [action.payload, ...state.items]}

    case 'DELETE_ITEM':
      return {
        items: state.items.filter((item) => item._id !== action.payload._id)
      }
    
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