import React  from 'react';
import ProductInfo from './ProductInfo';
import {Routes,Route} from "react-router-dom";
import Home from './Home';

function App() {
  
  return( <div>
  
<Routes>
      <Route index element={<Home />} />
      <Route path="/product/:sku" element={<ProductInfo  />} />
    </Routes>
   
    
    </div>
  );
}

export default App
