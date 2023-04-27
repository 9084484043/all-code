import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/home/Home';
import Navbar from './pages/navbar/Navbar';
import Login from './pages/login/Login';
import Products from './pages/products/Products';
import Signup from './pages/signup/Signup';
import CreateProduct from './pages/create_Product/CreateProduct';
import Profile from './pages/profile/Profile';
import ProductDescription from './pages/productDescription/ProductDescription';
import Cart from './pages/cart/Cart';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<Products />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/createProduct" element={<CreateProduct />} />
        <Route path="/productDescription/:productId" element={<ProductDescription />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default App;
