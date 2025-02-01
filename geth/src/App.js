import React, { useRef } from "react";
import { HashRouter, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import './App.css';
import Navbar from "./Navbar";
import Body from "./Body";
import WorkerSection from "./WorkerSection";
import Footer from "./Footer";
import './aboutus.css';
import AboutUs from "./AboutUs";
import Reviews from "./Reviews";
import './reviews.css';
import UserProfile from "./UserProfile";
import Useraddress from "./Useraddress";
import Login from "./Login";
import Register from "./Register";
import Account from "./Account";
import Setting from "./Setting";
import Contact from "./Contact";
import Hireworker from "./Hireworker";
import UserReview from "./UserReview";
import { DataProvider } from './DataContext';
import { AuthContextProvider } from './AuthContext';
import CustomInput from './CustomInput';
import PaymentSuccess from "./paymentSuccess";

function App() {
  const elementToScroll = useRef(null);
  const queryClient = new QueryClient();

  const scrollToElement = () => {
    if (elementToScroll.current) {
      elementToScroll.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <DataProvider>
          <AuthContextProvider>
            <HashRouter>

              <Routes>
                <Route path="/login" element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='/account' element={<Account />} />
                <Route path='/userprofile/settings' element={
                  <div className="footer-container">
                    <Setting />
                    <Footer />
                  </div>} />
                <Route path='/userprofile/review' element={
                  <div className="footer-container">
                    <UserReview />
                    <Footer />
                  </div>} />
                <Route path='/userprofile' element={
                  <div>
                    <UserProfile />
                    <Footer />
                  </div>} />
                <Route path='/userprofile/useraddress' element={
                  <div>
                    <Useraddress />
                    <Footer />
                  </div>} />
                <Route path='/hireworkers' element={
                  <div className="hire-container">
                    <Navbar />
                    <Hireworker />
                    <Footer />
                  </div>} />
                <Route path='/contact' element={
                  <div>
                    <Navbar />
                    <Contact />
                    <Footer />
                  </div>} />
                <Route path='/paymentsuccess' element={<PaymentSuccess />} />
                <Route path="/" element={
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

            </HashRouter>
          </AuthContextProvider>
        </DataProvider>
      </QueryClientProvider>
    </div>
  );
}

export default App;
