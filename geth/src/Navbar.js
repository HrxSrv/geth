import React from "react";
import logo from "./getH-logos_black.png";
import logo2 from "./component/profile_img.jpg"
import logo3 from "./component/profile-user.png"
import logo4 from "./component/settings.png"
import logo5 from "./component/question.png"
import logo6 from "./component/logout.png"
import logo7 from "./component/arrow-right.png"
import './navbar.css'
import { useLocation, useNavigate,  Link } from 'react-router-dom';

function Navbar({scrollToElement} ) {

     
    const location = useLocation()
  //  console.log(location)
    const [isExpanded, setisExpanded] = React.useState(true)
    function navTgl() {
        setisExpanded(!isExpanded)
    }

    const [isExpandedmenu, setisExpandedmenu] = React.useState(false)
    function navTggl() {
        setisExpandedmenu(!isExpandedmenu)
    }
    return (
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
                    <li><a href=" ">Find Jobs</a></li>
                    <li><a href=" ">Post a Job</a></li>
                    <li><p onClick={scrollToElement}>About Us</p></li>
                    <div className="user-cred">
                    {location.state === null ?
                    <div >
                        <Link to="/login">Login</Link>
                        <a href=" " className="slash">/ </a>
                        <a href="/register">Register</a>
                    </div> 
                   : 
                    <p  >{location.state.id} </p>}
                    </div>
                </ul>
                <div className="user-accounT" >
                    {location.state === null ?
                    <div className="user-account">
                        <Link to="/login">Login</Link>
                        <a href=" " className="slash">/ </a>
                        <a href="/register">Register</a>
                    </div> 
                   : 
                    <p onClick={navTggl}>{location.state.id} </p>}
                     <div className={isExpandedmenu ? "expanded" : "not-expanded"}>
                        <div className="profile">
                            <img src={logo2} alt=" " className="profile-img" />
                            {location.state==null ?<p>Gaurav Upadhyay</p>:<p>{location.state.id}</p> }   
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
                            <Link to="/userprofile" ><p>Settings</p></Link> 
                            <img src={logo7} alt=" " className="profile-img-arrow-2" />
                        </div>
                        <div className="profile-1">
                            <div className="profile-img-div">
                                <img src={logo5} alt=" " className="profile-img-1" />
                            </div>
                            <Link to="/userprofile" ><p>Help & Support</p></Link> 
                            <img src={logo7} alt=" " className="profile-img-arrow-3" />
                        </div>
                        <div className="profile-1">
                            <div className="profile-img-div">
                                <img src={logo6} alt=" " className="profile-img-1" />
                            </div>
                            <Link to="/userprofile" ><p>Log Out</p></Link> 
                            <img src={logo7} alt=" " className="profile-img-arrow-4" />
                        </div>

                    </div>


                </div>


            </nav>
        </header>
    )
}
export default Navbar