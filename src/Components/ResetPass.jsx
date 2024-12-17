import React, { useEffect, useState } from 'react';
import './ResetPassword.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ResetPassword = () => {
  const location = useLocation();
  const id = location.state;
  const Api = useSelector((state)=>state.serverurl)
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

   useEffect(()=>{
     if(id){
      console.log("new",id._id)
     }
   },[])

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password.length < 6) {
      alert('Password must be at least 6 characters long.');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(`${Api.url}/auth/update-password`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id:id?.otp_user_uuid , newpasswords:password}),
      });
       console.log(id , password);
      const data = await response.json();
        console.log("data ",data)
        console.log("response",response)
      if (response.ok) {
        alert('Password reset successful. You can now log in.');
        setPassword('');
        navigate('/login' ); 
      } else {
        alert(data.message || 'Something went wrong.');
      }
    } catch (error) {
      alert('Failed to reset password. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="reset-password-container">
      <h2>Reset Your Password</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="password">New Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit" disabled={loading}>
          {loading ? 'Resetting...' : 'Reset Password'}
        </button>
      </form>
    </div>
  );
};

export default ResetPassword;
