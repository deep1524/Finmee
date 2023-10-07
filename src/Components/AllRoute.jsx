import React from "react";

import { Route, Routes } from "react-router-dom";
import Home from "../Page/Home";
import Industries from "../Page/Industries";
import Aisoftware from "../Page/Aisoftware";
import Blog from "../Page/Blog";
import Contact from "../Page/Contact";
import Mineral from "../Page/Mineral";
import Mine from "../Page/Mine";
import Oil_Gas from "../Page/Oil_Gas";
import Sustainability from "../Page/Sustainability";





const AllRoute = () => {
  // all route done
  return (
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/home" element={<Home />}></Route>
      <Route path="/industries" element={<Industries/>}></Route>
      <Route path="/Software" element={<Aisoftware/>}></Route>
      <Route path="/blog" element={<Blog/>}></Route>
      <Route path="/contact" element={<Contact />}></Route>   
      <Route path="/Sustainability" element={<Sustainability />}></Route>  
      <Route path="/Oil_Gas" element={<Oil_Gas />}></Route>  
      <Route path="/Mine" element={<Mine />}></Route>  
      <Route path="/Mineral" element={<Mineral />}></Route>  
    </Routes>
  );
};

export default AllRoute;
