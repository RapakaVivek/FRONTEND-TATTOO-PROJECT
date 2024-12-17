import React, { useState, } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";

function PasswordReset() {
  const Api = useSelector((state)=>state.serverurl)
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError(null); 

    try {
      console.log("Requesting OTP for email:", email);  

      const response = await axios.post(`${Api.url}/auth/reset-password`, {
        email: email,
      });

      console.log("Response from server:", response);  

      if (response.status === 200) {
        console.log("OTP sent successfully");
        console.log(response.data.user._id)
        
        navigate("/reset-confirmation", { state: response.data.user._id });  
      } else {
        setError("Unexpected response from the server.");
      }
    } catch (err) {
      console.error("Error sending OTP:", err);
      if (err.response) {
        setError(err.response.data.message || "Failed to send OTP. Please try again.");
      } else {
        setError("Failed to send OTP. Please check your network or try again.");
      }
    } finally {
      setLoading(false); 
    }
  }

  return (
    <div className="password-reset">
      <h1 className="pas">Reset Password</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? "Sending..." : "Send OTP"}
        </button>
      </form>

      {error && <p className="error">{error}</p>}

      <div>
        <p>Remembered your password? <Link to="/login">Login</Link></p>
      </div>
    </div>
  );
}

export default PasswordReset;
