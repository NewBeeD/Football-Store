import { Routes ,Route } from 'react-router-dom';

import Home from './pages/Home';
import FootwearPage from './pages/FootwearPage';
import Cart from './pages/Cart'
import Item from './pages/Item';

function App() {
  return (
  
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/footwear' element={<FootwearPage />}/>
    <Route path='/cart' element={<Cart />}/>
    <Route path='/:id' element={<Item />}/>
  </Routes>

  );      
}

export default App;
