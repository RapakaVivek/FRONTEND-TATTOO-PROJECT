// import React, { useState ,useEffect } from 'react';

// const ProfilePage = () => {
//   const [pro, setPro] = useState(); 
//   const initialState =localStorage.getItem("authToken") || [];
  
//   const profile = async () => {
   
//     if (!initialState) {
//       alert("No auth token found. Please log in.");
//       return;
//     }
  
//     try {
//       const res = await fetch('http://localhost:5000/profile', {
//         method: 'GET',  
//         headers: {
//           Authorization: `Bearer ${initialState}`,
//         },
//       });
//       console.log(res)
//       if (res.ok) {
//         const data = await res.json();
//         setPro(data);
//         console.log(data)
       
//       } else {
//         throw new Error("Failed to fetch profile data");
//       }
//     } catch (error) {
//       alert(error.message);
//     }
//   };
  

//   useEffect(()=>{
//     console.log(initialState)
//   },[])
//   useEffect(() => {
//     profile();

//   }, []); 

//   return (
//     <div className="profile-page">
//       <h1 className="profile-heading">Profile Page</h1>

//       {pro && (
//         <div className="profile-head">
//           <div className="profile-img">
//             <img
//               src={'https://t4.ftcdn.net/jpg/07/24/94/05/240_F_724940537_uOuvYU0zzfTatPvahOeyGJFaEpobqOV7.jpg'}
//               alt="user-img"
//               className="profile-image"
//             />
//           </div>
//           <div className="profile-body">
//             <p className="profile-info">
//               <strong className="profile-label">Name:</strong> {pro.profile.name}
//             </p>
//             <p className="profile-info">
//               <strong className="profile-label">Email:</strong> {pro.profile.email}
//             </p>
//             <p className="profile-info">
//               <strong className="profile-label">Number:</strong> {pro.profile.mobile}
//             </p>
//             <div className="profile-buttons">
//               <button className="change-details-btn">Change Details</button>
//               <button className="logout-btn">Log Out</button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ProfilePage;




import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProfilePage = () => {
  const Api = useSelector((state)=>state.serverurl)
  const [pro, setPro] = useState(null);
  const authToken = localStorage.getItem("authToken") || null;
  const navigate = useNavigate() 
  const profile = async () => {
    if (!authToken) {
      alert("No auth token found. Please log in.");
      return;
    }

    try {
      const res = await fetch(`${Api.url}/pro/profile`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });

      if (res.ok) {
        const data = await res.json();
        setPro(data);
      } else {
        throw new Error("Failed to fetch profile data");
      }
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    profile();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    alert("Logged out successfully!");
    // navigate('/')
    // window.location.reload();
  };

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Profile Page</h1>

      {pro ? (
        <div className="card mx-auto shadow" style={{ maxWidth: "600px" }}>
          <div className="row g-0">
            <div className="col-md-4 d-flex align-items-center justify-content-center p-3">
              <img
                src="https://t4.ftcdn.net/jpg/07/24/94/05/240_F_724940537_uOuvYU0zzfTatPvahOeyGJFaEpobqOV7.jpg"
                alt="User"
                className="img-fluid rounded-circle"
                style={{ width: "120px", height: "120px" }}
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <p className="card-text">
                  <strong>Name:</strong> {pro.profile.name}
                </p>
                <p className="card-text">
                  <strong>Email:</strong> {pro.profile.email}
                </p>
                <p className="card-text">
                  <strong>Mobile:</strong> {pro.profile.mobile}
                </p>
                <div className="d-flex gap-2 mt-3">
                  {/* <button className="btn btn-primary">Change Details</button> */}
                  <Link to='/login'><button className="btn btn-danger" onClick={handleLogout}>
                    Log Out
                  </button></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center">
          <p>Loading profile...</p>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
