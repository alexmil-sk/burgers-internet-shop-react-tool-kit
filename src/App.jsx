import React from "react";
import { Routes, Route } from "react-router-dom";
import AppHeader from "./components/AppHeader/AppHeader.jsx";
import Home from "./pages/Home/Home.jsx";
import NotFound from "./pages/NotFound/NotFound.jsx";
import Cart from "./pages/Cart/Cart.jsx";
import AppSearch from "./components/AppSearch/AppSearch.jsx";


function App() {
  
  
  return (
    <div className="wrapper">
      <AppHeader/>
      <AppSearch />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="cart" element={<Cart />}/>
        <Route path="*" element={<NotFound />}/>
      </Routes>
      
    </div>
  )
}

export default App;
