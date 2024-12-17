import { useEffect, useState } from 'react';
import './OtpForm.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const OTPform = () => {
  const location = useLocation();
  const id = location.state;
 const Api = useSelector((state)=>state.serverurl)
  const navigate = useNavigate();
  const [otpvalue, setOtpvalue] = useState({
    number1: "",
    number2: "",
    number3: "",
    number4: "",
    number5: "",
    number6: "",
  });

  useEffect(() => {
    if (id) {
      console.log("ID from state:", id);
    }
  }, [id]);

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (/\d/.test(value) || value === "") {
      setOtpvalue((prev) => ({ ...prev, [name]: value }));
      if (value !== "" && parseInt(name.replace('number', '')) < 6) {
        const nextInput = parseInt(name.replace('number', '')) + 1;
        document.getElementById(`otp${nextInput}`).focus();
      }
    }
  };

  const handleBackspace = (e, index) => {
    if (otpvalue[`number${index}`] === "") {
      const prevInput = index - 1;
      if (prevInput > 0) {
        document.getElementById(`otp${prevInput}`).focus();
      } else {
        document.getElementById(`otp1`).focus();
      }
    }
  };

  const otp = async (event) => {
    event.preventDefault();
    const otpCode = Object.values(otpvalue).join('');

    if (otpCode.length !== 6) {
      alert('Please enter all 6 digits of the OTP.');
      return;
    }

    setLoading(true);

    try {
      const res = await fetch(`${Api.url}/auth/verify-otp`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({otp: otpCode ,id:id}),
      });

      const data = await res.json();
      console.log(data)
      console.log("OTP verification response:", data.data);

      if (res.ok) {
        alert('OTP verified successfully');
        console.log(res);
        navigate('/newpassword', { state:data?.data });
      } else {
        alert('OTP verification failed. Please try again.');
      }
    } catch (error) {
      alert('An error occurred while verifying OTP. Please try again.');
      console.error('Error during OTP verification:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="otp-form-container">
      <h2>Enter OTP</h2>
      <form onSubmit={otp}>
        <div className="otp-inputs">
          {[...Array(6)].map((_, index) => (
            <input
              key={index}
              type="text"
              maxLength="1"
              name={`number${index + 1}`}
              id={`otp${index + 1}`}
              value={otpvalue[`number${index + 1}`]}
              required
              onChange={handleChange}
              onKeyDown={(e) => e.key === 'Backspace' && handleBackspace(e, index + 1)}
            />
          ))}
        </div>

        <button type="submit" className="submit-btn" disabled={loading}>
          {loading ? 'Verifying...' : 'Submit OTP'}
        </button>
      </form>
    </div>
  );
};

export default OTPform;
