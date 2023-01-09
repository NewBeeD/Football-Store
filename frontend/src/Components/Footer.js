import { BsFacebook, BsInstagram, BsYoutube, BsTwitter } from 'react-icons/bs';




const Footer = () => {

  return ( 


    <div className='h-auto w-full bg-slate-900 flex flex-col m-auto'>

    <section className="md:max-w-[80rem] m-auto w-[48rem] flex flex-col md:flex-row justify-between md:items-center pt-12 px-4 mt-8 ">

      <div className="text-white tracking-wide">
        <h2 className=" text-2xl mb-6 ">Category</h2>

        <div>
          <ul className="space-y-2 h-auto w-40">
            <li className="hover:tracking-widest hover:text-red-700 hover:font-extrabold">Football Cleats</li>
            <li className="hover:tracking-widest hover:text-red-700 hover:font-extrabold">Football Accessories</li>
            <li className="hover:tracking-widest hover:text-red-700 hover:font-extrabold">Team Jersies</li>
            <li className="hover:tracking-widest hover:text-red-700 hover:font-extrabold">Training Shorts</li>

          </ul>
        </div>
      </div>


      <div className="text-white tracking-wide">
        <h2 className="text-2xl mb-6 ">Company</h2>

        <div>
          <ul className="space-y-2 h-auto w-40">
            <li className="hover:tracking-widest hover:text-red-700 hover:font-extrabold">About us</li>
            <li className="hover:tracking-widest hover:text-red-700 hover:font-extrabold">Contact Us</li>
            <li className="hover:tracking-widest hover:text-red-700 hover:font-extrabold">Blog</li>
            <li className="hover:tracking-widest hover:text-red-700 hover:font-extrabold">Sponsorship</li>

          </ul>
        </div>

      </div>

      <div className="text-center text-white">

        <h2 className="text-2xl mb-6 ">Social Media</h2>

        <ul className="flex flex-row justify-center space-x-6 pb-4">
          <li className="hover:scale-125 transition duration-500 ease-in-out"><BsFacebook /></li>
          <li className="hover:scale-125 transition duration-500 ease-in-out"><BsInstagram /></li>
          <li className="hover:scale-125 transition duration-500 ease-in-out"><BsYoutube /></li>
          <li className="hover:scale-125 transition duration-500 ease-in-out"><BsTwitter /></li>
        </ul>
      </div>
  </section>
    </div>



   );
}
 
export default Footer;