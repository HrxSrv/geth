import React from "react";
import logo from "./getH-logos_black.png";
export default function Navbar() {

    const [isExpanded, setisExpanded] = React.useState(true)
    function navTgl() {
        setisExpanded(!isExpanded)
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
                            <a href="index.html"><img src={logo} alt="Your Logo" /></a>
                        </div>
                        <button className="nav-toggle" onClick={navTgl}>  <i class="fas fa-bars"></i></button>
                    </div>

                    <ul className={isExpanded ? "nav-links" : "show-navbar"}>
                        <li><a href="index.html">Home</a></li>
                        <li><a href="jobs.html">Find Jobs</a></li>
                        <li><a href="post-job.html">Post a Job</a></li>
                        <li><a href="#container ">About Us</a></li>
                    </ul>
                    <div className="user-account">
                        <a href="login.html">Login </a>
                        <a href=" " className="slash">/ </a>
                         <a href="register.html">Register</a>
                    </div>


            </nav>
        </header>
    )
}