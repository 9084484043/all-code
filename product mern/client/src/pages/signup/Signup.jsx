import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./signup.css"
const Signup = () => {

    let navigate = useNavigate()

    let [isClicked, setIsClicked] = useState(false);

    let [file,setFile] = useState("")

    let [signupDetails, setSignupDetails] = useState({
        fname:"",
        lname:"",
        email:"",
        phone:"",
        password:""
    })

    let [shippingDetails, setShippingDetails] = useState({
        street:"",
        city:"",
        pincode:""
    })
    let [billingDetails, setBillingDetails] = useState({
        street:"",
        city:"",
        pincode:""
    })

    const handleChange = (e) => {
        let {name, value} = e.target
        setSignupDetails({...signupDetails, [name]: value})
    }
    const handleShipping = (e) =>{
        let {name, value} = e.target
        setShippingDetails({...shippingDetails, [name]: value})
    }
    const handleBilling = (e) =>{
        let {name, value} = e.target
        setBillingDetails({...billingDetails, [name]: value})
    }

    const handlePhoto = (event)=>{
        setFile(event.target.files[0])
        console.log(event.target.files[0])
    }

    
    const handleSubmit = (e) => {
        e.preventDefault()
        let address = JSON.stringify({
                shipping:{
                    street:shippingDetails.street,
                    city:shippingDetails.city,
                    pincode:shippingDetails.pincode
                },
                billing:{
                    street:billingDetails.street,
                    city:billingDetails.city,
                    pincode:billingDetails.pincode
                }
        })
        let form = new FormData()
        
        form.append("fname",signupDetails.fname)
        form.append("lname",signupDetails.lname)
        form.append("email",signupDetails.email)
        form.append("password",signupDetails.password)
        form.append("phone",signupDetails.phone)
        form.append("address",address)
        form.append("profileImage",file)
        
        axios.post("/register",form).then(res => {
            console.log(res.data)
            alert("Registered Successfully")
            navigate("/login")

        }).catch(error => {
            alert(error.response.data.message)
        })
    }
  return (
    <div className='signup-container'>
        <div className='signup-form'>
            <h1>Sign Up</h1>
            {!isClicked?<>
            <input onChange={handleChange} type='text' name='fname' placeholder='First Name' value={signupDetails.fname}/>
            <input onChange={handleChange} type='text' name='lname' placeholder='Last Name' value={signupDetails.lname}/>
            <input onChange={handleChange} type='text' name='email' placeholder='Email' value={signupDetails.email}/>
            <input onChange={handleChange} type='text' name='phone' placeholder='Phone' value={signupDetails.phone}/>
            <input onChange={handleChange} type='text' name='password' placeholder='Password' value={signupDetails.password}/>
            <input onChange={handlePhoto} type='file' name='profileImage'/>
            </>:<>
            <h5>Shipping</h5>
            <input onChange={handleShipping} type='text' name='street' placeholder='Street' value={shippingDetails.street}/>
            <input onChange={handleShipping} type='text' name='city' placeholder='City' value={shippingDetails.city}/>
            <input onChange={handleShipping} type='text' name='pincode' placeholder='Pincode' value={shippingDetails.pincode}/>
            
            <h5>Billing</h5>
            <input onChange={handleBilling} type='text' name='street' placeholder='Street' value={billingDetails.street}/>
            <input onChange={handleBilling} type='text' name='city' placeholder='City' value={billingDetails.city}/>
            <input onChange={handleBilling} type='text' name='pincode' placeholder='Pincode' value={billingDetails.pincode}/>
            </>}
            
            {!isClicked?<Link to="/login">Already Registed?</Link>:<Link to="/signup" onClick={()=>setIsClicked(!isClicked)} >Back</Link> }
            
            {!isClicked?<button onClick={()=>setIsClicked(!isClicked)} >Next</button>:<button onClick={handleSubmit} >Register</button>}
        </div>
    </div>
  )
}

export default Signup