import React, { useState } from 'react'
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import Products from './components/products/Products';
import Footer from './components/footer/Footer';

export default function App() {

  const [cartCount, setCartCount] = useState(0);

  const addToCart = () => {
    setCartCount(cartCount + 1);
  };

  return (
    <>
    <Navbar count={cartCount}/>
    <Home />
    <Products addToCart={addToCart}/>
    <Footer/>
    </>
  
  )
}
