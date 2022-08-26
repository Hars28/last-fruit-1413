import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Cart from './Cart'
import Home from './Home'
import Products from './Products'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/products/:id" element={<h1>Product</h1>}/>
        <Route path="/cart" element={<Cart/>}/>

    </Routes>
  )
}

export default AllRoutes