import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Mynavbar from './Mynavbar';
import Home from './Home';
import Home2 from './Home2';
import Home3 from './Home3';
import Tablesection from './Tablesection';
import ContactUs from './ContactUs';
import Footer from './Footer';
import CategoryItems from './CategoryItems'; 
import Shop from "./Shop";
import AboutUs from './AboutUs'; 
import Cart from "./Cart";
import Checkout from "./Checkout";
import Wishlist from "./Wishlist";
import WishlistProvider from "./Context/WishlistContext";
import CartProvider from "./Context/CartContext";
import ProductDetail from "./ProductDetail";

const MainLandingPage = () => {
  return (
    <>
      <Home />
      <div className="container">
        <Home2 />
        <Home3 />
        <Tablesection />
      </div>
    </>
  );
};

function App() {
  return (
     <CartProvider>
 <WishlistProvider>
    <Router>
      <Mynavbar />
      
      <div style={{ minHeight: '80vh' }}>
        <Routes>
          <Route path="/" element={<MainLandingPage />} />
          <Route path="/women" element={<div className="container py-5"><Home2 /></div>} />
          <Route path="/men" element={<div className="container py-5"><Home3 /></div>} />
          <Route path="/comparison" element={<div className="container py-5"><Tablesection /></div>} />
           <Route path="/about" element={<AboutUs />} />
          <Route path="/category/:categoryId" element={<CategoryItems />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </div>

      <Footer />
    </Router>
    </WishlistProvider>
    </CartProvider>
  );
}

export default App;