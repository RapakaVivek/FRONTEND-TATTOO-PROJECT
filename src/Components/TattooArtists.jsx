import React from 'react';


const fallbackImage = 'path/to/fallback-image.jpg';

const tattooArtists = [
  { name: 'Matt Cannon', specialty: 'American old-school tattooist', imageUrl: 'https://cdn.prod.website-files.com/63627969e697b61273d5987b/6363f37c1ec90d18d5c06af6_experienced-tattoo-artist-front-his-studio-john-carter-tattooist-webflow-template.png' },
  { name: 'John Carter', specialty: 'Old school tattooist', imageUrl: 'https://cdn.prod.website-files.com/63627969e697b61273d5987b/6363f37c1ec90d18d5c06af6_experienced-tattoo-artist-front-his-studio-john-carter-tattooist-webflow-template.png' },
  { name: 'Daniel Cutts', specialty: 'Cartoon style tattooist', imageUrl: 'https://cdn.prod.website-files.com/63627969e697b61273d5987b/6363f37c1ec90d18d5c06af6_experienced-tattoo-artist-front-his-studio-john-carter-tattooist-webflow-template.png' },
  { name: 'Tomas Smith', specialty: 'Pop Culture Style tattooist', imageUrl: 'https://cdn.prod.website-files.com/63627969e697b61273d5987b/6363f37c1ec90d18d5c06af6_experienced-tattoo-artist-front-his-studio-john-carter-tattooist-webflow-template.png' },
 
];

const TattooArtists = () => {
  return (
    <div className="tattoo">
      <h1>Tattoo Artists</h1>
      <p>Magna nisl egestas amet netus lectus malesuada diam et ullamcorper et inurna maecenas<br />
      praesent ut vitae tempus sollicitudi malesuada diam et ullamcorper</p>
      <div className="artists1">
        {tattooArtists.map((artist, index) => (
          <div key={index} className="artistcards">
            <img 
              src={artist.imageUrl || fallbackImage} 
              alt={artist.name} 
              onError={(e) => e.target.src = fallbackImage} 
            />
            <h2>{artist.name}</h2>
            <p>{artist.specialty}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TattooArtists;
