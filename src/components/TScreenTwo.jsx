import React from "react";
import logo from "../assets/TaskThree/logo.png";
import iconAward from "../assets/TaskThree/icon_awards.png";
import one from "../assets/TaskThree/1.png";
function TScreenTwo() {
  return (
    <div>
      <div
        style={{
          padding: "20px",
          backgroundColor: "#8d2b2b",
          height: "120vh",
          position: "relative", // Add relative positioning
        }}
      >
        <img
          src={logo}
          alt="Logo"
          style={{ width: "190px", height: "190px", marginLeft: "100px",marginTop:"50px" }}
        />
        <h1
          style={{
            fontSize: "100px",
            margin: "10px 100px",
            fontFamily: "Libre Franklin",
            fontWeight: "700",
          }}
        >
          RED CARD 2018
        </h1>
        <p
          style={{ fontSize: "50px", marginBottom: "10px", marginLeft: "100px",fontWeight: "bold" }}
        >
          China Digital Football Awards
        </p>
        <div
          style={{
            width: "90%",
            color: "#fff",
            fontSize: "20px",
            marginLeft: "100px",
          }}
        >
          <p>
            The Red Card is globally recognized as the leading annual report to
            assess the most influential European football clubs, leagues, and
            players online in China. Now in its 7th year, Red Card 2018 has been
            reimagined to include 5 additional awards to recognize the many
            areas of digital performance in China, thereby taking the Red Card
            report to a whole new level. Due to the nature and variety of these
            new categories, the winners will be chosen by a panel of 6 industry
            experts, rather than by the traditional metrics used to assess the
            three headline awards.
          </p>
          <br />
          <p>
            This report aims to educate teams and organizations on how to
            improve their China digital strategy, what today's Chinese fans
            want, and what works online in China.
          </p>
        </div>

        {/* White Triangle in the Bottom Right Corner */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            right: 0,
            backgroundColor: "white",
            clipPath: "polygon(100% 0, 0 100%, 100% 100%)",
            width: "100px", // Adjust width for larger triangle
            height: "100px", // Adjust height for larger triangle
          }}
        ></div>
      </div>

      {/* Best Clubs Section */}
      {Array(4)
        .fill()
        .map((_, index) => (
          <div key={index} style={{ padding: "20px", marginLeft: "60px" }}>
            <h2 style={{ fontSize: "50px", color: "#000",fontFamily: "'Libre Franklin', sans-serif",fontWeight: "bold" }}>
              <img
                src={iconAward}
                style={{
                  width: "40px",
                  height: "40px",
                  
                }}
              />
              &nbsp;BEST CLUBS
            </h2>
            <div
              style={{
                display: "flex",
                // justifyContent: "center",
                flexWrap: "wrap",
                gap: "90px",
                padding: "10px 0",
              }}
            >
              {Array(5)
                .fill()
                .map((_, i) => (
                  <div key={i} style={{}}>
                    <img
                      src={one}
                      alt="Club Logo"
                      style={{ width: "160px", height: "160px" }}
                    />
                    <p
                      style={{
                        marginTop: "10px",
                        textAlign: "center",
                        color: "red",
                        fontFamily:'Libre Franklin',
                        fontWeight:'bold'
                      }}
                    >
                      Lorem ipsum<br></br>
                      <p style={{ color: "black" }}>Lorem</p>
                    </p>
                  </div>
                ))}
            </div>
          </div>
        ))}
      <div
        style={{
          backgroundColor: "#8d2b2b", // Red background color
          color: "white",
          fontWeight: "bold",
          padding: "50px",
          paddingLeft:'100px',
          fontSize: "1.5em",
          fontFamily: "bolton",
          position: "relative",
          // width: '400px',
          // height: '100px',
          display: "flex",
          // alignItems: "center",
          // justifyContent: "center",
          // textAlign: "center",
        }}
      >
        <p style={{ fontSize: "50px", fontWeight: "bold", margin: 0 }}>
          RED CARD 2019 WINNERS <br />
          AND REPORT TO BE LAUNCHED <br />
          ON 24TH JANUARY 2019.
        </p>
        <div
          style={{
            position: "absolute",
            bottom: 0,
            right: 0,
            backgroundColor: "white",
            clipPath: "polygon(100% 0, 0 100%, 100% 100%)",
            width: "100px",
            height: "100px",
          }}
        ></div>
      </div>
      <div style={{ height: "10px" }}></div>
    </div>
  );
}

export default TScreenTwo;
