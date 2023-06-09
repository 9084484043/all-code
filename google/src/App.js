import React, { createContext, useReducer } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css"
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Contact from "./components/Contact";
import Logout from "./components/Logout";
import Error from "./components/Error";

import { initialState,reducer } from "./reducer/UseReducer";



export const UserContext = createContext()

export default function App() {
  
  const [state , dispatch] = useReducer(reducer, initialState)
  return (
    <>
      <UserContext.Provider value={{ state, dispatch}}>
      <Navbar />
      <Routes>
        {/* nested routing ek hee route ke under sabhi ko rakhna */}
        <Route path="/" element={<Home />} exact />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Logout" element={<Logout />} />
        <Route path="*" element={<Error />} />
      </Routes>
      </UserContext.Provider>
    </>
  );
}
