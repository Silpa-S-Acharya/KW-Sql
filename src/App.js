// App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import Login from './routes/Login';

function App() {
  return (
    <div>
      
      <Routes>
        <Route path="/" default element={<Login />} />
        <Route path="/home" element={<Home />} />
        </Routes>
    </div>
  );
}

export default App;
