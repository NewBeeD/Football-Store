import { createContext, useReducer } from "react"

export const EcommContext = createContext()

export const ecomReducer = (state, action) => {

  // console.log('State', state.inventory);
  // console.log('Payload', action.payload);



  // if(state !== null){

  //   data = state.inventory.map((item) => item._id !== action.payload._id)
  //   console.log(data);
  // }



  switch(action.type){

    case 'DISPLAY_ITEMS':
      return { inventory: action.payload }

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