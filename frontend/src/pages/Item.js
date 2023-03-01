import { useParams } from "react-router-dom";
import { useState, useEffect } from "react"
import { useAuthContext } from "../hooks/useAuthContext";

import Adidas from '../images/Adidas/Adidas'
import Nike from '../images/Nike/Nike'
import Puma from '../images/Puma/Puma'
import NavBar from "../Components/Navbar";
import Footer from "../Components/Footer";


const Item = () => {

  const {id} = useParams()

  const [inventory, setInventory] = useState(null)
  const [size, setSize] = useState(null)
  const [error, setError] = useState(null)
  const {user} = useAuthContext()
  
  
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


  const fetchInventory = async () => {
     
    await fetch('http://localhost:5000/api/football')
    .then((response) => response.json())
    .then((json) => setInventory(json.inventory))
    .catch(err => err.message)
}

  
  useEffect(() => {

    fetchInventory()

  }, [])

  function imageFinder(path){

    if(path.includes('nike')){return Nike[path]}
    else if(path.includes('adidas')){return Adidas[path]}
    else if(path.includes('puma')){return Puma[path]}
  }

  async function addToCart(){   

    const url = 'http://localhost:5000/api/cart'

    // http://localhost:5000/api/football


    const item = inventory.filter(item => item._id === id);
    const cartItems = {item, size}


    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(cartItems),
      headers: {
        'Content-Type': 'application/json'
      }
    })

    const json = await response.json()

    if(!response.ok){

      setError(json.error)

    }
    if(response.ok){
      setSize(null)
      setError(null)
      console.log('New Item Added');
    }
  }

  function addShoeSize(e){

    setSize(Number(e.target.textContent));
    e.target.focus()
  }



  return ( 

    <>

      <NavBar />

      <div className="mt-20 w-[90%] m-auto flex flex-col justify-center md:flex-row md:justify-center md:space-x-[14rem] mb-24 font-barlow">

        <div>
          {inventory && inventory.filter(item => item._id === id).map(item => (

            <div className="flex flex-col justify-center text-center">
            
              <div className={`${width < 380? "text-2xl w-80 font-bold text-center": 'hidden'}`}>{item.name}</div>
              <div className={`${width < 380? "font-bold": 'hidden'}`}>{`$${item.price}`}</div>

              <img src={imageFinder(item.path)} alt="Football Cleat" className="h-auto w-96 border-2 rounded-2xl"/>

            </div>
          ))}
        </div>


        <div className="flex flex-col">
        {inventory && inventory.filter(item => item._id === id).map(item => (

          <div className="flex flex-col space-y-6 justify-center items-center">

            <div className={`${width < 380? 'hidden':''} text-2xl w-64 font-bold text-center`}>{item.name}</div>
            <div className={`${width < 380?'hidden':''} font-bold`}>{`$${item.price}`}</div>

            <div>Sizes</div>

            <div className="flex w-64 flex-wrap justify-center">
              <div className="border-2 w-12 h-12 flex justify-center items-center font-bold cursor-pointer hover:text-red-900 hover:scale-110 transition duration-200" onClick={(e)=>addShoeSize(e)}>4</div>
              <div className="border-2 w-12 h-12 flex justify-center items-center font-bold cursor-pointer hover:text-red-900 hover:scale-110 transition duration-200" onClick={(e)=>addShoeSize(e)}>4.5</div>
              <div className="border-2 w-12 h-12 flex justify-center items-center font-bold cursor-pointer hover:text-red-900 hover:scale-110 transition duration-200" onClick={(e)=>addShoeSize(e)}>5</div>
              <div className="border-2 w-12 h-12 flex justify-center items-center font-bold cursor-pointer hover:text-red-900 hover:scale-110 transition duration-200" onClick={(e)=>addShoeSize(e)}>5.5</div>
              <div className="border-2 w-12 h-12 flex justify-center items-center font-bold cursor-pointer hover:text-red-900 hover:scale-110 transition duration-200" onClick={(e)=>addShoeSize(e)}>6</div>
              <div className="border-2 w-12 h-12 flex justify-center items-center font-bold cursor-pointer hover:text-red-900 hover:scale-110 transition duration-200" onClick={(e)=>addShoeSize(e)}>6.5</div>
              <div className="border-2 w-12 h-12 flex justify-center items-center font-bold cursor-pointer hover:text-red-900 hover:scale-110 transition duration-200" onClick={(e)=>addShoeSize(e)}>7</div>
              <div className="border-2 w-12 h-12 flex justify-center items-center font-bold cursor-pointer hover:text-red-900 hover:scale-110 transition duration-200" onClick={(e)=>addShoeSize(e)}>7.5</div>
              <div className="border-2 w-12 h-12 flex justify-center items-center font-bold cursor-pointer hover:text-red-900 hover:scale-110 transition duration-200" onClick={(e)=>addShoeSize(e)}>8</div>
              <div className="border-2 w-12 h-12 flex justify-center items-center font-bold cursor-pointer hover:text-red-900 hover:scale-110 transition duration-200" onClick={(e)=>addShoeSize(e)}>8.5</div>
              <div className="border-2 w-12 h-12 flex justify-center items-center font-bold cursor-pointer hover:text-red-900 hover:scale-110 transition duration-200" onClick={(e)=>addShoeSize(e)}>9</div>
              <div className="border-2 w-12 h-12 flex justify-center items-center font-bold cursor-pointer hover:text-red-900 hover:scale-110 transition duration-200" onClick={(e)=>addShoeSize(e)}>9.5</div>
              <div className="border-2 w-12 h-12 flex justify-center items-center font-bold cursor-pointer hover:text-red-900 hover:scale-110 transition duration-200" onClick={(e)=>addShoeSize(e)}>10</div>
              <div className="border-2 w-12 h-12 flex justify-center items-center font-bold cursor-pointer hover:text-red-900 hover:scale-110 transition duration-200" onClick={(e)=>addShoeSize(e)}>10.5</div>
              <div className="border-2 w-12 h-12 flex justify-center items-center font-bold cursor-pointer hover:text-red-900 hover:scale-110 transition duration-200" onClick={(e)=>addShoeSize(e)}>11</div>
              <div className="border-2 w-12 h-12 flex justify-center items-center font-bold cursor-pointer hover:text-red-900 hover:scale-110 transition duration-200" onClick={(e)=>addShoeSize(e)}>11.5</div>
              <div className="border-2 w-12 h-12 flex justify-center items-center font-bold cursor-pointer hover:text-red-900 hover:scale-110 transition duration-200" onClick={(e)=>addShoeSize(e)}>12</div>
              <div className="border-2 w-12 h-12 flex justify-center items-center font-bold cursor-pointer hover:text-red-900 hover:scale-110 transition duration-200" onClick={(e)=>addShoeSize(e)}>12.5</div>
              <div className="border-2 w-12 h-12 flex justify-center items-center font-bold cursor-pointer hover:text-red-900 hover:scale-110 transition duration-200" onClick={(e)=>addShoeSize(e)}>13</div>
            </div>

            <button className="mt-8 border-2 rounded-2xl border-red-900 text-white bg-red-800 font-bold hover:scale-110 transition duration-300 w-48" onClick={addToCart}>Add to Bag</button>

          </div>
        
        ))}
        </div>

      </div>

      <Footer />


    
    </>
   );
}
 
export default Item;