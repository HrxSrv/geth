import React, { useEffect, useState, useRef } from "react";
import './userreview.css'
import Select from 'react-select';
import './settings.css'
import logo from "./getH-logos_black.png";
import logo2 from "./component/profile_img.jpg"
import logo3 from "./component/profile-user.png"
import logo4 from "./component/settings.png"
import logo5 from "./component/question.png"
import logo6 from "./component/logout.png"
import logo7 from "./component/arrow-right.png"
import logo13 from "./component/edit.png"
import logo14 from "./component/arrow-down.png"
import logo8 from "./component/clear.png"
import logo9 from "./component/menu-bar.png"
import logof from './component/feedback.png'
import { useLocation, Link } from 'react-router-dom';
import axios from "axios";
import { useData } from './DataContext';
import { UserAuth } from './AuthContext';
import StarRating from './StarRating';
export default function UserReview() {

  const { logOut, user } = UserAuth();
  const { userData, deleteUserData,data,fetchData } = useData();
  const { email, username } = userData;

  const [review, setReview] = useState('');
  useEffect(() => {
    if (username) {
        fetchData();
       }
}, []);
// console.log(data)

let Name =  username ? data ? data.firstname : '':' ';
let name = Name|| "User"

//  console.log(username)
  const handleChange = (event) => {
    const inputValue = event.target.value;
    if (inputValue.length <= 100) {
      setReview(inputValue);
    }
  };
 
  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  const handleReviewSave = async() => {
    try {
      await axios.post('https://geth-ofyh.onrender.com/saveReview', {
        review,
        username,
      });
    } catch (error) {
      console.error('Error saving rating:', error);
    }
  };

  const [isExpanded, setisExpanded] = React.useState(true)
  function navTgl() {
    setisExpanded(!isExpanded)
  }

  const [isExpandedmenu, setisExpandedmenu] = React.useState(false)
  function navTggl() {
    setisExpandedmenu(!isExpandedmenu)
  }

  const [isExpandedimgmenu, setisExpandedimgmenu] = React.useState(false)
  function menuTggl() {
    setisExpandedimgmenu(!isExpandedimgmenu)
  }

  const [isExpandedsidebar, setisExpandedsidebar] = React.useState(false)
  const [isExpandedbtn, setisExpandedbtn] = React.useState(true)
  function sideTggl() {
    setisExpandedsidebar(!isExpandedsidebar)
    setisExpandedbtn(!isExpandedbtn)
  }

  

  return (

    <div className="DIv">
      <header>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css"
        />
        <nav className="navbar">

          <div className="nav-header">
            <div className="logo">
              <img src={logo} alt="Your Logo" />
            </div>
            <button className="nav-toggle" onClick={navTgl}>  <i class="fas fa-bars"></i></button>
          </div>

          <ul className={isExpanded ? "nav-links" : "show-navbar"}>
            <li><a href="/">Home</a></li>
            <li><Link to="/hireworkers" >Hire Workers</Link></li>
            <li><Link to="/contact" >Contact Us</Link></li>
            <div className="user-cred">
              {user !== null ?
                <p >{user?.displayName} </p>
                :
                email === '' ?
                  <div className="user-cred">
                    <Link to="/login" >Login</Link>
                    <a href=" " className="slas">/ </a>
                    <a href="/register">Register</a>
                  </div> :
                  <p > {email}  </p>}
            </div>
          </ul>
          <div className="user-accounT" >
            {user !== null ?
              <div onClick={navTggl}>
                <img src={user !== null ? user?.photoURL : logo2} alt=" " className="Mail-photo" />
              </div>
              :
              email === '' ?
                <div className="user-account">
                  <Link to="/login">Login</Link>
                  <a href=" " className="slas">/ </a>
                  <a href="/register">Register</a>
                </div> :
                <p onClick={navTggl}>{email} </p>}
            <div className={isExpandedmenu && (email !== '' || user !== null) ? "expanded" : "not-expanded"}>
              <div className="profile">
                <img src={user !== null ? user?.photoURL : logo2} alt=" " className="profile-img" />
                {user !== null ? <p >{user?.displayName} </p> : email === '' ? <p> </p> : <p>{email}</p>}
              </div>
              <div id="linE"><p></p></div>
              <div className="profile-1">
                <div className="profile-img-div">
                  <img src={logo3} alt=" " className="profile-img-1" />
                </div>
                <Link to="/userprofile" ><p>Edit Profile</p></Link>
                <img src={logo7} alt=" " className="profile-img-arrow-1" />
              </div>
              <div className="profile-1">
                <div className="profile-img-div">
                  <img src={logo4} alt=" " className="profile-img-1" />
                </div>
                <Link to="/userprofile/settings" ><p>Settings</p></Link>
                <img src={logo7} alt=" " className="profile-img-arrow-2" />
              </div>
              <div className="profile-1">
                <div className="profile-img-div">
                  <img src={logof} alt=" " className="profile-img-1" />
                </div>
                <Link to="/userprofile" ><p>Review</p></Link>
                <img src={logo7} alt=" " className="profile-img-arrow-3" />
              </div>
              <div className="profile-1">
                <div className="profile-img-div">
                  <img src={logo6} alt=" " className="profile-img-1" />
                </div>
                <p onClick={user === null ? deleteUserData : handleSignOut}>Log Out</p>
                <img src={logo7} alt=" " className="profile-img-arrow-4" />
              </div>

            </div>


          </div>


        </nav>
      </header>
      <div className="History">


        <div className="m-p" >

          <div className="PROFILE">
            <h4>Welcome {name}</h4>
            <li><Link to="/userprofile">Profile Information</Link></li>
            <li><Link to="/userprofile/useraddress">Manage Address</Link></li>
            <li><Link to="/userprofile/settings">History</Link></li>
            <li><Link to="/userprofile/review">Review</Link></li>
            <ul>
            </ul>
          </div>
          <div className={isExpandedsidebar ? "PROFILe" : "PROFILe-n"}>
            <div className="name-btn">
              <h4>Welcome {name}</h4>
              <button className="clear" onClick={sideTggl}>
                <img className="clear-img" src={logo8} alt=" " />
              </button>

            </div>


            <li><Link to="/userprofile">Profile Information</Link></li>
            <li><Link to="/userprofile/useraddress">Manage Address</Link></li>
            <li><Link to="/userprofile/settings">History</Link></li>
            <li><Link to="/userprofile/review">Review</Link></li>
            <ul>
            </ul>
          </div>
          <div>
            <button className={isExpandedbtn ? "menu-bar-btn" : "menu-bar-btn-n"} onClick={sideTggl} >
              <img className="menu-bar-img" src={logo9} alt=" " />
            </button>
          </div>
          <div class="MY-pRofile">
            <h2>Review</h2>
            <hr/>
            {
              username?
              <div>
                <textarea className="review-textarea"
                    type="text"
                    value={review}
                    onChange={handleChange}
                    rows={4}
                    cols={50}
                    placeholder="Enter your review (max 100 words)"
                    maxLength={100}
                ></textarea>
                <div>Characters: {review.length}/100</div>
                <button onClick={handleReviewSave}>Add Review</button>
              </div>:
              <p> Please! Login/Signup to add a Review for getH.</p>
            }

          </div> 
          

        </div>
        {/* <div className="p-f">
          <h1>
            .
          </h1>
        </div> */}
      </div>

    </div>

  )


}