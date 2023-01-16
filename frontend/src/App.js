import { Routes ,Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import FootwearPage from './pages/FootwearPage';
import Cart from './pages/Cart'


function App() {
  return (

    
    
  
  <Routes>

    <Route path='/' element={<Home />} />
    <Route path='/footwear' element={<FootwearPage />}/>
    <Route path='/cart' element={<Cart />}/>


  </Routes>

  );

        
}

export default App;
