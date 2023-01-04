import shipped from '../images/webinfo/shipped.png'
import salary from '../images/webinfo/salary.png'
import support from '../images/webinfo/support.png'
import order from '../images/webinfo/order.png'


const Section2 = () => {
  
  return ( 

    <>
    
    <section className="h-auto w-5/6 md:max-w-[50rem] sm:max-w-[35rem] cursor-pointer m-auto mt-6 rounded-md flex flex-row flex-wrap justify-between items-center">

      <div className="md:h-[12rem] md:w-[9rem] sm:h-36 sm:w-28 w-[4rem] h-[6rem] text-sm md:text-base bg-primary2 hover:scale-110 transition duration-200 ease-in rounded-md shadow-2xl flex flex-col pb-4">
    
        <div className="m-auto"><img src={shipped} alt="shipping" className="md:h-[8rem] md:w-[8rem] w-[3rem] h-[3rem]"/></div>
        <div className="m-auto md:-mt-8 bg-primary5 bg-opacity-50 md:w-24 w-16 rounded-sm"><h3 className="text-primary4 md:tracking-wide tracking-tighter text-center font-bold">Free Shipping</h3></div>

      </div>

      <div className="md:h-[12rem] md:w-[9rem] sm:h-36 sm:w-28 w-[4rem] h-[6rem] text-sm md:text-base bg-primary2 hover:scale-110 transition duration-200 ease-in rounded-md shadow-2xl flex flex-col pb-4">
    
        <div className="m-auto"><img src={order} alt="shipping" className="md:h-[8rem] md:w-[8rem] w-[3rem] h-[3rem]"/></div>
        <div className="m-auto md:-mt-8 bg-primary5 bg-opacity-50 md:w-24 w-16 rounded-sm"><h3 className="text-primary4 md:tracking-wide tracking-tighter text-center font-bold md:mt-5">Order Online</h3></div>

      </div>

      <div className="md:h-[12rem] md:w-[9rem] sm:h-36 sm:w-28 w-[4rem] h-[6rem] text-sm md:text-base bg-primary2 hover:scale-110 transition duration-200 ease-in rounded-md shadow-2xl flex flex-col pb-4">
    
        <div className="m-auto"><img src={salary} alt="shipping" className="md:h-[8rem] md:w-[8rem] w-[3rem] h-[3rem]"/></div>
        <div className="m-auto md:-mt-8 bg-primary5 bg-opacity-50 md:w-24 w-16 rounded-sm"><h3 className="text-primary4 md:tracking-wide tracking-tighter text-center font-bold md:mt-5">Save Money</h3></div>

      </div>

      <div className="md:h-[12rem] md:w-[9rem] sm:h-36 sm:w-28 w-[4rem] h-[6rem] text-sm md:text-base bg-primary2 hover:scale-110 transition duration-200 ease-in rounded-md shadow-2xl flex flex-col pb-4">
    
        <div className="m-auto"><img src={support} alt="shipping" className="md:h-[8rem] md:w-[8rem] w-[3rem] h-[3rem]"/></div>
        <div className="m-auto md:-mt-8 bg-primary5 bg-opacity-50 md:w-24 w-16 rounded-sm"><h3 className="text-primary4 md:tracking-wide tracking-tighter text-center font-bold md:mt-6">F24/7 support</h3></div>

      </div>

      



  </section>
    </>


   );
}
 
export default Section2;