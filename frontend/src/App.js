import { Routes ,Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import FootwearPage from './pages/FootwearPage';


function App() {
  return (

    
    
  
  <Routes>

    <Route path='/' element={<Home />} />
    <Route path='/footwear' element={<FootwearPage />}/>


  </Routes>

  );

        
}

export default App;
