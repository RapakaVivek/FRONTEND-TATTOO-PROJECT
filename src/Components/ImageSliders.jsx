// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

// // Reusable Button Component
// const CarouselButton = ({ text, backgroundColor, hoverColor, onClick }) => {
//   return (
//     <button
//       className="carousel-button"
//       style={{
//         padding: '10px 20px',
//         backgroundColor,
//         border: 'none',
//         color: 'white',
//         borderRadius: '5px',
//         marginBottom: '10px',
//         cursor: 'pointer',
//         transition: 'transform 0.3s ease, background-color 0.3s ease',
//         transform: 'scale(1)',
//       }}
//       onMouseEnter={(e) => {
//         e.target.style.backgroundColor = hoverColor;
//         e.target.style.transform = 'scale(1.1)';
//       }}
//       onMouseLeave={(e) => {
//         e.target.style.backgroundColor = backgroundColor;
//         e.target.style.transform = 'scale(1)';
//       }}
//       onClick={onClick}
//     >
//       {text}
//     </button>
//   );
// };

// const ImageSliders1 = () => {
//   return (
//     <div className="container-fluid" style={{ marginTop: '50px', padding: 0 }}>
//       <div
//         id="myCarousel"
//         className="carousel slide"
//         data-ride="carousel"
//         data-interval="2000"
//       >
//         <ol className="carousel-indicators">
//           <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
//           <li data-target="#myCarousel" data-slide-to="1"></li>
//         </ol>

//         <div className="carousel-inner" role="listbox">
//           {/* First Slider */}
//           <div className="carousel-item active">
//             <img
//               // src="https://img.freepik.com/premium-photo/hyperrealistic-portrait-tattoo-enthusiast-showcasing-inked-designs_1204896-59444.jpg?ga=GA1.1.898823599.1716876559&semt=ais_hybrid"

//               // src='https://cdn.prod.website-files.com/63627969e697b61273d5987b/638f845e36558e8bfe68e916_thumbnail-5-blog-tattooist-template-p-500.jpg'

//               src="https://img.freepik.com/free-photo/young-adult-artist-tattooing-with-creativity-skill-generated-by-ai_188544-44607.jpg?t=st=1731756805~exp=1731760405~hmac=7077f3f1da92d8ffa63a961788ebdafbf2960dae5169e2cbc554586df3ecdd8e&w=1060"

//               style={{
//                 width: '100vw',
//                 height: '600px',
//                 borderRadius: '0',
//                 // opacity: '0.85',
            
//               }}
//               alt="Image 1"
//             />
//             <div className="carousel-caption">
//               <h1
//                 style={{
//                   // fontFamily: 'Sacramento, cursive',
//                   fontFamily: 'Arial, Helvetica, sans-serif',
//                   fontSize: '50px',
//                   fontWeight:'900',
//                   marginBottom: '20px',
//                 }}
//               >
//                 "Every tattoo tells a story,<br/> what's yours?"
//               </h1>
//               <p
//                 style={{
//                   fontSize: '20px',
//                   marginBottom: '160px',
//                   color: 'white',
//                 }}
//               >
//                "Every tattoo is more than just ink on skin; it’s a deeply personal expression of who you are. Whether it’s a tribute to a loved one, a symbol"
//               </p>
//               {/* <div
//                 className="button-container"
//                 style={{
//                   position: 'absolute',
//                   top: '73%',
//                   left: '53%',
//                   transform: 'translate(-50%, -50%)',
//                   zIndex: '10',
//                   display: 'flex',
//                   gap: '20px',
//                 }}
//               >
//                 <CarouselButton
//                   text="Book Now"
//                   backgroundColor="#ff6b6b"
//                   hoverColor="#ff4c4c"
//                 />
//                 <CarouselButton
//                   text="About Our Studio"
//                   backgroundColor="#4caf50"
//                   hoverColor="#3e8e41"
//                 />
//               </div> */}
//             </div>
//           </div>

