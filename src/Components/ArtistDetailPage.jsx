import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const ArtistDetailPage = () => {
  const Api = useSelector((state)=>state.serverurl)
  const { id } = useParams(); 
  const [artist, setArtist] = useState();

  useEffect(() => {
    const fetchArtistDetails = async () => {
      try {
        const response = await fetch(`${Api.url}/artists/artist/${id}`);
        if (!response.ok) {
          throw new Error("HTTP error! Status: " + response.status);
        }
        const data = await response.json();
        setArtist(data); 
      } catch (error) {
        console.error("Failed to fetch artist details:", error);
      }
    };

    fetchArtistDetails();
  }, [id]); // Effect runs every time the `id` parameter changes

  if (!artist) {
    return <div></div>; 
  }

  return (
    <div className="container">
      <header>
        <h1>{artist.artist_name}</h1>
        <p>{artist.artist_bio}</p>
      </header>
      <div className="artist-details">
        <img
          src={artist.artist_image}
          alt={artist.artist_name}
          style={{ width: '300px', height: '300px', objectFit: 'cover' }}
        />
        <p>{artist.artist_bio}</p> {/* Display the bio */}
      </div>
    </div>
  );
};

export default ArtistDetailPage;
