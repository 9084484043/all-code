import React , { useState , useContext } from 'react'
import { useNavigate } from "react-router-dom";

import { UserContext } from '../App';


const Login = () => {

const {state , dispatch} = useContext(UserContext)

  const navigate = useNavigate();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const loginUser = async (e) => {
    e.preventDefault();

    const res = await fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password
      }),
    });

    const data = await res.json();

    if (data.status === 400 || !data) {
      window.alert("Invalid Registration");
    } else {
      dispatch({type:"USER" , payload:true})
      window.alert("login Successful");
      navigate("/");
    }
  };

  return (
    <div>
      <h1 className="text-center mt-4">Log in</h1>

      <div className="container">
        <form method="POST">
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              required
              className="form-control"
              id="exampleInputEmail1"
              value={email}
              onChange={(e)=> setEmail(e.target.value)}
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              required
              className="form-control"
              id="exampleInputPassword1"
              value={password}
              onChange={(e)=> setPassword(e.target.value)}
              placeholder="Password"
            />
          </div>

          <div className="text-center">
            <button type="submit" className="btn btn-primary  m-4" onClick={loginUser}>
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login