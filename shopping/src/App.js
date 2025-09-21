import './App.css';
import React from 'react';
import Homepage from './pages/homepage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const HatsPage = () => (<div>
  <h1>Hats Page</h1>
</div>
);

function App() {
  return (
    <div>

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/hats" element={<HatsPage />} />            
      </Routes>

    </div>
  );
}

export default App;
