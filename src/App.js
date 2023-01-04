
import React from 'react';


import Navbar from './components/Navbar';
import About from "./components/About/About";
import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer";


import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';



function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
