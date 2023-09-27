import React from "react"
import './App.css'
import Navbar from "./Navbar"
import Body from "./Body"
import WorkerSection from "./WorkerSection";
import Footer from "./Footer";
import './aboutus.css'
import AboutUs from "./AboutUs";
import Reviews from "./Reviews";
import './reviews.css'
function App() {
  return (
    <div className="App">
     <Navbar/>
     <Body/>
     <WorkerSection/>
     <AboutUs/>
     <Reviews/>
     <Footer/>
    </div>
  );
}

export default App;
