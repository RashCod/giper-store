import "./App.css";
import React from "react";
import "./resetstyle.css";
import { Header } from "./Components/Header/Header";
import { HomePages } from "./Components/HomePage/HomePages";
import { Footer } from "./Components/Footer/Footer";
import { Routes, Route } from "react-router-dom";
import { Cart } from "./Components/Cart/Cart";
import { User } from "./Components/User/User";

function App() {



  return (
    <div className="App">
      <Header />
       <Routes>
        <Route path="/" element={<HomePages />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/user" element={<User />} />
      </Routes>
      
      
     
      <Footer />
    </div>
  );
}

export default App;
