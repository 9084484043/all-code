import React, { useContext, useState } from 'react'
import "./login.css"
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { Store } from '../../context/Context'

const Login = () => {

    let navigate = useNavigate()

    let {setStore} = useContext(Store)

    let [loginDetails, setLoginDetails] = useState({
        email:"",
        password:""
    })

    function handleLogin(event) {
        axios.post("/login",loginDetails)
        .then(res=>{
            alert("Login Successful!")
            localStorage.setItem("token",res.data.data.token)
            localStorage.setItem("isLoggedIn","true")
            localStorage.setItem("userId",res.data.data.userId)
            localStorage.setItem("loggedInUser",JSON.stringify(res.data.data.user))
            localStorage.setItem("profileImage",res.data.data.user.profileImage)
            navigate('/products')
        })
        .catch(err=>alert(err.response.data.message))
    }

    function handleChange(event) {
        let { name, value } = event.target
        setLoginDetails((prev)=>{
            return {
               ...prev,
                [name]: value
            }
        })
    }
  return (
    <div className='login-container'>
        <div className='login-form'>
            <h1>Login</h1>
            <input onChange={handleChange} type='text' name='email' placeholder='Email' value={loginDetails.email}/>
            <input onChange={handleChange} type='passwprd' name='password' placeholder='Password' value={loginDetails.password}/>
            <Link to = "/signup">Not Registered?</Link>
            <button className='login-button' onClick={handleLogin}>Login</button>
        </div>

        
    </div>
  )
}

export default Login