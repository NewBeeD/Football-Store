import { useAuthContext } from "./useAuthContext"

export const useLogout = () => {

  const {dispatch} = useAuthContext()

  const logout = () => {

    // Remove user from Storage
    localStorage.removeItem('user')

    // dispatch logout function
    dispatch({type: 'LOGOUT'})
  }

  return {logout}
}
 