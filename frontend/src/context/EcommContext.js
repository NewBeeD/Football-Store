import { createContext, useReducer } from "react"

export const EcommContext = createContext()

export const ecomReducer = (state, action) => {

  console.log('State: ', state);
  console.log('Payload: ', action.payload);


  switch(action.type){

    case 'DISPLAY_ITEMS':
      return { inventory: action.payload }

    case 'ADD_ITEM':
      return { inventory: [action.payload, ...state.inventory]}

    case 'DELETE_ITEM':
      return {
        inventory: state.inventory.filter((item) => item._id !== action.payload._id)
      }
    
    default:
      return state;

  }

}

export const EcomContextProvider = ({ children }) => {

  const [state, dispatch] = useReducer(ecomReducer, {
    inventory: null
  });

  

  return (
    <EcommContext.Provider value={{...state, dispatch}}>
      { children }
    </EcommContext.Provider>
  )

}