import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./home.css"
const Home = () => {
    let navigate = useNavigate()

  return (
    <div className='home-container'>
        <p className='home-heading'> Welcome to the best shopping platform <span>ever.</span> </p>
        <button onClick={()=>navigate("/login")} className='home-button'>Start exploring.</button>
    </div>
  )
}

export default Home