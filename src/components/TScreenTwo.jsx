import React from "react";
import logo from "../assets/TaskThree/logo.png";
import iconAward from '../assets/TaskThree/icon_awards.png'
import one from '../assets/TaskThree/1.png'
function TScreenTwo() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      {/* Header Section */}
      <div
        style={{
          padding: "20px",
          background:
            "linear-gradient(to bottom right, #8d2b2b 90%, white 10%)",
          height: "120vh",
        }}
      >
        <img
          src={logo}
          alt="Logo"
          style={{ width: "150px", height: "150px", marginLeft: "50px" }}
        />
        <h1 style={{ fontSize: "100px", margin: "10px 50px" }}>
          RED CARD 2018
        </h1>
        <p
          style={{ fontSize: "50px", marginBottom: "20px", marginLeft: "50px" }}
        >
          China Digital Football Awards
        </p>
        <div  style={{
              width:'90%',
              color: "#fff",
              // maxWidth: "600px",
              fontSize: "20px",
              marginLeft: "50px",
            }}>
          <p
           
          >
            The Red Card is globally recognized as the leading annual report to
            assess the most influential European football clubs, leagues, and
            players online in China. Now in its 7th year, Red Card 2018 has been
            reimagined to include 5 additional awards to recognize the many
            areas of digital performance in China, thereby taking the Red Card
            report to a whole new level. Due to the nature and variety of these
            new categories, the winners will be chosen by a panel of 6 industry
            experts, rather than by the traditional metrics used to assess the
            three headline awards.
          </p><br></br>
          <p
          >
            This report aims to educate teams and organizations on how to
            improve their China digital strategy, what today's Chinese fans
            want, and what works online in China.
          </p>
        </div>
      </div>

      {/* Best Clubs Section */}
      {Array(4)
        .fill()
        .map((_, index) => (
          <div key={index} style={{ padding: "20px",marginLeft:'60px',}}>
            <h2 style={{ fontSize: "50px", color: "#000" }}>
              <img src={iconAward} style={{width:'40px',height:'40px'}}/>
              &nbsp;BEST CLUBS</h2>
            <div
              style={{
                display: "flex",
                // justifyContent: "center",
                flexWrap: "wrap",
                gap: "50px",
                padding: "10px 0",
                
              }}
            >
              {Array(6)
                .fill()
                .map((_, i) => (
                  <div key={i} style={{}}>
                    <img
                      src={one}
                      alt="Club Logo"
                      style={{ width: "160px", height: "160px", }}
                    />
                    <p style={{marginTop: "10px" ,textAlign:'center',color:'red'}}>
                      Lorem ipsum<br></br>
                      <p style={{color:'black'}}>Lorem</p>
                    </p>
                  </div>
                ))}
            </div>
          </div>
        ))}

      {/* Footer Section */}
     
      <div
      style={{
        backgroundColor: '#8B0A0A', // Background color similar to the image
        color: 'white',
        padding: '50px',
        fontSize: '1.5em',
        // textAlign: 'center',
        position: 'relative',
        clipPath: 'polygon(0 0, 100% 0, 100% 87%, 93% 100%, 0 100%)',
      }}
    >
      <p style={{ fontSize: '50px', fontWeight: 'bold', margin: 0 }}>
        RED CARD 2019 WINNERS <br />AND REPORT TO BE LAUNCHED <br />ON 24TH JANUARY 2019.
      </p>
    </div>
      <div style={{height:'10px'}}>

      </div>
    </div>
  );
}

export default TScreenTwo;
