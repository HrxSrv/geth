import React from "react";
import './Account.css';
import logo from "./getH-logos_black.png";
import logo2 from "./component/profile_img.jpg"
import logo3 from "./component/profile-user.png"
import logo4 from "./component/settings.png"
import logo5 from "./component/question.png"
import logo6 from "./component/logout.png"
import logo7 from "./component/arrow-right.png"
export default function Account() {
    const [isExpanded, setisExpanded] = React.useState(false)
    function navTgl() {
        setisExpanded(!isExpanded)
    }
    return (
        <header>
            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css"
            />
            <nav className="navbaR">

                <div className="nav-headeR">
                    <div className="logO">
                        <img src={logo} alt="Your Logo" />
                    </div>
                    <button className="nav-togglE" >  <i class="fas fa-bars"></i></button>
                </div>

                <ul className="show-navbaR">
                    <li><a href="/">Home</a></li>
                    <li><a href=" ">Find Jobs</a></li>
                    <li><a href=" ">Post a Job</a></li>
                    <li><a href="#containeR ">About Us</a></li>
                    <div className="user-creD">
                        <a href="/registeR">Account</a>
                    </div>
                </ul>
                <div className="user-accounT">
                    <p onClick={navTgl}>Account</p>
                    <div className={isExpanded ? "expanded" : "not-expanded"}>
                        <div className="profile">
                            <img src={logo2} alt=" " className="profile-img" />
                            <p>Gaurav Upadhyay</p>
                        </div>
                        <div id="linE"><p></p></div>
                        <div className="profile-1">
                            <div className="profile-img-div">
                                <img src={logo3} alt=" " className="profile-img-1" />
                            </div>
                            <p>Edit Profile</p>
                            <img src={logo7} alt=" " className="profile-img-arrow-1" />
                        </div>
                        <div className="profile-1">
                            <div className="profile-img-div">
                                <img src={logo4} alt=" " className="profile-img-1" />
                            </div>
                            <p>settings</p>
                            <img src={logo7} alt=" " className="profile-img-arrow-2" />
                        </div>
                        <div className="profile-1">
                            <div className="profile-img-div">
                                <img src={logo5} alt=" " className="profile-img-1" />
                            </div>
                            <p>Help & Support</p>
                            <img src={logo7} alt=" " className="profile-img-arrow-3" />
                        </div>
                        <div className="profile-1">
                            <div className="profile-img-div">
                                <img src={logo6} alt=" " className="profile-img-1" />
                            </div>
                            <p>Log out</p>
                            <img src={logo7} alt=" " className="profile-img-arrow-4" />
                        </div>

                    </div>

                </div>
            </nav>


        </header>
    )
}