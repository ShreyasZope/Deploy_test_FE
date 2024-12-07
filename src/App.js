import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import necessary components
import Signup from './components/signup';
import Home from './components/Home';
import './App.css';



function App() {
  return (
    <Router> {/* Wrap your app with the Router */}
      <div className="App">
        <Routes>
          <Route path="/signup" element={<Signup />} /> {/* Define a route for the Signup component */}
        </Routes>
        <Routes>
          <Route path="/" element={<Home />} /> {/* Define a route for the Signup component */}
        </Routes>
      </div>
    </Router>

    
    
  );
}


export default App;

