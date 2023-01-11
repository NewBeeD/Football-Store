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

  // const checkImage = (category) => {
  //   if(path.includes("Chelsea")) return NikeImage1;
  //   else if (path.includes("Liverpool")) return AdidasImage1;
  //   else if (path.includes("Barcelona")) return AdidasImage1;
  //   else return PumaImage1;
  // }



  return ( 

  
    <>

      <h2 className="text-center md:text-5xl text-xl mt-16 font-bold tracking-widest"><a href="">Shop Team Jersies</a></h2>

      <section className="w-[76%] h-auto shadow-xl p-8 m-auto mt-8 flex flex-wrap justify-center rounded-2xl font-bold tracking-wide">

        {inventory && inventory.filter(item => item.name.includes('Chelsea') || item.name.includes('Liverpool') || item.name.includes('Barcelona') || item.name.includes('Tottenham')).map(filteredItems => (

          <div key={filteredItems._id}>

            <h1>{ filteredItems.name }</h1>
          </div>
            
          ))}


      </section>
    
 
    </>
   );
}
 
export default TeamJersies;