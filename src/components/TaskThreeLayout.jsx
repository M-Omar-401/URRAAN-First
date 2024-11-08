// TaskThreeLayout.jsx
import React from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import TaskThree from "./TaskThree";

const TaskThreeLayout = () => {
  const location = useLocation();

  // Check if we're on the main task3 page or a nested route
  const isMainTaskThree = location.pathname === "/task3";

  return (
    <div>
      {/* Render TaskThree content only if on /task3 path */}
      {isMainTaskThree && <TaskThree />}
      
      {/* Render Outlet for nested routes like screenone */}
      {!isMainTaskThree && <Outlet />}
    </div>
  );
};

export default TaskThreeLayout;
