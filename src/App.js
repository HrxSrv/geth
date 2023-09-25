import React from "react"
import './App.css'
import Navbar from "./Navbar"
import Body from "./Body"
import WorkerSection from "./WorkerSection";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
     < Navbar/>
     <Body/>
     <WorkerSection/>
     <Footer/>
    </div>
  );
}

export default App;
