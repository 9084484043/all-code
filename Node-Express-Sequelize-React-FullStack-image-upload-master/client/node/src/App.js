import React from 'react'
import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css"
import AddProduct from './screens/AddProduct'
import EditProduct from './screens/EditProduct'
import ProductDetail from './screens/ProductDetail'
import ShowProducts from './screens/ShowProducts'


export default function App() {
   
  return (
    <>
    <AddProduct/>
    <EditProduct/>
    <ProductDetail/>
    <ShowProducts/>
      <Routes>
        <Route  path='/addProduct' element={<AddProduct/>} />
        <Route  path='/products' element={<EditProduct/>} />
        <Route  path='/product/edit/:id' element={<ProductDetail/>} />
        <Route  path='/product/:id' element={<ShowProducts/>} />
      </Routes>
    </>
  );
}
