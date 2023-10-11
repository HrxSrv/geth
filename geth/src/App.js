import React, { useRef } from "react"
import './App.css'
import Navbar from "./Navbar"
import Body from "./Body"
import WorkerSection from "./WorkerSection";
import Footer from "./Footer";
import './aboutus.css'
import AboutUs from "./AboutUs";
import Reviews from "./Reviews";
import './reviews.css';
import UserProfile from "./UserProfile"
import Useraddress from "./Useraddress"
import Login from "./Login";
import Regsiter from "./Register"
import Account from "./Account"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useLocation,  Link } from 'react-router-dom';
import { DataProvider } from './DataContext';
import CustomInput from './CustomInput';
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
     <DataProvider>
      <Router>
      
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path='/register' element={<Regsiter />} />
          <Route exact path='/account' element={<Account />} />
          <Route exact path='/userprofile' element={
          <div>
            <UserProfile />
            <Footer />
            </div>} />
            <Route exact path='/userprofile/useraddress' element={
          <div>
            <Useraddress />
            <Footer />
            </div>} />
          <Route exact path="/" element={
          <div>
            <Navbar scrollToElement={scrollToElement} />
            <Body />
            <WorkerSection />
            <AboutUs elementToScroll={elementToScroll} />
            <Reviews />
            <Footer />
            </div>
          } />
        </Routes>
     
      </Router>
      </DataProvider>
    </div>
  );
}

export default App;