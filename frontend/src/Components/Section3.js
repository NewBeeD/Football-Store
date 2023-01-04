import { useEffect, useState} from 'react'
import nike1 from '../images/Nike/Nike1.png'


const Section3 = () => {



  const [inventory, setInventory] = useState(null)

  const fetchInventory = async () => {

     
    await fetch('http://localhost:5000/api/football')
    .then((response) => response.json())
    .then((json) => setInventory(json.inventory))
    .catch(err => err.message)
}

    console.log(inventory);
  
  useEffect(() => {

    fetchInventory()

  }, [])

 


  return ( 

    <div className="text-center">


      <div className="mt-8"><h1 className="text-4xl font-barlow font-bold">Popular products</h1></div>


      {inventory && inventory.filter(item => item.name === "PREDATOR EDGE 94+" || item.name === "Nike Phantom GT2 Elite" || item.name === "PUMA x BATMAN FUTURE").map(filteredItems => (

        <div className="mt-8 flex flex-row justify-center flex-wrap font-barlow font-semibold h-auto text-center space-x-3 md:space-x-6">

          <div className="flex flex-col items-center border-2 shadow-xl hover:scale-110 duration-300 rounded-2xl w-auto text-center">
            <img src="" alt="Cleats" className="rounded-2x md:w-[18rem] cursor-pointer w-[6rem] "/>
            <h2 className="text-sm w-24 md:text-base md:w-3/4">{ filteredItems.name }</h2>
            <h3>{ filteredItems.price }</h3>
          </div>

        </div>
 
      ))}


          
    </div>


   );
}
 
export default Section3;

