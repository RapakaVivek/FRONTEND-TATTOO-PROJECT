// import React from 'react'

// import {Link} from 'react-router-dom'


// const PortfilioComp = () => {
//   return (
//     <div className='PortfilioComp-Conatiner'>
      
//         {/* <img src="/assets/tattooporfilioimg.jpg" alt="" /> */}

//         <div className="img0container">
//         <img src="https://www.creativefabrica.com/wp-content/uploads/2022/10/25/Skull-Graphic-With-Harley-Metallica-ACDC-IRON-Maiden-Punk-Snakes-43203235-1.png" alt="" />
//         </div>

//         <div className="text-container">
//             <h1>Take a look at our tattoo <br /> portfolio</h1>
//             <p>
//             Magna nisl egestas amet netus lectus malesuada diam et <br /> 
//             ullamcorper et in urna maecenas praesent ut vitae tempus <br />
//              sollicitudin pharetra ipsum molestie urna scelerisque
//             </p>
//             <Link to=''>
//             <button>Browse portfolio</button>
//             </Link>

//         </div>
//     </div>
//   )
// }

// export default PortfilioComp



import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Include Bootstrap

const PortfilioComp = () => {
  return (
    <div className="container py-5">
      <div className="row align-items-center">
        {/* Image Section */}
        <div className="col-md-6 text-center mb-4 mb-md-0">
          <img
            src="https://www.creativefabrica.com/wp-content/uploads/2022/10/25/Skull-Graphic-With-Harley-Metallica-ACDC-IRON-Maiden-Punk-Snakes-43203235-1.png"
            alt="Tattoo Portfolio"
            className="img-fluid rounded shadow"
          />
        </div>

        {/* Text Section */}
        <div className="col-md-6 text-center text-md-start">
          <h1 className="fw-bold mb-4">
            Take a look at our tattoo <br /> portfolio
          </h1>
          <p className="text-muted mb-4" style={{marginLeft:"0px"}}>
            Magna nisl egestas amet netus lectus malesuada diam et <br />
            ullamcorper et in urna maecenas praesent ut vitae tempus <br />
            sollicitudin pharetra ipsum molestie urna scelerisque.
          </p>
          <Link to="" className="btn btn-danger btn-lg">
            Browse Portfolio
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PortfilioComp;
