const Section2 = () => {


  return ( 

    <div className="text-center">

      <div className="mt-8"><h1 className="text-4xl font-barlow font-bold">Popular products</h1></div>

      <div className="mt-8 flex flex-row justify-center flex-wrap md:space-x-8 font-barlow font-semibold border-2 border-green-900 h-[50vh]">

        <div className="flex flex-col border-2 shadow-xl hover:scale-110 duration-300 rounded-2xl w-3/4">
          <img src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/54c53a93-93c3-416b-b04d-cd8e4867b935/zoom-mercurial-superfly-9-elite-fg-firm-ground-soccer-cleats-sb8gJK.png" alt="Cleats" className="rounded-2xl"/>
          <h2>Nike Zoom Mercurial Superfly 9 Elite FG</h2>
          <h3>$280</h3>
        </div>

        <div className="flex flex-col border-2 shadow-xl hover:scale-110 duration-300 rounded-2xl w-2/5">
          <img src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/a86dfc91-a8e7-4118-a631-06d26f53fdaf/phantom-gt2-dynamic-fit-elite-fg-firm-ground-soccer-cleats-Lj0t9H.png" alt="Cleats" className="w-full rounded-2xl"/>
          <h2>Nike Phantom GT2 Dynamic Fit Elite FG</h2>
          <h3>$275</h3>
        </div>

        {/* <div className="flex flex-col border-2 shadow-xl hover:scale-110 duration-300 rounded-2xl h-24 w-72">
          <img src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/ae1f312f90db47218e56aed8013f1488_9366/Predator_Edge_94_Firm_Ground_Soccer_Cleats_Black_HP9135_22_model.jpg" alt="Cleats" className="w-full rounded-2xl"/>
          <h2>PREDATOR EDGE 94+ FIRM GROUND SOCCER CLEATS</h2>
          <h3>$290</h3>
        </div> */}

      </div>




    </div>


   );
}
 
export default Section2;