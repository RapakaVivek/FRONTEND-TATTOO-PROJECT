import React from 'react';

const About = () => {
  return (
    <div>
      {/* About Section */}
      <div className="container d-flex justify-content-evenly align-items-center">
        <div className="row align-items-center">
          {/* Left side: Text and Button */}
          <div className="col-12 col-md-6 text-center text-md-start">
            <h1 className="display-2 text-uppercase text-danger fw-bold mt-5">About our Studio</h1>
            <p className="lead text-center text-md-start" style={{marginLeft:'0px'}}>
              Tattoos are a unique form of self-expression and artistry, etched onto the skin to tell personal stories, symbolize meaningful moments, or showcase creativity.
            </p>
            <button className="btn btn-danger mt-4 w-50 fs-3">Read Our Story</button>
          </div>

          {/* Right side: Image */}
          <div className="col-12 col-md-6">
            <img className="img-fluid mt-4" src="https://assets-global.website-files.com/63e146b13f318ece894576af/63e146b13f318e160b457769_image-hero-about-our-studio-tattooist-webflow-template-p-800.jpg" alt="Tattoo Studio" />
          </div>
        </div>
      </div>

      {/* How We Started Section */}
      <div className="container mt-5">
        <h1 className="text-center display-4 text-uppercase fw-bold text-danger">How we started<br /> our Tattoo Studio</h1>
        <p className="text-center lead" style={{marginLeft:'0px'}}>
          Starting our tattoo studio was a journey fueled by passion, creativity, and the desire to create meaningful art. With a deep love for the craft and a vision to build a space.
        </p>
        <img className="img-fluid d-block mx-auto" src="https://assets-global.website-files.com/63e146b13f318ece894576af/63e146b13f318eede4457810_image-about-how-we-started-our-tattoo-studioo-tattooist-webflow-template.png" alt="How we started" />
      </div>

      {/* Stats Section */}
      <div className="container mt-5">
        <div className="row text-center">
          <div className="col-12 col-md-4">
            <h2 className="display-4 text-danger fw-bold">20+</h2>
            <h3>Years of experience</h3>
            <p className="text-center"style={{marginLeft:'0px'}}>Lorem ipsum dolor sit amet, consectet adipiscing</p>
          </div>
          <div className="col-12 col-md-4">
            <h2 className="display-4 text-danger fw-bold">10k+</h2>
            <h3>Tattoos designed</h3>
            <p className="text-center"style={{marginLeft:'0px'}} >Lorem ipsum dolor sit amet, consectet adipiscing elit eget quamumto</p>
          </div>
          <div className="col-12 col-md-4">
            <h2 className="display-4 text-danger fw-bold">100%</h2>
            <h3>Customer satisfaction</h3>
            <p className="text-center"style={{marginLeft:'0px'}}>Lorem ipsum dolor sit amet, consectet adipiscing elit eget quamumto</p>
          </div>
        </div>
      </div>

      {/* Why Our Studio Section */}
      <div className="container mt-5">
        <h1 className="text-center text-uppercase fw-bold">WHY Our Studio</h1>
        <div className="text-center mb-5">
          <img className="img-fluid" src="https://assets-global.website-files.com/63e146b13f318ece894576af/63e146b13f318e47a445776a_image-about-why-our-studio-center-tattooist-webflow-template-p-500.jpg" alt="Why Our Studio" />
        </div>
        <div className="row text-center">
          <div className="col-12 col-md-3">
            <img className="img-fluid" src="https://cdn.prod.website-files.com/63e146b13f318ece894576af/63e146b13f318eb61645776e_icon-skilled-tattoo-artists-tattooist-webflow-template.svg" alt="Skilled Artists" />
            <h3>Skilled Tattoo Artists</h3>
          </div>
          <div className="col-12 col-md-3">
            <img className="img-fluid" src="https://cdn.prod.website-files.com/63e146b13f318ece894576af/63e146b13f318e84c145776d_icon-premium-desings-tattooist-webflow-template.svg" alt="Premium Designs" />
            <h3>Premium Designs</h3>
          </div>
          <div className="col-12 col-md-3">
            <img className="img-fluid" src="https://cdn.prod.website-files.com/63e146b13f318ece894576af/63e146b13f318ebab845776b_icon-comfortable-tattooist-webflow-template.svg" alt="Comfortable Experience" />
            <h3>Comfortable Experience</h3>
          </div>
          <div className="col-12 col-md-3">
            <img className="img-fluid" src="https://cdn.prod.website-files.com/63e146b13f318ece894576af/63e146b13f318e3c5245776c_icon-high-quality-equipment-tattooist-webflow-template.svg" alt="High Quality" />
            <h3>High Quality Equipment</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
