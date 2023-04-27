import React, { useEffect, useState } from "react";

const Contact = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "", 
  });

  const callContactPage = async () => {
    try {
      const res = await fetch("/getcontact", {
        //this res is backend response , not from call back function
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      console.log(data);
      setUserData({
        ...userData,
        name: data.name,
        email: data.email,
        phone: data.phone,
      });
      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    callContactPage();
  }, []);

  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;

    setUserData({ ...userData, [name]: value });
  };

  const postData = async (e) => {
    e.preventDefault();

    const { name, email, phone, message } = userData;

    const res = await fetch("/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        message,
      }),
    });
    const data = await res.json();

    if (!data) {
      console.log("message not send");
    } else {
      alert("Messege Send");
      setUserData({ ...userData, message: "" });
    }
  };

  return (
    <div>
      <h1 className="text-center mt-4">Get in Touch</h1>

      <div className="container">
        <form method="POST">
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Your Name</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              name="name"
              value={userData.name}
              onChange={handleInputs}
              placeholder="Your Name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              name="email"
              value={userData.email}
              onChange={handleInputs}
              placeholder="Your Email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Your Phone</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputPassword1"
              name="password"
              value={userData.phone}
              onChange={handleInputs}
              placeholder="Your Phone"
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Your Message</label>
            <textarea
              className="form-control"
              id="exampleInputPassword1"
              name="message"
              value={userData.message}
              onChange={handleInputs}
              placeholder="Your Message"
              cols="20"
              rows="5"
            ></textarea>
          </div>

          <div className="text-center">
            <button
              type="submit"
              onClick={postData}
              className="btn btn-primary  m-4"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
