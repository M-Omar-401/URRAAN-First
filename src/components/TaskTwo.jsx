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
// import './Task.css';
const TaskTwo = () => {
  return (
    <div>
      <section className="first">
        <div className="left">
          <div className="lefttopimage">
            <img className="lefttopimage1" src={logo} alt="logo" />
          </div>

          <div className="text-container">
            <p className="heading">WATCH. COMMUNICATE. CREATE.</p>
            <p className="subheading">Everything you need to socialise</p>
          </div>

          <div className="leftdownimages">
            <img
              className="leftdownimage1"
              src={playstore}
              alt="Play Store"
            />
            <img
              className="leftdownimage2"
              src={appstore}
              alt="App Store"
            />
          </div>
        </div>

        <div className="Right">
          <img className="top_screens" src={topscreen} alt="Top Screens" />
        </div>
      </section>

      <section className="Second">
        <div className="secondleft">
          <img className="secondleft1" src={sectionscreen} alt="Second Screens" />
        </div>
        <div className="secondRight">
          <div className="channel-text">
            <h1 className="channel-title">CHANNELS</h1>
            <p className="channel-description1">
              Enjoy the videos and music you love. <br />
            </p>
            <p className="channel-description2">Create your own business .<br /></p>
            <p className="channel-description3">Or entertainment channel .<br /></p>
          </div>
        </div>
      </section>

      <section className="Third">
        <div className="Thirdleft">
          <div className="msg-text">
            <h1 className="msg-title">MESSAGES</h1>
            <p className="msg-description1">Communicate Seamlessly. <br /></p>
            <p className="msg-description2">Create your own professional .<br /></p>
            <p className="msg-description3">Or social group chat .<br /></p>
          </div>
        </div>

        <div className="ThirdRight">
          <img className="ThirdRightimgage" src={thhscreen} alt="Third Screens" />
        </div>
      </section>

      <section className="Four">
        <div className="fourleft">
          <img className="fourleftimage" src={forscreen} alt="Fourth Screens" />
        </div>
        <div className="fourRight">
          <div className="fourRight1">
            <img className="fourRight1image" src={vector} alt="Vectors" />
          </div>
          <div className="fourRight2">
            <div className="fourRight2container">
              <div className="fourRight2title" style={{marginLeft:'20px'}}>IN FUTURE</div>
              <div className="fourRight2subtitle" style={{fontWeight:'100'}}>
                Communicate seamlessly.<br />Create your own professional <br />
                &nbsp;&nbsp;&nbsp;&nbsp;or social group chat
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="five">
        <div className="fivetextcontainer">
          <p>For download click here:</p>
        </div>
        <div className="fiveimages">
          <img className="fiveimage1" src={playstore} alt="Play Store" />
          <img className="fiveimage2" src={appstore} alt="App Store" />
        </div>
      </section>

      <footer>
        <div className="ftext">
          <p style={{ color: '#2d2d2d' }}>Any questions ? Feel free to &nbsp;</p>
          <p style={{ color: '#4ea5fe' }}>Contact Us</p>
        </div>
        <img className="last" src={paratude} alt="Footer Image" />
      </footer>
    </div>
  );
};

export default TaskTwo;

