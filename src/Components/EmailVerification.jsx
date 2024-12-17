import React from 'react'
// import './EmailVerification.css'
import './Register.css'


import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { Link } from 'react-router-dom';


import { IoLogoFacebook } from "react-icons/io5";

import { FaInstagramSquare } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";

const EmailVerification = () => {

  return (

    <div className=''>


      <center className='EmailVerification-conatainer'>

        <form action="" className='form'>

          <h1>Email  Verification</h1>

          <center>
            <p style={{ marginTop: '5px', fontWeight: '500' }}>To Verify using Socila Networks </p>

            <div className="icons-dic">


              <Link to='https://www.google.com/'>
                <span style={{ fontSize: '35px', fontWeight: '900', color: '#faaac7' }}><FaGoogle /></span>
              </Link>

              <Link to='https://www.facebook.com/login.php/'>
                <span style={{ fontSize: '40px', fontWeight: '900', color: 'blue' }}><IoLogoFacebook /></span>
              </Link>


              <Link to='https://www.instagram.com/'>
                <span style={{ fontSize: '35px', fontWeight: '900', color: 'red' }}><FaInstagramSquare /></span>
              </Link>

            </div>

            <p style={{fontSize:'20px', fontWeight:'bold'}}>or</p>
          </center>


          <div >

            <span style={{ fontSize: '22px', fontWeight: '900', color: '#04081e', marginRight: '10px' }}><MdEmail />  </span>
            <input type="email" name='email' placeholder='Enetr email' required /> <br />

          </div>


          {/* <div >

    <span style={{ fontSize: '22px', fontWeight: '900', color: '#04081e', marginRight: '10px' }}> <FaLock /> </span>
    <input type="password" name="password" placeholder='Password' required /> <br />

  </div> */}

          <input type="submit" value='Verify' id='submit' className='btn btn-primary ' name='submit' />



          <div className="register-button-div" >
            <p>Don't have an account? </p>
            <Link to="/"><button className='btn btn-primary w-5 '>Sign Up</button></Link>

          </div>



          <div className="login-button-div" style={{ marginTop:'-10px' }} >
            <p >Have an account?</p>
            <Link to="/login"><button className='btn btn-primary w-5 '>Sign In</button></Link>
          </div>



          {/* <div className="register-button-div" style={{ marginTop: '-10px' }} >
    <p>If you forget password</p>
    <Link to="/forget"><button className='btn btn-primary w-5 '>Forgotten ?</button></Link>

  </div> */}




          


        </form>


      </center>

    </div>
  )
}

export default EmailVerification