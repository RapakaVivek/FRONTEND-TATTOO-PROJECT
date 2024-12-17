import React, { useState, useEffect, } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const PopularTatoos = () => {
  const [tattoos, setTattoos] = useState([]); 
const Api = useSelector((state)=>state.serverurl);
  useEffect(() => {
    const fetchTattoos = async () => {
      try {
        const response = await fetch(`${Api.url}/tattooStyles/getTattoo`); 
        const data = await response.json();
        setTattoos(data); 
        console.log(data);
      } catch (error) {
        console.log(error); 
      } 
    };

    fetchTattoos(); 
  }, []); 

  return (
    <div className="popular">
      <div className="popularmarq">
      </div>
        <h1>POPULAR DESIGNS</h1>
        <p style={{marginLeft:'0px'}}>Magna nisl egestas amet netus lectus malesuada diam et ullamcorper et inurna maecenas <br/>praesent ut vitae tempus sollicitudi malesuada diam et ullamcorper</p>
      <div className='main'>
        {tattoos.map((items)=>{
         return(
          <div>
            <div className="popularcard">
            <img src={items.image} alt="" />
            <h1>{items.style_name}</h1>
            <h2>(${items.price})</h2>
            <p>{items.artist}</p>
            </div>



         
        </div>
         )
        })}
       
      </div>
      <div className="popularbtn">
       <Link to="/design"><button>Browse all products</button></Link>
      </div>
     

    </div>
  )
}

export default PopularTatoos