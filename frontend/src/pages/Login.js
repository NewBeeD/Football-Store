import { useState } from 'react'
import {useLogin} from '../hooks/useLogin'
import NavBar from '../Components/Navbar'

const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {login, error, isLoading} = useLogin()


  const handleSubmit = async (e) => {

    e.preventDefault()

    await login(email, password)
  }



  return ( 


    <>

      <NavBar />

      <form className='md:mt-64 mt-[50%] border-4 border-prim2 w-[90%] h-96 m-auto flex flex-col items-center rounded-2xl p-4 max-w-[40rem]' onSubmit={handleSubmit}>

        <h3 className='mb-16 text-4xl font-bold tracking-widest'>Login</h3>

        <label className='tracking-widest font-bold text-2xl'>Email</label>
        <input 
        className='border-2 border-green-700 w-72 rounded-xl mb-6 text-center p-1 font-semibold'
        type="email"
        onChange={(e) => setEmail(e.target.value)} 
        value={email}/>


        <label className='tracking-widest font-bold text-2xl'>Password</label>
        <input 
        className='border-2 border-green-700 w-72 rounded-xl mb-6 text-center p-1 font-semibold'
        type="password"
        onChange={(e) => setPassword(e.target.value)} 
        value={password}/>


        <button className='bg-red-900 w-24 p-2 rounded-2xl text-white font-bold tracking-widest hover:scale-125 transition duration-300' disabled={isLoading}>Login</button>
        {error && <div>{error}</div>}

      </form>

    </>

   );
}
 
export default Login;