//           {/* Second Slider */}
//           <div className="carousel-item">
//             <img
//               // src="https://img.freepik.com/free-photo/young-adult-artist-tattooing-with-creativity-skill-generated-by-ai_188544-44607.jpg?t=st=1731756805~exp=1731760405~hmac=7077f3f1da92d8ffa63a961788ebdafbf2960dae5169e2cbc554586df3ecdd8e&w=1060"
//               src='https://lh3.googleusercontent.com/6UKI7NSZBhTQavaoiqi7ZFZgHyHh7VtjfqUzCAefcyKnVfFoLocsOKuiccuLjHcUc6AybOVuWlQiGQy3yZ9bXEI6G38KNyHwVlQXR22Tq5QlgrtCzCi-UnzI4pNI79dCK8Zl4gfDZzgELWQ9tUSTkRZ5A2uJ'

             
//               style={{
//                 width: '100vw',
//                 height: '600px',
//                 borderRadius: '0',
//                 // opacity: '0.85',
//               }}
//               alt="Image 2"
//             />
//             <div className="carousel-caption">
//               <h1
//                style={{
//                 // fontFamily: 'Sacramento, cursive',
//                 fontFamily: 'Arial, Helvetica, sans-serif',
//                 fontSize: '50px',
//                 fontWeight:'900',
//                 marginBottom: '30px',
//               }}
//               >
//                 "Your Beliefs, Forever in Ink"
//               </h1>
//               <p
//                  style={{
//                   fontSize: '18px',
//                   marginBottom: '180px',
//                   color: 'white',

//                 }}
//               >
//              "we understand that tattoos are not just art—they are a reflection of who you are and what you believe. Whether it's a symbol of faith."
//               </p>
//               {/* <div
//                 className="button-container"
//                 style={{
//                   position: 'absolute',
//                   top: '70%',
//                   left: '53%',
//                   transform: 'translate(-50%, -50%)',
//                   zIndex: '10',
//                   display: 'flex',
//                   gap: '20px',
//                 }}
//               >
//                 <CarouselButton
//                   text="Book Now"
//                   backgroundColor="#ff6b6b"
//                   hoverColor="#ff4c4c"
//                 />
//                 <CarouselButton
//                   text="About Our Studio"
//                   backgroundColor="#4caf50"
//                   hoverColor="#3e8e41"
//                 />
//               </div> */}
//             </div>
//           </div>
//           <div className="carousel-item">
//             <img
//             src="https://cdn.prod.website-files.com/63627969e697b61273d5987b/638f8402a8b011d274d6068d_thumbnail-2-blog-tattooist-template-p-500.jpg" 


//             style={{
//                 width: '100vw',
//                 height: '600px',
//                 borderRadius: '0',
            
//               }}
//               alt="Image 3"
//             />
//             <div className="carousel-caption">
//               <h1
//                 style={{
              
//                   fontFamily: 'Arial, Helvetica, sans-serif',
//                   fontSize: '50px',
//                   fontWeight:'900',
//                   marginBottom: '30px',
//                 }}
//               >
//                 "Your Beliefs, Forever in Ink"
//               </h1>
//               <p
//                 style={{
//                   fontSize: '18px',
//                   marginBottom: '180px',
//                   color: 'white',

//                 }}
//               >
//                 "Your beliefs are the essence of who you are, shaping your identity and guiding your path. At our studio, we specialize in bringing those deeply held values to life through stunning, meaningful tattoos."
//               </p>

//               {/* <div
//                 className="button-container"
//                 style={{
//                   position: 'absolute',
//                   top: '70%',
//                   left: '53%',
//                   transform: 'translate(-50%, -50%)',
//                   zIndex: '10',
//                   display: 'flex',
//                   gap: '20px',
//                 }}
//               >
//                 <CarouselButton
//                   text="Book Now"
//                   backgroundColor="#ff6b6b"
//                   hoverColor="#ff4c4c"
//                 />
//                 <CarouselButton
//                   text="About Our Studio"
//                   backgroundColor="#4caf50"
//                   hoverColor="#3e8e41"
//                 />
//               </div> */}
//             </div>
//           </div>

















//         </div>

//         <a
//           className="carousel-control-prev"
//           href="#myCarousel"
//           role="button"
//           data-slide="prev"
//         >
//           <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//           <span className="sr-only"></span>
//         </a>

