import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const NewsLatter = () => {
  const [email, setEmail] = useState('');
  const [showError, setShowError] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 992);

  // Check screen size on resize
  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 992);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleSubscribe = () => {
    if (!email) {
      setShowError(true);
      return;
    }
    setIsSubscribed(true);
    setShowError(false);

    // Automatically reset after a timeout
    setTimeout(() => {
      setIsSubscribed(false);
      setEmail('');
    }, 10000);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubscribe();
    }
  };

  return (
    <div
      className="d-flex flex-column flex-md-row justify-content-evenly align-items-center text-white"
      style={{
        background: 'black',
        height: 'auto',
        width: '100%',
        padding: '40px 20px',
        marginTop: '150px',
      }}
    >
      <h1 className="display-4 fw-bold mb-4 text-uppercase text-center text-md-left">
        <span style={{ color: '#f8133c', fontSize: '60px' }}>Subscribe</span> to <br />
        Our Newsletter
      </h1>
      {!isSubscribed ? (
        <div className="input-group w-100 w-md-50" style={{ maxWidth: isLargeScreen ? '500px' : '100%' }}>
          <input
            type="email"
            className="form-control rounded"
            placeholder="Please Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onKeyDown={handleKeyPress} // Handle Enter key press
            style={{
              width: '100%', // Always 100% width
              height: isLargeScreen ? '60px' : '40px', // Larger height on big screens
              transition: 'all 0.3s ease', // Smooth transition
            }}
          />
          {showError && (
            <div className="text-danger mt-3">
              Please fill in your email to subscribe.
            </div>
          )}
        </div>
      ) : (
        <div className="text-light text-right">
          <h3>Successfully subscribed!</h3>
        </div>
      )}
    </div>
  );
};

export default NewsLatter;
