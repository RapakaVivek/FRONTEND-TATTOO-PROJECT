import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Home from './Components/Home';
import MainArtists from './Components/MainArtists';
import Login from './Components/Login';
import Register from './Components/Register';
import PasswordReset from './Components/ForgetPassword';
import SelectProductById from './Components/SelectProductById';
import Design from './Components/Design';
import MainCartPage from './Components/MainCartPage';
import AboutMain from './Components/AboutMain';
import ArtistDetailPage from './Components/ArtistDetailPage';
import MainContactpage from './Components/MainContactpage';
import ResetPassword from './Components/ResetPass';
import OTPform from './Components/OtpForm';
import MainProfilepage from './Components/MainProfilepage';
import MainBooking from './Components/MainBooking';
import Appointment from './Components/Appointment';
import Protectedroute from './Components/protectedroutes';
import { useDispatch, useSelector } from 'react-redux';
import { setuser } from './Components/CartComp';
import { fetchCart } from './authapis';
import MainSelectedDetails from './MainSelectedDetails';

function App() {
  const Api = useSelector((state) => state.serverurl);
  const initialState = localStorage.getItem('authToken');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation(); // Use to get the current path
  const [profileFetched, setProfileFetched] = useState(false); // Tracks if verification is done

  const profile = async () => {
    try {
      const res = await fetch(`${Api.url}/pro/profile`, {
        method: 'GET',
        headers: {
          Authorization:` Bearer ${initialState}`,
        },
      });

      if (res.ok) {
        const data = await res.json();
        const _id = data?.profile?._id;
        const name = data?.profile?.name;
        const email = data?.profile?.email;
        const phonenumber = data?.profile?.mobile;

        dispatch(setuser({ _id, name, email, phonenumber }));
        dispatch(fetchCart(Api.url, _id));

        // Redirect to /home if the user is on the root path only
        if (location.pathname === '/') {
          navigate('/home');
        }
      } else {
        navigate('/login'); // Redirect to login if the token is invalid
      }
    } catch (error) {
      console.error('Error fetching profile:', error);
      navigate('/login'); // Redirect to login on error
    } finally {
      setProfileFetched(true); // Indicate the profile fetch is complete
    }
  };

  // Run only once during the app's initial load
  useEffect(() => {
    if (initialState) {
      profile(); // Validate the token
    } else {
      setProfileFetched(true); // Skip validation if no token exists
      if (location.pathname !== '/login') {
        navigate('/login'); // Redirect to login if no token and not on login page
      }
    }
  }, []); // Run only once when the app loads

  if (!profileFetched) {
    // Prevent rendering until token validation is complete
    return null;
  }

  return (
    <div>
      <Routes>
        <Route path="/home" element={<Protectedroute><Home /></Protectedroute>} />
        <Route path="/design" element={<Protectedroute><Design /></Protectedroute>} />
        <Route path="/selectProduct" element={<Protectedroute><MainSelectedDetails /></Protectedroute>} />
        <Route path="/Artists" element={<Protectedroute><MainArtists /></Protectedroute>} />
        <Route path="/ArtistDetailpage" element={<Protectedroute><ArtistDetailPage /></Protectedroute>} />
        <Route path="/Profile" element={<Protectedroute><MainProfilepage /></Protectedroute>} />
        <Route path="/cart" element={<Protectedroute><MainCartPage /></Protectedroute>} />
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgetpassword" element={<PasswordReset />} />
        <Route path="/reset-confirmation" element={<OTPform />} />
        <Route path="/newpassword" element={<ResetPassword />} />
        <Route path="/about" element={<AboutMain />} />
        <Route path="/contact" element={<MainContactpage />} />
        <Route path="/booking" element={<Appointment />} />
        <Route path="/bookings" element={<MainBooking />} />
        <Route path="*" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;