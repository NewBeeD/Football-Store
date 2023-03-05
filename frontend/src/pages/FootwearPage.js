import { Link } from "react-router-dom";

import NavBar from "../Components/Navbar";
import { useState, useEffect } from 'react'

import Adidas from '../images/Adidas/Adidas'
import Nike from '../images/Nike/Nike'
import Puma from '../images/Puma/Puma'

import { useEcomContext } from '../hooks/useEcomContext';





const FootwearPage = () => {

  const [filtered, setFilter] = useState(null)
  const [displayFilter, setDisplayFilter] = useState(false)
  const {inventory, dispatch} = useEcomContext()

  let data, filteredData;
  

  const fetchInventory = async () => {

     
    await fetch('http://localhost:5000/api/football')
    .then((response) => response.json())
    .then((json) =>
      {dispatch({type: 'DISPLAY_ITEMS', payload: json.inventory})})
    .catch(err => err.message)
  }

  useEffect(() => {fetchInventory()}, [])




  function imageFinder(path){

    if(path.includes('nike')){return Nike[path]}
    else if(path.includes('adidas')){return Adidas[path]}
    else if(path.includes('puma')){return Puma[path]}
  }

  function sortBoots(brand){

    
      if(brand === 'All'){
        setDisplayFilter(false)
        setFilter(inventory.filter(item => item.category === 'Footwear'))
      }

      if(brand === 'Nike'){
        setDisplayFilter(true)
        setFilter(inventory.filter(item => item.brand === 'Nike' && item.category === 'Footwear'))
        console.log(filtered);}

      if(brand === 'Adidas'){
        setDisplayFilter(true)
        setFilter(inventory.filter(item => item.brand === 'Adidas' && item.category === 'Footwear'))
        console.log(filtered);}

      if(brand === 'Puma'){
        setDisplayFilter(true)
        setFilter(inventory.filter(item => item.brand === 'Puma' && item.category === 'Footwear'))
        console.log(filtered);}
  }

  if(displayFilter){

    return ( 
    
      <>
        <NavBar />
  
        <div className="mt-24 text-center">
          <h1 className="text-3xl font-bold">MEN'S FOOTBALL CLEATS</h1>
        </div>
  
  
        <div className="flex flex-row w-[20%] justify-center m-auto mt-8 font-bold space-x-2 ">
  
          <div className="md:text-2xl text-primary5 border-2 border-red-600 rounded-lg p-1 px-3 hover:scale-110 hover:bg-red-400 hover:text-white transition duration-150 ease-in"><button onClick={()=> sortBoots('All')}>All</button></div>
          <div className="md:text-2xl text-primary5 border-2 border-red-600 rounded-lg p-1 px-3 hover:scale-110 hover:bg-red-400 hover:text-white transition duration-150 ease-in"><button onClick={()=> sortBoots('Adidas')}>Adidas</button></div>
          <div className="md:text-2xl text-primary5 border-2 border-red-600 rounded-lg p-1 px-3 hover:scale-110 hover:bg-red-400 hover:text-white transition duration-150 ease-in"><button onClick={()=> sortBoots('Nike')}>Nike</button></div>
          <div className="md:text-2xl text-primary5 border-2 border-red-600 rounded-lg p-1 px-3 hover:scale-110 hover:bg-red-400 hover:text-white transition duration-150 ease-in"><button onClick={()=> sortBoots('Puma')}>Puma</button></div>
        </div>
  
        
        <div className="p-4 space-x-2 flex flex-row flex-wrap justify-center items-center text-center md:max-w-[80rem] m-auto">
  
  
        {filtered && filtered.map(items => (
  
        <Link to={`/${items._id}`}>
        <div key={items._id} className="mt-12 w-64 h-96 border-2 rounded-2xl hover:scale-110 transition duration-500 cursor-pointer" >
  
          <img src={imageFinder(items.path)} alt="Footwear" className="rounded-t-2xl"/>
          <h3>{ items.brand }</h3>
          <h3>{ items.name }</h3>
          <h3>{ `$${items.price}` }</h3>
  
        </div>
        </Link>
  
        ))}
  
        </div>
  
      </>
     );
  }
  

  return ( 
    
    
    <>
      <NavBar />

      <div className="mt-24 text-center">
        <h1 className="text-3xl font-bold">MEN'S FOOTBALL CLEATS</h1>
      </div>


      <div className="flex flex-row w-[20%] justify-center m-auto mt-8 font-bold space-x-2 ">

        <div className="md:text-2xl text-primary5 border-2 border-red-600 rounded-lg p-1 px-3 hover:scale-110 hover:bg-red-400 hover:text-white transition duration-150 ease-in"><button onClick={()=> sortBoots('All')}>All</button></div>
        <div className="md:text-2xl text-primary5 border-2 border-red-600 rounded-lg p-1 px-3 hover:scale-110 hover:bg-red-400 hover:text-white transition duration-150 ease-in"><button onClick={()=> sortBoots('Adidas')}>Adidas</button></div>
        <div className="md:text-2xl text-primary5 border-2 border-red-600 rounded-lg p-1 px-3 hover:scale-110 hover:bg-red-400 hover:text-white transition duration-150 ease-in"><button onClick={()=> sortBoots('Nike')}>Nike</button></div>
        <div className="md:text-2xl text-primary5 border-2 border-red-600 rounded-lg p-1 px-3 hover:scale-110 hover:bg-red-400 hover:text-white transition duration-150 ease-in"><button onClick={()=> sortBoots('Puma')}>Puma</button></div>
      </div>

      
      <div className="p-4 space-x-2 flex flex-row flex-wrap justify-center items-center text-center md:max-w-[80rem] m-auto">

        {inventory && inventory.filter(item => item.category === 'Footwear').map(items => (

          <Link to={`/${items._id}`}>
          <div key={items._id} className="mt-12 w-64 h-96 border-2 rounded-2xl hover:scale-110 transition duration-500 cursor-pointer" >

            <img src={imageFinder(items.path)} alt="Footwear" className="rounded-t-2xl"/>
            <h3>{ items.brand }</h3>
            <h3>{ items.name }</h3>
            <h3>{ `$${items.price}` }</h3>

          </div>
          </Link>

        ))}

    
      </div>

    </>

   );
}
 
export default FootwearPage;