import NavBar from "../Components/Navbar";
import Section1 from "../Components/Section1";
import Section2 from "../Components/Section2";
import Section3 from "../Components/Section3";
import Section4 from "../Components/Section4";
import Section5 from "../Components/Section5";
import TeamJersies from "../Components/TeamJersies";
import Footer from "../Components/Footer";

const Home = () => {
  
  return ( 

    <div className="home">
      <NavBar/>
      <Section1 />
      <Section2 />
      <Section3 />
      <TeamJersies />
      <Section5 />
      <Section4 />
      <Footer />
    </div>

   );
}
 
export default Home;