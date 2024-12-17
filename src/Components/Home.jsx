import React, { useEffect } from 'react'
import Nav from './Nav'
import Footer from './Footer';
import ImageSliders from './ImageSliders';
import PopularTatoos from './PopularTatoos';
import Testimonials from './Testimonials'
import PortfilioComp from './PortfilioComp';
import ChoosingUs from './ChoosingUs'
import NewsLatter from './NewsLatter'
import TattooMarquee from './Marquee';
import Artists from './Artists'
import { useDispatch, useSelector } from 'react-redux';
import { setcart } from './CartComp';
import { fetchCart } from '../authapis';


const Home = () => {
    const Api = useSelector((state)=>state.serverurl)
  const initialState = JSON.parse(localStorage.getItem("cart")) || [];
  const token = (localStorage.getItem("authToken")) || null;
  const dispatch = useDispatch()
  const user = useSelector((state)=>state.users)
  
  useEffect(()=>{
   console.log('hello',user)
   console.log(initialState)
   console.log(token)
  },[])

  //  useEffect(() =>{
  //    dispatch(fetchCart())
  //  },[])

  // handleprofiledetails = () =>{

  // }
  const handleGetProfileDetails = async () => {
    try {
        const token = localStorage.getItem('authToken'); // Assuming token is stored in localStorage
        if (!token) {
            console.error('No token found');
            return;
        }

        const response = await fetch(`${Api.url}/pro/profile`, {
            method: 'GET', // Optional, defaults to 'GET'
            headers: {
                'Content-Type': 'application/json', // If sending JSON
                Authorization: `Bearer ${token}`, // Include the token here
            },
        });
      
        if (!response.ok) {
            console.error('Failed to fetch profile details:', response.status);
            return;
        }

        const data = await response.json();
        console.log('Profile Details:', data);
        // let phonenumber = data?.profile?.phonenumber
        let email = data?.profile?.email;
        let name = data?.profile?.name;
        let _id = data?.profile?.userId
        dispatch(setcart({_id,email,name}))
    } catch (error) {
        console.error('Error fetching profile details:', error);
    }
};

// useEffect(() =>{
//   dispatch(fetchCart('675891db1853d9f7ae96b8ff'))
// },[])


useEffect(() => {
    const token = localStorage.getItem('authToken'); // Check if token exists
    if (token) {
        handleGetProfileDetails();
    } else {
        console.error('User is not authenticated');
    }
}, []);



  return (
    <div>
        <Nav />
        <ImageSliders />
        <TattooMarquee />
        <PopularTatoos />
        <ChoosingUs />
        <Artists />
        <PortfilioComp />
        <Testimonials />
        <NewsLatter />
        <Footer />
    </div>
  )
}

export default Home