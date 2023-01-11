import { useState, UseEffect } from 'react'
import APPAREL from '../images/Apparel/apparel'

const TeamJersies = () => {

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

  const checkImage = (category) => {
    if(path.includes("Chelsea")) return NikeImage1;
    else if (path.includes("Liverpool")) return AdidasImage1;
    else if (path.includes("Barcelona")) return AdidasImage1;
    else return PumaImage1;
  }



  return ( 

  
    <>

      <h2 className="text-center text-5xl mt-16 font-bold tracking-widest"><a href="">Shop Team Jersies</a></h2>

      <section className="w-[76%] h-auto shadow-xl p-8 m-auto mt-8 flex flex-wrap justify-center rounded-2xl font-bold tracking-wide">

        {inventory && inventory.filter(item => item.name === "PREDATOR EDGE 94+" || item.name === "Nike Phantom GT2 Elite" || item.name === "PUMA x BATMAN FUTURE").map(filteredItems => (
            
            <div className="mt-8 flex flex-row justify-center flex-wrap font-barlow font-semibold text-center md:space-x-8 w-24 sm:w-36 md:w-48">
            
              <div className="flex flex-col items-center border-2 shadow-xl hover:scale-110 duration-300 rounded-2xl h-auto text-center w-28 sm:w-56">

                <img src={checkImage(filteredItems.path)} alt="Cleats" className="rounded-2x md:w-[18rem] cursor-pointer w-24 sm:w-[24rem]"/>

                <h2 className="text-xs w-24 md:text-base md:w-3/4 sm:text-sm mt-2">{ filteredItems.name }</h2>
                <h3 className='text-xs sm:text-sm'>{ filteredItems.price }</h3>
              </div>

            </div>

          ))}


      </section>
    
 
    </>
   );
}
 
export default TeamJersies;