import NavBar from "../Components/Navbar";
import { useState, useEffect } from 'react'

import Adidas from '../images/Adidas/Adidas'
import Nike from '../images/Nike/Nike'
import Puma from '../images/Puma/Puma'





const FootwearPage = () => {

  const [inventory, setInventory] = useState(null)
  const [filterItems, setFilterItems] = useState(null)

  const fetchInventory = async () => {

     
    await fetch('http://localhost:5000/api/football')
    .then((response) => response.json())
    .then((json) => setInventory(json.inventory))
    .catch(err => err.message)
  }

  useEffect(() => {fetchInventory()}, [])

  function imageFinder(path){

    if(path.includes('nike')){return Nike[path]}
    else if(path.includes('adidas')){return Adidas[path]}
    else if(path.includes('puma')){return Puma[path]}
  }

  function sortBoots(brand){

    if(brand === 'All'){fetchInventory(); return}

    let filter = () => {
      const filteredCleats = inventory.filter(items => items.brand === brand && items.category === 'Footwear')
      console.log(filteredCleats);
      setInventory(filteredCleats)}

    fetchInventory().then(filter)
    console.log('this is the inventory: ', inventory);
    
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

          <div key={items._id} className="mt-12 w-64 h-96 border-2 rounded-2xl hover:scale-110 transition duration-500 cursor-pointer">

            <img src={imageFinder(items.path)} alt="Footwear" className="rounded-t-2xl"/>
            <h3>{ items.brand }</h3>
            <h3>{ items.name }</h3>
            <h3>{ `$${items.price}` }</h3>

          </div>

        ))}

      </div>

    </>


    






   );
}
 
export default FootwearPage;