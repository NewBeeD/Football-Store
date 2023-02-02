import Nike from '../images/Nike/Nike'
import Adidas from '../images/Adidas/Adidas'
import Puma from '../images/Puma/Puma'

import {AiFillDelete} from 'react-icons/ai'

import { useState, useEffect} from "react";
import { useEcomContext } from '../hooks/useEcomContext';

import NavBar from "../Components/Navbar";
import Footer from '../Components/Footer'



const Cart = () => {

  // const {inventory, dispatch} = useEcomContext()
  const [inventory, setInventory] = useState(null)
  const [totalCost, setTotalCost] = useState(null);
  

  const fetchInventory = async () => {

    await fetch('http://localhost:5000/api/cart')
    .then((response) => response.json())
    .then((json) =>{

      setInventory(json.inventory)

      // dispatch({type: 'DISPLAY_ITEMS', payload: json.inventory})
    }) 
    .catch(err => err.message)
}

  const calcTotalCost = () => {

    setTotalCost(inventory.map(items => items.item[0].price).reduce((accu, item) => accu + item))
    console.log(totalCost);
  }
   

  
  useEffect(() => {

    fetchInventory()
        
  }, [])


  function imageFinder(path){

    if(path.includes('nike')){return Nike[path]}
    else if(path.includes('adidas')){return Adidas[path]}
    else if(path.includes('puma')){return Puma[path]}
  }

  const [windowDimension, setWindowDimension] = useState({winWidth: window.innerWidth, winHeight: window.innerHeight});

  const detectWH = () => {
    setWindowDimension({
      winWidth: window.innerWidth,
      winHeight: window.innerHeight
    })
  }

  useEffect(() => {

    window.addEventListener('resize', detectWH)
    return () => {window.removeEventListener('resize', detectWH)}
  }, [])

  const width = windowDimension.winWidth;

  const removeItem = async (id) => {

    await fetch('http://localhost:5000/api/cart/' + id, {
      method: 'DELETE'
    })
    .then(fetchInventory())
    .catch(err=> err.message)
  }

  return ( 

    <>

    <NavBar />

    <div className="mt-16 font-barlow pl-4">
      <h2 className="font-extrabold text-2xl">YOUR BAG</h2>
      <h4 className="mt-2 w-96 md:w-[80rem] text-lg">Items in your bag are not reserved — check out now to make them yours.</h4>
    </div>

    {/* Section containing both Items and Cart Total */}
    <section className='mt-12 flex flex-col items-center md:flex-row md:justify-evenly mb-24 md:max-w-[80rem] md:m-auto'>

      {/* This div encapsulates the Items */}
          
      <div className={`${(width > 375 && width < 640)? 'max-w-[23rem]':''} flex flex-col items-center md:max-w-[40ch] space-y-4`}>

        {inventory && inventory.map(items => (
          
          <div className={`max-w-[50ch] border-2 border-black rounded-2xl`} key={items._id}>

            <div>
              <img src={imageFinder(items.item[0].path)} alt="" className='rounded-t-2xl'/>
            </div>

            <div className='my-4 pl-2 font-bold'>
              <h2>{items.item[0].name}</h2>
              <h2>${items.item[0].price}</h2>
              <h2>Size: {items.size}</h2>
            </div>

            <div className='flex flex-row justify-between items-center'>
              <div className='pl-2 pb-2'>
                <select className="w-16 p-2 border-2">
                  <option value="">1</option>
                  <option value="">2</option>
                  <option value="">3</option>
                  <option value="">4</option>
                  <option value="">5</option>
                  <option value="">6</option>
                </select>
              </div>

              <div className='pr-4'>
                <AiFillDelete className='text-red-900 hover:scale-[1.7] cursor-pointer transition duration-500 scale-[1.5]' onClick={() => removeItem(items._id)}/>
              </div>
            </div>

          </div>                  
        ))}

      </div>

      {/* Order Summary Containment */}
      <div className='flex flex-col items-center mt-8'>


        <div className="md:w-full border-2 border-slate-400 shadow-md space-y-2 rounded-lg p-4">
            <h2 className="mb-8 text-3xl font-bold">Order Summary</h2>

            <div className="flex flex-row justify-between">
              <div>Original Cost</div>
              <div>$</div>
            </div>

            <div className="flex flex-row justify-between">
              <div>Sale</div>
              <div>-$--</div>
            </div>

            <div className="flex flex-row justify-between">
              <div>2 Items</div>
              <div>$--</div>
            </div>


            <div className="flex flex-row justify-between">
              <div>Delivery</div>
              <div>Free</div>
            </div>

            <div className="flex flex-row justify-between">
              <div>Sales Tax</div>
              <div>$--</div>
            </div>

            <div className="flex flex-row justify-between text-2xl font-bold">
              <div>Total</div>
              <div>$--</div>
            </div>

          </div>

        <div>
          <button className="mt-2 mb-8 text-2xl text-white font-bold bg-black tracking-wider border-2 border-white w-48 rounded-lg hover:text-red-900 hover:scale-110 transition duration-500 ease-in-out">CHECK OUT</button>
        </div>

      </div>


    </section>

    <Footer />

    </>


   );
}
 
export default Cart;