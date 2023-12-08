import React, { useState } from "react";
import logo from "./getH-logos_black.png";
import logo2 from "./component/profile_img.jpg"
import logo3 from "./component/profile-user.png"
import logo4 from "./component/settings.png"
import logo5 from "./component/question.png"
import logo6 from "./component/logout.png"
import logo7 from "./component/arrow-right.png"
import './navbar.css'
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { UserAuth } from './AuthContext';
import { useData } from './DataContext';
function Navbar({ scrollToElement }) {

    const { logOut, user } = UserAuth();
    // console.log(user)
    const location = useLocation()
    const handleSignOut = async () => {
        try {
            await logOut();
        } catch (error) {
            console.log(error);
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
    const { userData,deleteUserData } = useData();
    console.log(userData)
    const { email, password } = userData;
    //   console.log(userData)
    //   console.log(!(email))
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
                    <li><Link to="/hireworkers" >Hire Workers</Link></li>
                    <li><p onClick={scrollToElement}>About Us</p></li>
                    <li><Link to="/contact" >Contact Us</Link></li>
                    <div className="user-cred">
                        {user !== null ?
                        <p >{user?.displayName} </p>
                        :
                       email===''?
                            <div className="user-account-1">
                                <Link to="/login" className="user-account-1-L">Login</Link>
                                <a href=" " className="slas">/ </a>
                                <Link to="/register">Register</Link>
                            </div> :
                            <p > {email}  </p>}
                    </div>
                </ul>
                <div className="user-accounT" >
                    {user !== null ?
                        <div  onClick={navTggl}> 
                            <img  src={user!==null ? user?.photoURL : logo2} alt=" " className="Mail-photo"/>
                        </div>     
                        :
                         email===''  ?
                            <div className="user-account">
                                <Link to="/login">Login</Link>
                                <a href=" " className="slash">/ </a>
                                <Link to="/register">Register</Link>
                            </div> :
                            <p onClick={navTggl}>{ email } </p>}
                    <div className={isExpandedmenu && (email!=='' || user !== null) ? "expanded" : "not-expanded"}>
                        <div className="profile">
                            <img src={user!==null ? user?.photoURL : logo2 } alt=" " className="profile-img" />
                            {user !== null ? <p >{user?.displayName} </p>:email==='' ? <p> </p> : <p>{email}</p>}
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
                                <img src={logo5} alt=" " className="profile-img-1" />
                            </div>
                            <Link to="/userprofile" ><p>Help & Support</p></Link>
                            <img src={logo7} alt=" " className="profile-img-arrow-3" />
                        </div>
                        <div className="profile-1">
                            <div className="profile-img-div">
                                <img src={logo6} alt=" " className="profile-img-1" />
                            </div>
                            <p className="log-out" onClick={user===null ? deleteUserData:handleSignOut}>Log Out</p>
                            <img src={logo7} alt=" " className="profile-img-arrow-4" />
                        </div>

                    </div>


                </div>


            </nav>
        </header>
    )
}
export default Navbar