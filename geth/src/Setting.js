import React, { useEffect, useState, useRef } from "react";
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
import star from "./component/star.png"
import star2 from "./component/star2.png"
import star5 from "./component/star5.png"
import star6 from "./component/star6.png"
import star7 from "./component/star7.png"
import logoup from "./component/arrow-up.png"
import logodown from "./component/down-arrow.png"
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import { useLocation, Link } from 'react-router-dom';
import axios from "axios";
import { useData } from './DataContext';
import { UserAuth } from './AuthContext';
import StarRating from './StarRating';
export default function UserProfile() {

  const { logOut, user } = UserAuth();
  const { userData, deleteUserData,data, fetchData } = useData();
  const { email, username } = userData;
  const [selectedRating, setSelectedRating] = useState(null);

  useEffect(() => {
    if (username) {
        fetchData();
       }
}, []);
// console.log(data)

let image = username? data ? data.image : '' : '';
let Name =  username ? data ? data.firstname : '':' ';
let imagepath = image || 'default.jpg'
imagepath = process.env.PUBLIC_URL + '/upload/' + imagepath

let name = Name || "User"

  const handleStarClick = (rating) => {
    setSelectedRating(rating);
  };
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      const filled = i <= selectedRating;
      stars.push(
        <img
          key={i}
          src={filled ? star2 : star7}
          alt={filled ? 'filled star' : 'empty star'}
          onClick={() => handleStarClick(i)}
          className="rating-star"
        />
      );
    }
    return stars;
  };
  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  const [userHiring, setUsersHiring] = useState([]);
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:8000/history',
          { params: { username }, });
        setUsersHiring(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

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

  const UserHistoryContainer = ({ user, index }) => {
    // {console.log(user)}
    const [workerDetails, setWorkerDetails] = useState(null);
    const dateObject = new Date(user.HireDate);
    const [isExpandedrating, setisExpandedrating] = useState(false);

    const divTgl = () => {
      setisExpandedrating(!isExpandedrating);
    };
    const [currentRating, setCurrentRating] = useState(null);

    const handleRatingSave = async(workerId,rating) => {
      try {
        await axios.post('http://localhost:8000/saveRating', {
          rating,
          workerId,
          username,
        });
        // console.log(`Saved rating ${rating} for user ${workerId}`);
        setCurrentRating(rating);
        divTgl(); 
      } catch (error) {
        console.error('Error saving rating:', error);
      }
    };

    const formattedDate = dateObject.toLocaleDateString('en-US', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    });

    useEffect(() => {
      const fetchWorkerDetails = async () => {
        try {
          const response = await axios.get(`http://localhost:8000/worker/${user.workerid}`);
          setWorkerDetails(response.data);
        } catch (error) {
          console.error('Error fetching worker details:', error);
        }
      };
      // console.log(user.workerid)
      fetchWorkerDetails();
    }, [user.workerid]);
    return (

      <div className="My-5 grid-container">
        <div className="grid-item">
          <img src={logo13} alt=" " className="history-img" />
        </div>
        <div className="grid-item">
          <p>{!workerDetails ? "Gaurav" : workerDetails.name}</p>
          <span>{!workerDetails ? "Gaurav" : workerDetails.occupation}</span>
        </div>
        <div className="grid-item">
          <span>{!workerDetails ? "Gaurav" : workerDetails.wage}</span>
        </div>
        <div className="grid-item">
          <span>Booked on {formattedDate}</span>

          <div className="Rating">
            <div className="filters">

              {!isExpandedrating ? (
                <p><button onClick={divTgl}>Rate</button></p>
              ) : (
                <StarRating onSave={handleRatingSave} initialRating={currentRating} workerId={user.workerid} onClose={divTgl} />
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }

  const renderUserhistory = () => {
    return userHiring.map((user, index) => (
      <UserHistoryContainer key={index} user={user} index={index} />
    ));
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
                <img src={user !== null ? user?.photoURL : imagepath} alt=" " className="profile-img" />
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
                <Link to="/userprofile/review" ><p>Review</p></Link>
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
            <li>History</li>
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
            <li>History</li>
            <li><Link to="/userprofile/review">Review</Link></li>
            <ul>
            </ul>
          </div>
          <div>
            <button className={isExpandedbtn ? "menu-bar-btn" : "menu-bar-btn-n"} onClick={sideTggl} >
              <img className="menu-bar-img" src={logo9} alt=" " />
            </button>
          </div>
          <div class="MY-profile">
            <h3>History</h3>
            <hr />
            {username ? !userHiring.length ? <p> You hired no Household helper from getH </p> : renderUserhistory():
             <p> Please Login to getH to see your hired Household helper</p> 
             }
          </div>

        </div>
        <div className="p-f">
          <h1>
            .
          </h1>
        </div>
      </div>

    </div>

  )


}