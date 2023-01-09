import { useEffect, useState} from 'react'

import { NikeImage1 } from '../Assets/NikeImageImports'
import { PumaImage1 } from '../Assets/PumaImageImports'
import { AdidasImage1 } from '../Assets/AdidasImageImports'


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

  const checkImage = (path) => {
    if(path.includes("Nike")) return NikeImage1;
    else if (path.includes("Adidas")) return AdidasImage1;
    else return PumaImage1;
  }




  return ( 

    <div className="text-center">


      <div className="mt-8"><h1 className="text-4xl font-barlow font-bold">Popular products</h1></div>

      <div className='flex flex-row justify-center space-x-8'>

        {inventory && inventory.filter(item => item.name === "PREDATOR EDGE 94+" || item.name === "Nike Phantom GT2 Elite" || item.name === "PUMA x BATMAN FUTURE").map(filteredItems => (
          
          <div className="mt-8 flex flex-row justify-center flex-wrap font-barlow font-semibold text-center md:space-x-8 w-24 sm:w-36 md:w-48">
          
            <div className="flex flex-col items-center border-2 shadow-xl hover:scale-110 duration-300 rounded-2xl h-auto text-center w-28 sm:w-56">

              <img src={checkImage(filteredItems.path)} alt="Cleats" className="rounded-2x md:w-[18rem] cursor-pointer w-24 sm:w-[24rem]"/>

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

