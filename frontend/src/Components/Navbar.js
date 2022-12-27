import { GiSoccerBall} from 'react-icons/gi';
import { AiOutlineShoppingCart} from 'react-icons/ai';
import { CiCircleList} from 'react-icons/ci';
import { BsSearch} from 'react-icons/bs';
import { GrClose} from 'react-icons/gr';
import { useEffect, useState } from 'react';


const NavBar = () => {

  const [menuToggle, setMenuToggle] = useState(false)


  const screen = window.innerWidth;

  const openMenu = event => {

    setMenuToggle(!menuToggle)
  }



  return ( 

    <div className='flex font-barlow w-48'>

      {/* Side Panel */}
      <div className={`${menuToggle ? 'left-0 transform duration-300 ease-[cubic-bezier(1,0,0,.99)]': '-left-[70%]'} h-screen bg-prim3 absolute z-10 text-white font-extrabold overflow-hidden shadow-2xl w-3/5 md:w-2/6 lg:w-1/6 xl:w-1/6`}>

        <div className={`flex flex-row justify-between mt-2 items-center`}>
          <div>
          <GiSoccerBall className='w-10 h-10 text-blue-900 cursor-pointer ml-2'/>
          </div>

          <div>
            <GrClose className={`${menuToggle ? '': '-left-[70%] transform duration-300 ease-[cubic-bezier(1,0,0,.99)]'} h-6 w-6 cursor-pointer bg-white mr-4`} onClick={openMenu}/>
          </div>
        </div>

        <div className='flex flex-col justify-center items-center'>

          <div>
              <ul className='flex flex-col mt-8 space-y-4'>
                <li className='md:my-0'>FOOTWEAR</li>
                <li className='md:my-0'>APPAREL</li>
                <li className='md:my-0'>EQUIPMENT</li>
                <li className='md:my-0'>SALE</li>
              </ul>
          </div>

          <div>
            
            <ul className={`flex flex-col mt-8 -ml-6 space-y-2`}>
                <li>SIGN-UP</li>
                <li>LOG-IN</li>
            </ul>

          </div>
        </div>
  
      </div>

      {/* Home Screen */}
      <div className={`${menuToggle ? 'bg-black opacity-50': ''} absolute z-0 w-[100%] h-[5%] px-4 flex justify-between items-center font-extrabold bg-prim2 shadow-xl`}>

        
        <div className="logo">
          <GiSoccerBall className='w-7 h-7 text-blue-900 cursor-pointer'/>
        </div>

        <div className={`md:flex md:flex-row md:justify-between hidden`}>   


          <div>

            <ul className='md:flex md:items-center md:space-x-4 md:flex-row font-extrabold'>
              <li className='my-2 md:my-0'>FOOTWEAR</li>
              <li className='my-2 md:my-0'>APPAREL</li>
              <li className='my-2 md:my-0'>EQUIPMENT</li>
              <li className='my-2 md:my-0'>SALE</li>
            </ul>
          </div>

        </div>

        <div className={`flex space-x-2`}>
            <ul className={`md:flex md:items-center md:space-x-2 hidden`}>

              <li>SIGN-UP</li>
              <li>LOG-IN</li>
            </ul>

            <div className={`flex space-x-7 justify-center items-center`}>
              <AiOutlineShoppingCart className={`h-6 w-6 text-blue-900`}/>

              <BsSearch className='md:hidden h-5 w-5 text-blue-900'/>

              <div className='md:hidden relative right-0'><CiCircleList className='menu-show w-7 h-7 cursor-pointer hover:cursor-pointer text-blue-900' onClick={openMenu}/></div>
            </div>

        </div>
        
      </div> 

    </div>

   );
}
 
export default NavBar;