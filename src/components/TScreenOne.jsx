import React from "react";
import "./TScreenOne.css";
import logoTaskThree from "../assets/TaskThree/logo.png";
import tri from '../assets/TaskThree/icon_awards.png'
const TSceenOne = () => {
  return (
    <>
      <div style={{ height: "150px" }}>
        <img
          src={logoTaskThree}
          style={{
            width: "100px",
            height: "100px",
            marginTop: "30px",
            marginLeft: "30px",
            // backgroundColor:'white'
          }}
        />
      </div>
      <div className="task-three-container">
        {/* Left side content */}
        <div className="left-content">
          <h1 style={{fontSize:'80px'}}>Submission</h1>
          <p>
            All details of submissions will be kept strictly private and
            confidential by Mailman and will not be used for any purpose other
            than judging Red Card 2018 winners.
            <input type="checkbox" style={{marginLeft:'320px',marginTop:'10px'}}/>
          </p>
          
          <h3 style={{fontSize:"30px",color:'black',marginTop:'2px'}}>Applications will close on the<br></br> 15th December 2017.
          <input type="checkbox" name="" id="" style={{marginLeft:'150px', position:"absolute", }}/>
          </h3>
        </div>

        {/* Right side form */}
        <div className="right-form">
          <form>
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email Address" required />
            <input type="text" placeholder="Organisation" required />

            <h2 style={{color:'black',fontWeight:"bold"}}>Which Award</h2>
            <p style={{fontSize:'12.5px',marginTop:'10px'}}>
              (Please tick and provide details for all of the awards
              like to be nominated for)
            </p>

            <div className="award-item">
              <div style={{ display: "flex", flexDirection: "row" }}>
                <input
                  type="checkbox"
                  id="bestTourCampaign"
                  className="custom-checkbox"
                />
                <label htmlFor="bestTourCampaign">Best Tour Campaign</label>
                <button id="bestTourCampaign" style={{width:'15px'}}>+</button>
              </div>
              <textarea placeholder="Description & Results (max. 150 words)"></textarea>
            </div>

            <div className="award-item">
              <div style={{ display: "flex", flexDirection: "row" }}>
                <input
                  type="checkbox"
                  id="bestTourCampaign"
                  className="custom-checkbox"
                />

                <label htmlFor="bestTourCampaign">Best Tour Campaign</label>
                <button id="bestTourCampaign" style={{width:'15px'}}>+</button>
              </div>
              <textarea placeholder="Description & Results (max. 150 words)"></textarea>
            </div>
            <div className="award-item">
              <div style={{ display: "flex", flexDirection: "row" }}>
                <input
                  type="checkbox"
                  id="bestTourCampaign"
                  className="custom-checkbox"
                />

                <label htmlFor="bestTourCampaign">Best Tour Campaign</label>
                <button id="bestTourCampaign" style={{width:'15px'}}>+</button>
              </div>
              <textarea placeholder="Description & Results (max. 150 words)"></textarea>
            </div>
            <div className="award-item">
              <div style={{ display: "flex", flexDirection: "row" }}>
                <input
                  type="checkbox"
                  id="bestTourCampaign"
                  className="custom-checkbox"
                />

                <label htmlFor="bestTourCampaign">Best Tour Campaign</label>
                <button id="bestTourCampaign" style={{width:'15px'}}>+</button>
              </div>
              <textarea placeholder="Description & Results (max. 150 words)"></textarea>
            </div>
            <div className="award-item">
              <div style={{ display: "flex", flexDirection: "row" }}>
                <input
                  type="checkbox"
                  id="bestTourCampaign"
                  className="custom-checkbox"
                />

                <label htmlFor="bestTourCampaign">Best Tour Campaign</label>
                <button id="bestTourCampaign" style={{width:'15px'}}>+</button>
              </div>
              <textarea placeholder="Description & Results (max. 150 words)"></textarea>
            </div>

            <button type="submit" style={{fontSize:'30px',color:'black'}}> ✔ Submission Successful</button>
          </form>
        </div>
      </div>
      <div style={{height:'10px',backgroundColor:'white'}}>

      </div>
    </>
  );
};

export default TSceenOne;
