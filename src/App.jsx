import React from "react";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import FirstTask from "./components/FirstTask";
import TaskTwo from "./components/TaskTwo";
import TaskThreeLayout from "./components/TaskThreeLayout";
import TaskThree from "./components/TaskThree";
import TSceenOne from "./components/TScreenOne";
import TSceenTwo from "./components/TScreenTwo";

function App() {
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://use.typekit.net/your-kit-id.css';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/task1" element={<FirstTask />} />
      <Route path="/task2" element={<TaskTwo />} />

      {/* TaskThreeLayout to manage TaskThree and its nested screens */}
      <Route path="/task3" element={<TaskThreeLayout />}>
        <Route index element={<TaskThree />} />
        <Route path="screenone" element={<TSceenOne />} />
        <Route path="screentwo" element={<TSceenTwo />} />
      </Route>
    </Routes>
  );
}

export default App;
