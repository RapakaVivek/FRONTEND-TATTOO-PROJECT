
import React, { useState} from 'react';
import { useSelector } from 'react-redux';



const ContactUs = () => {
  const Api = useSelector((state)=>state.serverurl)
  
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true); 
    
    try {
      
      const response = await fetch(`${Api.url}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit the form. Please try again later.');
      }

      setFormSubmitted(true); 
      setErrorMessage(null); 
    } catch (error) {
      setErrorMessage(error.message); 
    } finally {
      setIsSubmitting(false); 
    }
  };

  return (
    <div>
      
      <div>
        <img 
          style={{ height: '500px', width: '100vw', marginTop: '50px' }} 
          src="https://img.freepik.com/free-photo/woman-checking-time-from-her-phone_53876-129658.jpg?ga=GA1.1.898823599.1716876559" 
          alt="Contact Us Banner" 
        />
        <h1 className="heading" style={{ marginTop: '-250px', marginLeft: '20px', color: 'white' }}>
          CONTACT US
        </h1>
        <p className="paragraph" style={{ marginLeft: '20px', color: 'white', fontSize: '17px' }}>
          Have questions or need support? Contact our team for assistance with our <br />
          software solutions. We’re here to help you succeed.
        </p>
      </div>

     
      <div className="container" style={{ marginTop: '180px' }}>
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="input-fields">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Name:</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-control"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email:</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-control"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="phone" className="form-label">Phone:</label>
                  <input
                    type="number"
                    id="phone"
                    name="phone"
                    className="form-control"
                    placeholder="Your Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">Leave us a message:</label>
                  <textarea
                    id="message"
                    name="message"
                    className="form-control"
                    placeholder="Your Message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-danger w-250" disabled={isSubmitting}>
                  {isSubmitting ? 'Submitting...' : 'Submit'}
                </button>
              </form>

             
              {formSubmitted && !errorMessage && (
                <div className="alert alert-success mt-4" role="alert">
                  Your message has been successfully sent. We'll get back to you soon!
                </div>
              )}

              {errorMessage && (
                <div className="alert alert-danger mt-4" role="alert">
                  {errorMessage}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      
      <div>
        <h2 style={{ textAlign: 'center', marginTop: '40px' }}>Get in touch</h2>
      </div>

      
      <div style={{ textAlign: 'center', marginTop: '25px' }}>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px' }}>
          <i className="fab fa-facebook-f" style={{ fontSize: '30px', color: '#3b5998' }}></i>
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px' }}>
          <i className="fab fa-twitter" style={{ fontSize: '30px', color: '#1da1f2' }}></i>
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px' }}>
          <i className="fab fa-linkedin-in" style={{ fontSize: '30px', color: '#0077b5' }}></i>
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px' }}>
          <i className="fab fa-instagram" style={{ fontSize: '30px', color: '#e1306c' }}></i>
        </a>
      </div>

     
      <div className="container mt-5">
        <div className="row justify-content-between">
          <div className="col-md-4 text-center mb-4" style={{ border: '1px solid #ddd', padding: '20px', marginTop: '30px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '8px' }}>
            <i className="fas fa-map-marker-alt" style={{ fontSize: '35px', color: '#007bff' }}></i>
            <h3 className="mt-3">Our Location</h3>
            <p className="mt-2" style={{ fontSize: '16px' ,marginRight:'60px'}}>
              1-98/9/65, Jai Hind Gandhi Rd, VIP Hills,<br />
              Jaihind Enclave, Madhapur, Hyderabad,<br />
              Telangana -50008.
            </p>
          </div>

          <div className="col-md-4 text-center mb-4" style={{ border: '1px solid #ddd', padding: '20px', marginTop: '30px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '8px' }}>
            <i className="fas fa-phone-alt" style={{ fontSize: '35px', color: '#007bff' }}></i>
            <h3 className="mt-3">Call Us On</h3>
            <p className="mt-2" style={{ fontSize: '16px' }}>040-31653936</p>
          </div>

          <div className="col-md-4 text-center mb-4" style={{ border: '1px solid #ddd', padding: '20px', marginTop: '30px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '8px' }}>
            <i className="fas fa-envelope" style={{ fontSize: '35px', color: '#007bff' }}></i>
            <h3 className="mt-3">Email Us</h3>
            <p className="mt-2" style={{ fontSize: '16px' }}>info@cinereoustechnologies.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;










