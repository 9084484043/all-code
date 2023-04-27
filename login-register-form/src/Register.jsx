import React, { useState } from "react";
// import File from './File';


export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPass] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    // const [photo, setPhoto] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }
 
    return (
        <div className="auth-form-container">
            <h2>Register</h2>
        <form className="register-form" onSubmit={handleSubmit}>
            <label htmlFor="name">name</label>
            <input value={name} onChange={(e) => setName(e.target.value)} name="name" id="name" placeholder="full Name" />
            <label htmlFor="phone">phone</label>
            <input value={phone} onChange={(e) => setPhone(e.target.value)} name="phone" id="phone" placeholder="phone" />
            {/* <label htmlFor="photo">photo</label> */}
            {/* <File/> */}
            {/* <input value={photo} onChange={(e) => setPhoto(e.target.value)} name="photo" id="photo" placeholder="photo "/> */}
            <label htmlFor="email">email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
            <label htmlFor="password">password</label>
            <input value={password} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
            <button type="submit">Sign Up</button>
        </form>
        <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Sign Up here.</button>
    </div>
    )
}