import React , { useRef } from "react"
import './App.css'
import Navbar from "./Navbar"
import Body from "./Body"
import WorkerSection from "./WorkerSection";
import Footer from "./Footer";
import './aboutus.css'
import AboutUs from "./AboutUs";
import Reviews from "./Reviews";
import './reviews.css';
function App() {
  
  const elementToScroll = useRef(null);

  // Function to scroll to the element
  const scrollToElement = () => {
    if (elementToScroll.current) {
      elementToScroll.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div className="App">
     
      
        <Navbar scrollToElement={scrollToElement}/>
        <Body/>
        <WorkerSection/>
        <AboutUs elementToScroll={elementToScroll}/>
        <Reviews/>
        <Footer/>

    </div>
  );
}

export default App;