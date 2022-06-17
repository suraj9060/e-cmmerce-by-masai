import React from 'react'
import { Route, Routes } from "react-router-dom"
import Home from "../Pages/Home"
import Product from "../Pages/Product";
import Products from "../Pages/Products";
import Cart from "../Pages/Cart" 
import Orders from '../Pages/Orders';
import Login from '../Pages/Login';

const AllRoutes = () => {
  return (
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products/:id' element={<Product />} />
          <Route path='/products' element={<Products />} />
          <Route path='/cart' element={<Cart />} />  
          <Route path='/orders' element={<Orders />} />
          <Route path='/login' element={<Login />} />
    </Routes>
  )
}

export default AllRoutes