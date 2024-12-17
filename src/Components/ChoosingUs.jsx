import React from 'react'
import { Link } from 'react-router-dom'

const ChoosingUs = () => {
  return (
    <div className="container" style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
      <div className="col-12 col-md-6" style={{ padding: '20px' }}>
        <h1 className="text-center" style={{ margin: '0' }}>Why Choosing Us</h1>
        <p className="ms-4" style={{ marginTop: '20px' }}>
          Magna nisl egestas amet netus lectus malesuada diam <br />
          ullamcorper et in urna maecenas praesent ut vitae <br />
          sollicitudin pharetra ipsum molestie urna scelerisque
        </p>

        <div className="d-flex flex-column flex-md-row align-items-start mt-4">
          <div className="icon-container" style={{ margin: '0 15px 0 10px' }}>
            <img
              src="https://cdn.prod.website-files.com/63e146b13f318ece894576af/63e146b13f318e1131457739_icon-professional-tattoo-artists-tattooist-webflow-template.svg"
              alt="Professional Tattoo Artists"
              className="img-fluid"
              style={{ maxWidth: '50px', height: 'auto' }}
            />
          </div>
          <div className="text-container" style={{ marginRight: '15px' }}>
            <h5>Professional Tattoo Artists</h5>
            <p>Magna nisl egestas amet netus lectus <br />
              Malesuada diamrper et in lorem ist.</p>
          </div>
        </div>

        <div className="d-flex flex-column flex-md-row align-items-start mt-4">
          <div className="icon-container" style={{ margin: '0 15px 0 10px' }}>
            <img
              src="https://cdn.prod.website-files.com/63e146b13f318ece894576af/63e146b13f318e293045773a_icon-premium-designs-tattooist-webflow-template.svg"
              alt="Premium Designs"
              className="img-fluid"
              style={{ maxWidth: '50px', height: 'auto' }}
            />
          </div>
          <div className="text-container" style={{ marginRight: '15px' }}>
            <h5>Premium Designs</h5>
            <p>Magna nisl egestas amet netus lectus <br />
              Malesuada diamrper et in lorem ist.</p>
          </div>
        </div>

        <Link to="/about">
          <button className="btn btn-danger mt-3" style={{ height: '60px', width: '80%' }}>More About Our Studio</button>
        </Link>
      </div>

      <div className="side-image col-12 col-md-6 d-flex justify-content-center">
        <img
          src="https://img.freepik.com/free-photo/experienced-tattoo-artist-working-client-tattoo_23-2149479237.jpg?ga=GA1.1.898823599.1716876559&semt=ais_hybrid"
          alt="Tattoo artist working on a client"
          className="img-fluid rounded-3"
          style={{ height: '500px', width: '100%', marginLeft: '50px', marginTop: '60px' }}
        />
      </div>
    </div>
  )
}

export default ChoosingUs;
