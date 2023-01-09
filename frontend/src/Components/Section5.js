import img1 from '../images/SectionImages/img1.jpg'


const Section5 = () => {


  return ( 

    <>
    
      <section className="background w-[90%] sm:w-full m-auto h-80 bg-black mt-16  bg-cover bg-fixed bg-bottom flex flex-col justify-center items-center rounded-2xl sm:rounded-none" style={{backgroundImage: `url(${img1})`}}>

        <div className="text-center font-bold tracking-widest">

          <h2 className="md:text-5xl sm:text-3xl text-2xl text-white">Stand <span className="text-red-800 font-extrabold">Out</span> On The Park</h2>

          <h2 className="md:text-4xl sm:text-3xl text-2xl text-white mt-2">#FootballDrip</h2>

          <button className="md:text-xl  text-black border-2 border-yellow-600 bg-white p-2 rounded-2xl mt-4 hover:scale-110 hover:bg-red-400 hover:text-white transition duration-150 ease-in">Explore More</button>

        </div>
      </section>
    </>

   );
}
 
export default Section5;