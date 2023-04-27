import React, { useState } from "react";
// import axios from "axios" 

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPass] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(email);
    }


    // const login = () => {
    //     axios.post("http://localhost:9002/login", user)
    //     .then(res => {
    //         alert(res.data.message)
    //         setLoginUser(res.data.user)
    //         history.push("/")
    //     })
    // }






    return (
        <div className="auth-form-container">
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">email</label>
                <input value={email} onChange={(event) => setEmail(event.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <label htmlFor="password">password</label>
                <input value={password} onChange={(event) => setPass(event.target.value)} type="password" placeholder="********" id="password" name="password" />
                <button type="submit" >Log In</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>
        </div>
    )
}