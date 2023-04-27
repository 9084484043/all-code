import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "./profile.css"
const Profile = () => {

  let loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'))
  let [isChanged, setIsChanged] = useState(false)

  let [userData, setUserData] = useState({
    fname: loggedInUser.fname,
    lname: loggedInUser.lname,
    email: loggedInUser.email,
    phone: loggedInUser.phone,
    password: loggedInUser.password
  })

  let [userShippingAddress , setUserShippingAddress] = useState({
    street: loggedInUser.address.shipping.street,
    city: loggedInUser.address.shipping.city,
    pincode: loggedInUser.address.shipping.pincode
  })

  let [userBillingAddress, setUserBillingAddress] = useState({
    street: loggedInUser.address.billing.street,
    city: loggedInUser.address.billing.city,
    pincode: loggedInUser.address.billing.pincode
  })

  let [address, setAddress] = useState({
    shipping: userShippingAddress,
    billing: userBillingAddress
  })

  let [userUpdate, setUserUpdate] = useState({})

  function handleUserDeatils(e){
    let {name, value} = e.target
    setIsChanged(true)
    setUserUpdate({
      ...userUpdate,
      [name]: value
    })
    setUserData({
     ...userData,
      [name]: value
    })
  }

  function handleUserShippingAddress(e){
    let {name, value} = e.target
    setIsChanged(true)
    
    setUserShippingAddress({
      ...userShippingAddress,
      [name]: value
    })
    setUserUpdate(prev=>({
      ...prev,
      address:{
        shipping:{
          ...userShippingAddress,
          [name]: value
        },
        billing:{
          ...userBillingAddress
        }
      }
    }))
    console.log(userUpdate)

  }

  function handleUserBillingAddress(e){
      let {name, value} = e.target
      setIsChanged(true)
      
      setUserBillingAddress({
        ...userBillingAddress,
        [name]: value
      })
      setUserUpdate(prev=>({
        ...prev,
        address:{
          shipping:{
            ...userShippingAddress,
          },
          billing:{
            ...userBillingAddress,
            [name]: value
          }
        }
      }))
      console.log(userUpdate)
    }

    function handleUpdate(){
      axios.put(`/user/${loggedInUser._id}/profile`,{
        ...userUpdate
      },{headers:{"Authorization": `Bearer ${localStorage.getItem("token")}` }})
      .then(res => console.log(res))
      .catch(err => console.log(err))
    }
  
  return (
    <div className='profile-container'>
        <div className = "profile-form">
          <h2>Profile</h2>
          <div className='profile-form-person'>
            <div className='profile-form-person-details'>
              <input onChange = {handleUserDeatils} type='text' name='fname' placeholder='First Name' value={userData.fname}/>
              <input onChange = {handleUserDeatils} type='text' name='lname' placeholder='Last Name' value={userData.lname}/>
              <input onChange = {handleUserDeatils} type='text' name='email' placeholder='Email' value={userData.email}/>
              <input onChange = {handleUserDeatils} type='text' name='phone' placeholder='Phone' value={userData.phone}/>
            </div>
            <div className='profile-form-person-picture'>
              <img src = {loggedInUser.profileImage?loggedInUser.profileImage:"/images/default-profile.png"} alt='profile'/>
            </div>
          </div>
            <div className='profile-form-address'>
            <div className='profile-form-address-shipping'>
              <h5>Shipping Address</h5>
              <input onChange = {handleUserShippingAddress} type='text' name='street' placeholder='Street' value={userShippingAddress.street}/>
              <input onChange = {handleUserShippingAddress} type='text' name='city' placeholder='City' value={userShippingAddress.city}/>
              <input onChange = {handleUserShippingAddress} type='text' name='pincode' placeholder='Pincode' value={userShippingAddress.pincode}/>
            </div>
            <div className='profile-form-address-billing'>
              <h5>Billing Address</h5>
              <input onChange = {handleUserBillingAddress} type='text' name='street' placeholder='Street' value={userBillingAddress.street}/>
              <input onChange = {handleUserBillingAddress} type='text' name='city' placeholder='City' value={userBillingAddress.city}/>
              <input onChange = {handleUserBillingAddress} type='text' name='pincode' placeholder='Pincode' value={userBillingAddress.pincode}/>
            </div>
            </div>
            {isChanged && <button  onClick = {handleUpdate}>Update</button>}
        </div>
    </div>
  )
}

export default Profile