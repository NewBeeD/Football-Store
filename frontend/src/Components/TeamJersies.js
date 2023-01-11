import { useState, useEffect } from 'react'
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

  const checkImage = (name) => {
    if(name.includes("Tottenham")) return APPAREL.Nike12;
    else if (name.includes("Liverpool")) return APPAREL.Nike11;
    else if (name.includes("Barcelona")) return APPAREL.Nike3;
  }



  return ( 

  
    <>

      <h2 className="text-center md:text-5xl sm:text-4xl text-3xl mt-16 font-bold tracking-widest">Shop Team Jersies</h2>

      <section className="w-[90%] md:max-w-[80rem] h-auto shadow-xl p-8 m-auto flex flex-wrap justify-center rounded-2xl font-bold tracking-wide space-x-6 text-center">

        {inventory && inventory.filter(item => item.name.includes('Liverpool') || item.name.includes('Barcelona') || item.name.includes('Tottenham')).map(filteredItems => (

          <div key={filteredItems._id} className="flex flex-col justify-center items-center mb-6 md:w-44 sm:w-36 w-64 hover:scale-110 duration-500 cursor-pointer">

            <div>
              <img src={checkImage(filteredItems.name)} alt="Football Kit" className='h-auto md:w-48 w-44 border-2 rounded-xl'/>

            </div>

            <div className='md:w-48 text-xs sm:text-sm'>{ filteredItems.name }</div>
            <div className='text-xs sm:text-sm'>{`$${filteredItems.price}`}</div>

            
          </div>
            
          ))}


      </section>
    
 
    </>
   );
}
 
export default TeamJersies;