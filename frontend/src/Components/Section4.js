import { useState, useEffect, useRef } from "react";

import Players from '../images/Players/Players'


const Section4 = () => {

  
  const counter = useRef(1);
  const [img, setImage] = useState(Players['img9'].img)
  const [brand, setBrand] = useState('Adidas')


  useEffect(()=>{

    const interval = setInterval(()=>{

      if(counter.current > 14){counter.current = 1}

      let img = `img${counter.current}`
      setImage(Players[img].img)
      setBrand(Players[img].brand)


      counter.current = counter.current + 1

    }, 3000)

  
    return ()=> clearInterval(interval)
  }, [])

  let styles = () => {

    return {
      backgroundImage: `url(${img})`
    }
  }
  
  return ( 

    <>

      <h3 className="text-center md:text-4xl sm:text-2xl text-lg font-bold mt-10 sm:font-bold tracking-widest">Shop Your Favorite Brands</h3>

      <div className="flex flex-row w-[20%] justify-center m-auto mt-4 font-bold space-x-2">
        <div className="md:text-2xl text-primary5 border-2 border-red-600 rounded-lg p-1 px-3 hover:scale-110 hover:bg-red-400 hover:text-white transition duration-150 ease-in"><button>Adidas</button></div>
        <div className="md:text-2xl text-primary5 border-2 border-red-600 rounded-lg p-1 px-3 hover:scale-110 hover:bg-red-400 hover:text-white transition duration-150 ease-in"><button>Nike</button></div>
        <div className="md:text-2xl text-primary5 border-2 border-red-600 rounded-lg p-1 px-3 hover:scale-110 hover:bg-red-400 hover:text-white transition duration-150 ease-in"><button>Puma</button></div>
      </div>

      <div className="flex justify-center mt-10 mb-4">

        <section className={`brand-ad md:h-[36rem] md:max-w-[80rem] h-[20rem] w-[90%] flex flex-row justify-center items-center tracking-wider border-2 border-white bg-cover rounded-3xl shadow-2xl`} style={styles()}>

          <div className="md:text-6xl text-3xl text-red-900 font-extrabold tracking-widest">Shop<span className="brand text-yellow-600">{ brand }</span></div>

        </section>
      </div>

    
    
    
    
    </>


   );
}
 
export default Section4;