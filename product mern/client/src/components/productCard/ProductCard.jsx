import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./productCard.css"
const ProductCard = (props) => {
  let navigate = useNavigate()
  return (
    <div className='productCard-container' onClick = {()=>navigate(`/productDescription/${props.id}`)}>
        <h3>{props.title}</h3>
        <img src={props.image} alt={props.title} />
        <label><span>{props.currencyFormat}</span>{props.price}</label>
    </div>
  )
}

export default ProductCard