import NavBar from "../Components/Navbar";



const Cart = () => {

  return ( 

    <>

    <NavBar />

      <div className="mt-12 p-0 box-border font-Gemunu bg-primary2 flex flex-col m-auto 2xl:max-w-[100rem] 2xl:bg-white">



          <section className="flex flex-row justify-between mt-12 mb-8">

            <div className="w-[50%] h-full pl-8">

              <h2 className="text-4xl font-bold">YOUR BAG</h2>

              <h4 className="text-xl">Items in your bag are not reserved — check out now to make them yours.</h4>

              <div className="space-y-2 mt-8">

  

                <div>

                  <div>
                    <div>Name</div>
                    <div>
                      <div>Price</div>
                      <div>X</div>
                    </div>
                    
                    <div>Color</div>
          
                    <div>Size</div>
                  </div>

                  <select name="" id="" className="w-16 p-4">
                    <option value="">1</option>
                    <option value="">2</option>
                    <option value="">3</option>
                    <option value="">4</option>
                    <option value="">5</option>
                    <option value="">6</option>
                  </select>

                </div>

              </div>



            </div>

            <div className="w-[50%] h-auto flex flex-col items-center">

              <div className="w-[50%] mt-24 border-2 border-slate-400 shadow-md space-y-2 p-4 rounded-lg">
                <h2 className="mb-8 text-3xl font-bold">Order Summary</h2>

                <div className="flex flex-row justify-between">
                  <div>Original Price</div>
                  <div>$--</div>
                </div>

                <div className="flex flex-row justify-between">
                  <div>Sale</div>
                  <div>-$--</div>
                </div>

                <div className="flex flex-row justify-between">
                  <div>2 Items</div>
                  <div>$--</div>
                </div>

                <div className="flex flex-row justify-between">
                  <div>Delivery</div>
                  <div>Free</div>
                </div>

                <div className="flex flex-row justify-between">
                  <div>Slaes Tax</div>
                  <div>$--</div>
                </div>

                <div className="flex flex-row justify-between text-2xl font-bold">
                  <div>Total</div>
                  <div>$--</div>
                </div>

              </div>

              

              <button className="mt-4 text-2xl text-white font-bold bg-black tracking-wider border-2 border-white w-48 rounded-lg hover:text-red-900 hover:scale-110 transition duration-500 ease-in-out">CHECK OUT</button>
            </div>
          </section>



      </div>


    
    </>


   );
}
 
export default Cart;