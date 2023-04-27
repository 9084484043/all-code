import React, { useEffect, useState } from 'react'
import axios from 'axios'

import "./product.css"
import { useNavigate } from 'react-router-dom'
import ProductCard from '../../components/productCard/ProductCard'
const Products = () => {

  const navigate = useNavigate()

  let [products, setProducts] = useState([])


  useEffect(()=>{
    axios.get("/products")
    .then(res => {
      setProducts(res.data.data)
    })
    .catch(err => alert(err.response.data.message))
  }, [])

  return (

    <div className='products-container'>
        {products.map(product=><ProductCard  key={product._id} id = {product._id} title={product.title}  price = {product.price} currencyFormat = {product.currencyFormat} image = {product.productImage}/>)}

        <button className='products-button' onClick={() => navigate("/createProduct")}>Add product</button>
        
    </div>
  )
}

export default Products