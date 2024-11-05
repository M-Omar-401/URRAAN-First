import { useState } from 'react'
import FirstTask from './components/FirstTask'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import TaskTwo from './components/TaskTwo';
import Home from './components/Home';
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/task1" element={<FirstTask />} />
        <Route path="/task2" element={<TaskTwo/>} />
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
      {/* <FirstTask/> */}


    </div>
  )
}

export default App
