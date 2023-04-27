import React, { useEffect, useState } from "react";
import bhuvi from "../images/bhuvi.jpeg";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({});

  const callAboutPage = async () => {
    try {
      const res = await fetch("/about", {
        //this res is backend response , not from call back function
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const data = await res.json();
      console.log(data);
      setUserData(data);
      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
      navigate("/login");
    }
  };

  useEffect(() => {
    callAboutPage();
  }, []);

  return (
    <div className="container mt-4">
      <form method="GET">
        <div className="jumbotron">
          <h1 className="display-4">Bhuvnesh Sharma</h1>
          <img src={bhuvi} alt="logo" />
          <h3>Web Developer</h3>
          <p>Work links</p>
          <div className="projects-div flex div-1">
            <h3>Ecommerce Website</h3>
            <p>
              (Backend) <br />
              Perform all CRUD Opretions. ExpressJs, MongoDB, AWS
            </p>
            <button>
              <a href="https://github.com/bhuvi844964/Project-5-Product-Management-main">
                Source Code
              </a>
            </button>
          </div>
          <div className="projects-div flex div-2">
            <h3>URL Shortner</h3>
            <p>
              (Backend) <br />
              Perform all CRUD Opretions. ExpressJs, MongoDB
            </p>
            <button>
              <a href="https://github.com/bhuvi844964/url-shortner--4-project">
                Source Code
              </a>
            </button>
          </div>
          <div className="projects-div flex div-3">
            <h3>Book Management</h3>
            <p>
              (Backend) <br />
              Perform all CRUD Opretions. ExpressJs, MongoDB, AWS
            </p>
            <button>
              <a href="https://github.com/bhuvi844964/project-3-Books-Management">
                Source Code
              </a>
            </button>
          </div>
          <div className="projects-div flex div-4">
            <h3>Mini Blogging Site</h3>
            <p>
              (Backend) <br />
              Perform all CRUD Opretions. ExpressJs, MongoDB, Auth
            </p>
            <button>
              <a href="https://github.com/bhuvi844964/blogs-mini-project--1">
                Source Code
              </a>
            </button>
          </div>
          <hr className="my-4" />
          <p>
            I am a Java Script Programmer with a Bsc Degree from Parishkar
            College of Global Excellence. I have done 5 projects on Backend
            Development using java script , nodejs , express and mongoDB I have
            a great interest in learning new technologies. I am also learning
            React .
          </p>

          <p>User ID : 123456789</p>
          <p>Name : {userData.name}</p>
          <p>email : {userData.email}</p>
          <p>phone : {userData.phone}</p>
          <p>Profession : Web developer</p>
          <p className="lead">
            <a className="btn btn-primary btn-lg" href="/about">
              Learn more
            </a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default About;
