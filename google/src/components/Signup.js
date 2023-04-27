import React from "react";
import { useState } from "react";

import { useNavigate } from "react-router-dom";
function Signup() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone:"",
    password: "",
    cpassword: "",
  });

  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  const postData = async (e) => {
    e.preventDefault();

    const { name, email,phone, password, cpassword } = user;

    const resp = await fetch("/creatUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        password,
        cpassword,
      }),
    });

    const data = await resp.json();

    if (data.status === 420 || !data) {
      window.alert("Invalid Registration");
      console.log("Invalid Registration");
    } else {
      window.alert("Registration Successful");
      console.log("registeration successful");

      navigate("/login");
    }
  };
  return (
    <div>
      <h1 className="text-center mt-4">Sign Up</h1>

      <div className="container">
        <form method="POST">
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Your Name</label>
            <input
              type="text"
              required
              name="name"
              className="form-control"
              id="exampleInputPassword1"
              value={user.name}
              
              onChange={handleInputs}
              placeholder="Your Name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              required
              name="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={user.email}
              
              onChange={handleInputs}
              placeholder="Enter email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Phone</label>
            <input
              type="Number"
              required
              className="form-control"
              name="phone"
              id="exampleInputPassword1"
              value={user.phone}
              
              onChange={handleInputs}
              placeholder="phone number"
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              required
              className="form-control"
              name="password"
              id="exampleInputPassword1"
              value={user.password}
              
              onChange={handleInputs}
              placeholder="Password"
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Confirm Password</label>
            <input
              type="password"
              required
              name="cpassword"
              className="form-control"
              id="exampleInputPassword1"
              value={user.cpassword}
              
              onChange={handleInputs}
              placeholder="Password"
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              onClick={postData}
              className="btn btn-primary  m-4"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div> 
  );
}

export default Signup;
