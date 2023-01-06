
import React, { useEffect, useState } from 'react';


import Navbar from './components/Navbar';
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Resume from "./components/Resume/Resume";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer";


import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  //useEffect(()=>{document.location= "/about"},[]); //loading after loading
  // function loadabout () {
  //   document.location="/about";
  // };
  // window.addEventListener("load", loadabout);

  //const [currentPage, setCurrentPage] = useState('Home');

  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path="/" exact element={<About/>} />
          <Route path="/React-Portfolio/" exact element={<About/>} />
          <Route path="/React-Portfolio/projects" element={<Projects/>} />
          <Route path="/React-Portfolio/Resume" element={<Resume/>} />
          <Route path="/React-Portfolio/contact" element={<Contact/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );



}




export default App;
