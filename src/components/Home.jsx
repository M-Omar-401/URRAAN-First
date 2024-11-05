import React from 'react';
import { Link } from 'react-router-dom';
import urrannlogo from '../assets/urraanlogo.png'
export default function Home() {
  const cardStyle = {
    width: '320px',
    height: '300px',
    padding: '20px',
    textAlign: 'center',
    borderRadius: '10px',
    color: 'white',
    fontFamily:'cursive',
    fontSize: '18px',
    fontWeight: 'bold',
    textDecoration: 'none',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)',
    cursor: 'pointer',
  };

  const containerStyle = {
    display: 'flex',
    gap: '20px',
    justifyContent: 'center',
    padding: '40px',
  };

  const firstCardStyle = {
    ...cardStyle,
    background: 'linear-gradient(135deg, #ff7e5f 0%, #feb47b 100%)',
  };

  const secondCardStyle = {
    ...cardStyle,
    background: 'linear-gradient(135deg, #43cea2 0%, #185a9d 100%)',
  };

  return (
    <div style={{backgroundColor:'#f0f0f0',height:'100vh'}}>
        <h1 style={{textAlign:'center',fontFamily:'cursive'}}><img src ={urrannlogo} style={{width:'150px'}}/><br></br>Welcome To URRAAN Runway To Digital Flight (38) </h1> 
    <div style={containerStyle}>
      <Link to="/task1" style={firstCardStyle}>
        First Task
        <h1>Website Layout</h1><br></br><br></br>
        <p>
          Design a clean and responsive website layout that is visually
          appealing and user-friendly. Focus on structured sections and
          consistent styling.
        </p><br></br>
        <p>Date: 4/11/2024</p>
      </Link>
      <Link to="/task2" style={secondCardStyle}>
        Second Task
        <h1>CatchHub Web App</h1><br></br>
        <p>
          Develop the CatchHub Web App, managing and
          tracking various digital tasks and
          interactive elements.
        </p><br></br>
        <p>Date: 5/11/2024</p>
      </Link>
    </div>
    </div>
  );
}