//         <a
//           className="carousel-control-next"
//           href="#myCarousel"
//           role="button"
//           data-slide="next"
//         >
//           <span className="carousel-control-next-icon" aria-hidden="true"></span>
//           <span className="sr-only"></span>
//         </a>
//       </div>
//     </div>
//   );
// };

// export default ImageSliders1;





import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// Reusable Button Component
const CarouselButton = ({ text, backgroundColor, hoverColor, onClick }) => {
  return (
    <button
      className="carousel-button"
      style={{
        padding: "10px 20px",
        backgroundColor,
        border: "none",
        color: "white",
        borderRadius: "5px",
        marginBottom: "10px",
        cursor: "pointer",
        transition: "transform 0.3s ease, background-color 0.3s ease",
        transform: "scale(1)",
      }}
      onMouseEnter={(e) => {
        e.target.style.backgroundColor = hoverColor;
        e.target.style.transform = "scale(1.1)";
      }}
      onMouseLeave={(e) => {
        e.target.style.backgroundColor = backgroundColor;
        e.target.style.transform = "scale(1)";
      }}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

const ImageSliders1 = () => {
  return (
    <div className="container-fluid p-0" style={{marginTop:'70px'}}>
      <div
        id="myCarousel"
        className="carousel slide"
        data-ride="carousel"
        data-interval="3000"
      >
        {/* Indicators */}
        {/* <ol className="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
          <li data-target="#myCarousel" data-slide-to="1"></li>
          <li data-target="#myCarousel" data-slide-to="2"></li>
        </ol> */}

        {/* Carousel Items */}
        <div className="carousel-inner">
          {/* First Slide */}
          <div className="carousel-item active">
            <img
              src="https://img.freepik.com/free-photo/young-adult-artist-tattooing-with-creativity-skill-generated-by-ai_188544-44607.jpg"
              className="d-block w-100"
              alt="Image 1"
              style={{ maxHeight: "500px", objectFit: "cover" }}
            />
            <div className="carousel-caption d-none d-md-block">
              <h1 className="display-4 fw-bold "  style={{marginTop:"-300px" }}>"Every Tattoo Tells a Story <br/>What's yours?"</h1>
              <p className="text-light fs-5 fw-normal">"What's yours? Discover your story through ink."</p>
            </div>
          </div>

          {/* Second Slide */}
          <div className="carousel-item">
            <img
              src="https://lh3.googleusercontent.com/6UKI7NSZBhTQavaoiqi7ZFZgHyHh7VtjfqUzCAefcyKnVfFoLocsOKuiccuLjHcUc6AybOVuWlQiGQy3yZ9bXEI6G38KNyHwVlQXR22Tq5QlgrtCzCi-UnzI4pNI79dCK8Zl4gfDZzgELWQ9tUSTkRZ5A2uJ"
              className="d-block w-100"
              alt="Image 2"
              style={{ maxHeight: "500px", objectFit: "cover" }}
            />
            <div className="carousel-caption d-none d-md-block">
              <h1 className="display-4 fw-bold"  style={{marginTop:"-300px" }}>"Your Beliefs, Forever in Ink"</h1>
              <p className="text-light fs-5 fw-normal">
                "Let your tattoo express your identity and beliefs with style."
              </p>
            </div>
          </div>

          {/* Third Slide */}
          <div className="carousel-item">
            <img
              src="https://cdn.prod.website-files.com/63627969e697b61273d5987b/638f8402a8b011d274d6068d_thumbnail-2-blog-tattooist-template-p-500.jpg"
              className="d-block w-100"
              alt="Image 3"
              style={{ maxHeight: "500px", objectFit: "cover"}}
            />
            <div className="carousel-caption d-none d-md-block">
              <h1 className="display-4 fw-bold"   style={{marginTop:"-300px" }}>"Ink That Speaks Volumes"</h1>
              <p className="text-light fs-5 fw-normal">"Transform your vision into breathtaking artwork."</p>
            </div>
          </div>
        </div>

        {/* Controls */}
        <a
          className="carousel-control-prev"
          href="#myCarousel"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#myCarousel"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>

      
    </div>
  );
};

export default ImageSliders1;




