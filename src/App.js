import {Route,Routes} from 'react-router-dom';
import './App.css';
import ProductList from './pages/ProductList';
import Product from './pages/Product';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Cart from './pages/Cart';
import Aboutus from './pages/Aboutus';
import Contactus from './pages/Contactus';
import Placeorder from './pages/Placeorder';
import Orderconfirmation from './pages/Orderconfirmation';
const App = () =>{
  return (
    <Routes>
      <Route path="/" element={<ProductList/>}/>
      <Route path="/Signin" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/products/:id" element={<Product/>}/>
      <Route path="/about" element={<Aboutus/>}/>
      <Route path="/contact" element={<Contactus/>}/>
      <Route path="/placeorder" element={<Placeorder/>}/>
      <Route path="/confirmorder" element={<Orderconfirmation/>}/>
  </Routes>
  );
}

export default App;
