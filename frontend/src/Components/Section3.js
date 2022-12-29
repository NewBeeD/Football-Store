import nike1 from '../images/Nike/nike1.png'
import nike2 from '../images/Nike/nike2.png'
import adidas1 from '../images/Adidas/adidas1.png'

// const img1 = require('../images/Nike/nike1')

const Section3 = () => {

  console.log();


  return ( 

    <div className="text-center">

      <div className="mt-8"><h1 className="text-4xl font-barlow font-bold">Popular products</h1></div>

      <div className="mt-8 flex flex-row justify-center flex-wrap font-barlow font-semibold h-auto text-center space-x-3 md:space-x-6">

        <div className="flex flex-col items-center border-2 shadow-xl hover:scale-110 duration-300 rounded-2xl w-auto text-center">
          <img src={nike1} alt="Cleats" className="rounded-2x md:w-[18rem] cursor-pointer w-[6rem] "/>
          <h2 className="text-sm w-24 md:text-base md:w-3/4">Nike Zoom Mercurial Superfly 9 Elite FG</h2>
          <h3>$280</h3>
        </div>

      </div>




    </div>


   );
}
 
export default Section3;