import { Routes ,Route } from 'react-router-dom';

import Home from './pages/Home';
import FootwearPage from './pages/FootwearPage';
import Cart from './pages/Cart'
import Item from './pages/Item';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

function App() {
  return (
  
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/footwear' element={<FootwearPage />}/>
    <Route path='/cart' element={<Cart />}/>
    <Route path='/:id' element={<Item />}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/signup' element={<SignUp/>}/>
  </Routes>

  );      
}

export default App;
