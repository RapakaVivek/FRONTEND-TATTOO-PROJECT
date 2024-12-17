import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { useSelector } from "react-redux";

const ArtistPage = () => {
   const Api = useSelector((state)=>state.serverurl)
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    const fetchArtists = async () => {
      try {
        const response = await fetch(`${Api.url}/artists/artist`);

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const jsonData = await response.json();
        console.log("Data fetched successfully:", jsonData);

        const formattedData = jsonData.map((artist) => ({
          id: artist.id, // Assuming you have an id for each artist
          name: artist.artist_name,
          image: artist.artist_image,
        
          icons: [
            <span key="facebook" style={{ color: "blue" }}>
              <FaFacebook />
            </span>,
            <span key="instagram" style={{ color: "red" }}>
              <FaInstagram />
            </span>,
            <span key="twitter" style={{ color: "blue" }}>
              <FaTwitter />
            </span>,
          ],
        }));

        setArtists(formattedData);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };

    fetchArtists();
  }, []);

  return (
    <div className="container">
      <header>
        <h1>Tattoo Artists</h1>
        <p style={{marginLeft:'0px'}}>
          I almost moved into a place over a funeral parlor. My father said,
          'That's just too macabre,' <br />
          but I thought I'd be embracing my mortality. I told him it would keep
          me grounded
        </p>
      </header>
      <div className="artist-grid">
        {artists.map((artist) => (
          <div className="artist-card" key={artist.id}>
            {/* Link to ArtistDetailsPage with artist id passed in the state */}
            {/* <Link to={`/ArtistDetailpage`} state={{ id: artist.id }}> */}
              <div
                style={{
                  border: "1px solid #ddd",
                  padding: "10px",
                  textAlign: "center",

                }}
              >
                <img
                  src={artist.image}
                  alt={artist.name}
                  style={{
                    width: "200px",
                    height: "200px",
                    objectFit: "cover",
                    textDecoration:"none"
                  }}
                />
                <h3>{artist.name}</h3>
                <p>{artist.bio}</p>
                <div className="icons">
                  {artist.icons.map((icon, i) => (
                    <span key={i}>{icon}</span>
                  ))}
                </div>
              </div>
            {/* </Link> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArtistPage;
