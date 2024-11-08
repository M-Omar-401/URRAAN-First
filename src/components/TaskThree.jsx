import React from "react";
import { Link, Outlet } from "react-router-dom";

const TaskThree = () => {
  return (
    <>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '20px',
          justifyContent: 'center',
          padding: '20px',
        }}
      >
        {/* Card for Screen One */}
        <Link to="screenone" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div
            style={{
              width: '300px',
              height: '200px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '20px',
              textAlign: 'center',
              borderRadius: '10px',
              backgroundColor: '#0073e6',
              color: 'white',
              fontFamily: 'cursive',
              fontSize: '18px',
              fontWeight: 'bold',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)',
              cursor: 'pointer',
            }}
          >
            <div>
              <h1>Third Task</h1>
              <h2>Screen One</h2>
              <p>Hello Red!</p>
              <p>Date: 8/11/2024</p>
            </div>
          </div>
        </Link>

        {/* Card for Screen Two */}
        <Link to="screentwo" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div
            style={{
              width: '300px',
              height: '200px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '20px',
              textAlign: 'center',
              borderRadius: '10px',
              backgroundColor: '#28a745',
              color: 'white',
              fontFamily: 'cursive',
              fontSize: '18px',
              fontWeight: 'bold',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)',
              cursor: 'pointer',
            }}
          >
            <div>
              <h1>Third Task</h1>
              <h2>Screen Two</h2>
              <p>Welcome!</p>
              <p>Date: 8/11/2024</p>
            </div>
          </div>
        </Link>
      </div>

      {/* Outlet for rendering nested routes */}
      {/* <Outlet /> */}
    </>
  );
};

export default TaskThree;
