import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setuser } from "./CartComp";

function Login() {
  const dispatch = useDispatch();
  const Api = useSelector((state) => state.serverurl);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }

    try {
      const response = await axios.post(`${Api.url}/Login/login`, {
        email,
        password,
      });

      if (response.data.token) {
        const { _id, username, email, phonenumber } = response.data.user;
        dispatch(setuser({ _id, username, email, phonenumber }));
        localStorage.setItem("authToken", response.data.token);
        navigate("/home");
      } else {
        setError("Invalid credentials, please try again.");
      }
    } catch (error) {
      setError("An error occurred during login. Please try again.");
    }
  };

  return (
    <div className="login">
      <h1 className="logi">Tattoo Login</h1>
      {error && <p className="error-message">{error}</p>}

      <form onSubmit={handleSubmit} className="login-form">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <button type="submit">Login</button>
      </form>

      <div className="forgot-password">
        <Link to="/forgetpassword">Forgot Password?</Link>
      </div>

      <div className="signup-prompt">
        <p>
          Don't have an account? <Link to="/register">Sign Up</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;

