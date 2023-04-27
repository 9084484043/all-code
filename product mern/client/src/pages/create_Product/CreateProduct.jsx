import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "./createProduct.css"
const CreateProduct = () => {
    let navigate = useNavigate();

    let [file,setFile] = useState("")

    
    let [createProduct, setCreateProduct] = useState({
        title:"",
        description:"",
        price:"",
        style:"",
        availableSizes:"",
        installments:""
    });
    
    const handleChange = (e) => {
        let {name, value} = e.target;

        setCreateProduct({
           ...createProduct,
            [name]: value
        })

    }

    const handleFile = (event)=>{
        setFile(event.target.files[0])
        console.log(event.target.files[0])
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        let form = new FormData();

        form.append("title", createProduct.title);
        form.append("description", createProduct.description);
        form.append("price", createProduct.price);
        form.append("style", createProduct.style);
        form.append("availableSizes", createProduct.availableSizes);
        form.append("installments", createProduct.installments);
        form.append("productImage", file)

        axios.post("/products",form)
        .then(res=>{
            console.log(res.data.data)
            alert("Product created successfully")
            navigate('/products')
        })
        .catch(err => {
            console.error(err)
            alert(err.response.data.message)
        })
    }

  return (
    <div className='createProduct-container'>
        <div className = "createProduct-form">
        <h1>Create Product</h1>
            <input onChange = {handleChange} className='createProduct-input' type='text' placeholder='Title' name = "title" value = {createProduct.title}/>
            <input onChange = {handleChange} className='createProduct-input' type='text' placeholder='Description' name = "description" value = {createProduct.description}/>
            <input onChange = {handleChange} className='createProduct-input' type='number' placeholder='Price' name = "price" value = {createProduct.price}/>
            <input onChange = {handleChange} className='createProduct-input' type='text' placeholder='Style' name = "style" value = {createProduct.style}/>
            <input onChange = {handleChange} className='createProduct-input' type='text' placeholder='Available Sizes' name = "availableSizes" 
            value = {createProduct.availableSizes} />
            <input onChange={handleFile} className='createProduct-input' type='file' />
            <input onChange = {handleChange} className='createProduct-input' type='text' placeholder='Installments' name = "installments" value = {createProduct.installments}/>
            <button onClick={handleSubmit}>Create</button>
        </div>
    </div>
  )
}

export default CreateProduct