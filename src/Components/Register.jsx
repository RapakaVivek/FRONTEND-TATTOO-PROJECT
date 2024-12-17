

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
 import './Styles.css'
import { useSelector } from "react-redux";

function Register() {
  const navigate = useNavigate();
const Api = useSelector((state)=>state.serverurl)
  const [cha, setCha] = useState({
    username: "",
    email: "",
    phonenumber: "",
    password: "",
    confirmPassword: "",
  });

 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCha({ ...cha, [name]: value });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (cha.password !== cha.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const headerList = {
      "Content-type": "application/json",
    };

    try {
      
      const res = await fetch(`${Api.url}/register/register`, {  
        method: "POST",
        body: JSON.stringify(cha),
        headers: headerList,
        mode: "cors",
      });

      const data = await res.json();
       console.log(data)  

      if (!res.ok) {
        alert(data.message || 'Something went wrong, please try again.');
        return;
      }

      console.log(data); 
      navigate("/login"); 
    } catch (error) {
      console.error("Error during registration:", error);
      alert('Error during registration. Please try again.');
    }
  };

  return (
    <div className="register">
      <h1 className="regi">Register</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          value={cha.username}
          onChange={handleChange} 
          placeholder="Username"
          required
        />

        <input
          type="email"
          name="email"
          value={cha.email}
          onChange={handleChange} 
          placeholder="Email"
          required
        />

        <input
          type="text"
          name="phonenumber"
          value={cha.phonenumber}
          onChange={handleChange} 
          placeholder="Phone Number"
          required
          pattern="\d{10}"
          title="Phone number must be 10 digits"
        />

        <input
          type="password"
          name="password"
          value={cha.password}
          onChange={handleChange} 
          placeholder="Password"
          required
        />

        <input
          type="password"
          name="confirmPassword"
          value={cha.confirmPassword}
          onChange={handleChange} 
          placeholder="Confirm Password"
          required
        />

        <button type="submit">Sign Up</button>
      </form>

      <div>
        <p>
          Already have an account? <Link to="/Login">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default Register;