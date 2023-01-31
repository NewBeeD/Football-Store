import { EcommContext } from "../context/EcommContext";
import { useContext } from "react";

export const useEcomContext = () =>{

  const context = useContext(EcommContext)

  if(!context){
    throw Error('useEcomContext must be used inside an EcomContextProvider')
  }

  return context
}