import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import "./productDescription.css"

const ProductDescription = () => {
    const productId = useParams().productId

    let [product, setProduct] = useState({})
    
    useEffect(() => {
        axios.get(`/products/${productId}`)
        .then(res => {
            console.log(res)
            setProduct(res.data.data)
        })
        .catch(err => {
            alert(err.response.data.message)
            Navigate("/products")
        })
    }, [productId])

  return (
    <div className='product-container'>
        <div className='product-details'>
            <div className = "product-image">
                <img src = {product.productImage} alt = {product.name} />
            </div>
            <div className = "product-info">
                <label><h2>{product.title}</h2></label>
                <label>Description - {product.description}</label>
                <label>Style  - {product.style}</label>
                <label>Price - <span>{product.currencyFormat}</span>{product.price}</label>
                <label>AvailableSizes - {product.availableSizes}</label>
            </div>
            <button onClick ={()=>console.log("clicked")}>Add To Cart</button>
            
        </div>
    </div>
  )
}

export default ProductDescription