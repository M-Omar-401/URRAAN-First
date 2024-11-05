// App.js
import React from "react";
import "./Task.css";
import logo from '../assets/logo.png'
import playstore from '../assets/play_store.png'
import appstore from '../assets/app_store.png'
import topscreen from '../assets/top_screens.png'
import sectionscreen from '../assets/sec_screens.png'
import forscreen from '../assets/for_screens.png'
import vector from '../assets/vectors.png'
import paratude from '../assets/peratude.png'
import thhscreen from '../assets/thhh_screens.png'
function TaskTwo() {
  return (
    <div>
      <div className="grid-container">
        <div className="left-container">
          <div className="left-item1"></div>
          <div className="left-item2">
            <img src={logo} />
          </div>
          <div className="left-item3">
            <h1 className="MainFont">
              WATCH. COMMUNICATE. CREATE.
              <p
                style={{
                  color: "rgb(144, 137, 137)",
                  fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif",
                  marginLeft: "50px",
                  letterSpacing: "2px",
                }}
              >
                Everything you need to socialise
              </p>
            </h1>
          </div>
          <div className="left-item4">
            <img
              src={playstore}
              style={{ width: "230px", height: "100px", marginLeft: "100px" }}
              alt="Play Store"
            />
            <img
              src={appstore}
              style={{ width: "230px", height: "100px", marginLeft: "10px" }}
              alt="App Store"
            />
          </div>
        </div>

        {/* Right grid item */}
        <div className="right-item">
          <img
            src={topscreen}
            style={{ width: "600px", height: "550px" }}
            alt="Top Screens"
          />
        </div>
      </div>

      <div className="grid-container2">
        <div className="column1">
          <img
            src={sectionscreen}
            style={{ width: "600px", height: "650px" }}
            alt="Second Screens"
          />
        </div>
        <div className="column2">
          <h1
            style={{
              fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif",
              letterSpacing: "7px",
            }}
          >
            CHANNELS
            <p
              style={{
                color: "rgb(108, 104, 104)",
                fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif",
                fontWeight: "100",
                letterSpacing: "2px",
                marginTop: "3%",
              }}
            >
              Enjoy the videos and music you love.<br />
              Create your own business<br />
              or entertainment channel.
            </p>
          </h1>
        </div>
      </div>

      <div className="grid-container3">
        <div className="column3">
          <h1
            style={{
              fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif",
              letterSpacing: "7px",
            }}
          >
            MESSAGES
            <p
              style={{
                color: "rgb(108, 104, 104)",
                fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif",
                fontWeight: "100",
                letterSpacing: "2px",
                marginTop: "3%",
              }}
            >
              Communicate seamlessly.<br />
              Create your own professional<br />
              or social group chat.
            </p>
          </h1>
        </div>
        <div className="column4">
          <img
            src={thhscreen}
            style={{ width: "600px", height: "650px" }}
            alt="Third Screens"
          />
        </div>
      </div>

      <div className="grid-container4">
        <div className="column5">
          <img
            src={forscreen}
            style={{ width: "600px", height: "650px" }}
            alt="Fourth Screens"
          />
        </div>

        <div className="column6">
          <div className="row1">
            <img
              src={vector}
              style={{ width: "500px", height: "90px" }}
              alt="Vectors"
            />
          </div>
          <div className="row2">
            <h1
              style={{
                fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif",
                letterSpacing: "7px",
              }}
            >
              IN FUTURE
              <p
                style={{
                  color: "rgb(108, 104, 104)",
                  fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif",
                  fontWeight: "100",
                  letterSpacing: "2px",
                  marginTop: "3%",
                }}
              >
                Communicate seamlessly.<br />
                Create your own professional<br />
                or social group chat.
              </p>
            </h1>
          </div>
        </div>
      </div>

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" style={{ marginBottom: "0px" }}>
        <path
          fill="#f3f4f9"
          fillOpacity="1"
          d="M0,224L60,229.3C120,235,240,245,360,229.3C480,213,600,171,720,149.3C840,128,960,128,1080,117.3C1200,107,1320,85,1380,74.7L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg>

      <div className="grid-container5" style={{ backgroundColor: "#f3f4f9", marginTop: "0" }}>
        <h1
          style={{
            textAlign: "center",
            fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif",
            letterSpacing: "2px",
          }}
        >
          for download click here:
        </h1>

        <div className="left-item5">
          <img
            src={playstore}
            style={{ width: "300px", height: "100px", marginLeft: "330px" }}
            alt="Play Store Download"
          />
          <img
            src={appstore}
            style={{ width: "300px", height: "100px", marginLeft: "20px" }}
            alt="App Store Download"
          />
        </div>

        <h1
          style={{
            textAlign: "center",
            fontSize: "30px",
            fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif",
            letterSpacing: "1px",
          }}
        >
          Any questions? Feel free to{" "}
          <span style={{ color: "rgb(93, 175, 242)" }}>CONTACT US</span>
        </h1>
        <div style={{ textAlign: "center" }}>
          <img src={paratude} alt="Contact" />
        </div>
      </div>
    </div>
  );
}

export default TaskTwo;
