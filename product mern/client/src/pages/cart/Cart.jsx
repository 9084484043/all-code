import axios from 'axios'
import React, { useEffect } from 'react'
import "./cart.css"

const Cart = () => {

    useEffect(()=>{
        axios.get(`/users/${localStorage.getItem("userId")}/cart`,{headers:{"Authorization":"Bearer "+localStorage.getItem("token")}})
        .then(res=>{
            console.log(res)
        }).catch(err =>{
            console.log(err)
        })
    })
  return (
    <div className='cart-container'>
        hello
    </div>
  )
}

export default Cart