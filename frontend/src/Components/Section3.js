import { useEffect, useState} from 'react'

import Adidas from '../images/Adidas/Adidas'
import Nike from '../images/Nike/Nike'
import Puma from '../images/Puma/Puma'



const Section3 = () => {

  const [inventory, setInventory] = useState(null)

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


  return ( 

    <div className="text-center">


      <div className="mt-8"><h1 className="text-4xl font-barlow font-bold">Popular products</h1></div>

      <div className='flex flex-row justify-center space-x-8'>

        {inventory && inventory.filter(item => item.name === "PREDATOR EDGE 94+" || item.name === "Nike Phantom GT2 Elite" || item.name === "PUMA x BATMAN FUTURE").map(filteredItems => (
          
          <div className="mt-8 flex flex-row justify-center flex-wrap font-barlow font-semibold text-center md:space-x-8 w-24 sm:w-36 md:w-48">
          
            <div className="flex flex-col items-center border-2 shadow-xl hover:scale-110 duration-300 rounded-2xl h-auto text-center w-28 sm:w-56">

              <img src={imageFinder(filteredItems.path)} alt="Cleats" className="rounded-2x md:w-[18rem] cursor-pointer w-24 sm:w-[24rem]"/>

              <h2 className="text-xs w-24 md:text-base md:w-3/4 sm:text-sm mt-2">{ filteredItems.name }</h2>
              <h3 className='text-xs sm:text-sm'>{ filteredItems.price }</h3>
            </div>

          </div>

        ))}

      </div>

    </div>


   );
}
 
export default Section3;

