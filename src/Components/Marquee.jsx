import React from 'react';

const TattooMarquee = () => {
  return (
    <div style={{ backgroundColor: 'black', padding: '6px 0' }}>
      <marquee behavior="scroll" direction="left" style={{ fontSize: '20px', fontWeight: '400', color: '#fff', marginTop: '0px', textTransform: 'uppercase' }}>
        "Every tattoo tells a story, what's yours?" Book your session today and let us create your next masterpiece. 
        Every tattoo tells a story, what's yours?" Book your session today and let us create your next masterpiece!
      </marquee>
    </div>
  );
};

export default TattooMarquee;
