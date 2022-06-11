import React from 'react'
import { Route, Routes } from "react-router-dom"
import Home from "../Pages/Home"
import Product from "../Pages/Product";
import Products from "../Pages/Products";
import Cart from "../Pages/Cart" 

const AllRoutes = () => {
  return (
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products/:id' element={<Product />} />
          <Route path='/products' element={<Products />} />
          <Route path='/cart' element={<Cart />} />   
    </Routes>
  )
}

export default AllRoutes