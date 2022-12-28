import { useEffect, useState } from "react";
import { MdSportsSoccer } from "react-icons/md";

const FirstSection = () => {

  const images = ['bg-img1', 'bg-img2', 'bg-img3', 'bg-img4', 'bg-img5'];
  const counter = 0;

  const [img, setImage] = useState(images[0])

  const imgChange = ()=>{

    if(counter < 5){setImage(images[counter])}
    else{
      counter = 0;
      setImage(images[counter])
    }
    counter += 1;
  }

  // useEffect(()=>{

  //   setInterval(imgChange, 2000)

  //   return () => clearInterval(imgChange)
  // }, [])

  // setInterval()



  


  return ( 

    <div>

      <div className={`${img} mt-[2.8rem] m-auto h-[35rem] w-[100vw] md:max-w-[70rem] md:h-[40rem] shadow-2xl bg-cover bg-center pb-40 text-center flex flex-col justify-center items-center pt-48`}>

          <div className="mt-24 md:mt-48">
            <h1 className="text-prim5 text-4xl md:text-5xl font-extrabold w-64 md:w-96">Shop All Your Favorite Brands</h1>
          </div>

          <div className="">
            <button className="bg-yellow-500 p-2 rounded-full text-white mt-8 w-40 hover:scale-125 duration-300 text-center border-2">Shop Now</button>
          </div>

          <div className="md:mt-48 mt-36">
            <ul className="flex flex-row space-x-5">
              <li><MdSportsSoccer className="h-5 w-5 text-prim5 cursor-pointer hover:scale-125 duration-300"/></li>
              <li><MdSportsSoccer className="h-5 w-5 text-prim5 cursor-pointer hover:scale-125 duration-300"/></li>
              <li><MdSportsSoccer className="h-5 w-5 text-prim5 cursor-pointer hover:scale-125 duration-300"/></li>
              <li><MdSportsSoccer className="h-5 w-5 text-prim5 cursor-pointer hover:scale-125 duration-300"/></li>
              <li><MdSportsSoccer className="h-5 w-5 text-prim5 cursor-pointer hover:scale-125 duration-300"/></li>
            </ul>
          </div>

      </div>

    </div>


   );
}
 
export default FirstSection;