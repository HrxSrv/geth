import React from "react";
import logo from "./getH-logos_black.png";
import { Link } from 'react-router-dom';
export default function Navbar() {

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
                    <li><a href="#container ">About Us</a></li>
                    <div className="user-cred">
                        <a href="/login " className="user-cred-l">Login</a>
                        <a href=" " className="slas">/</a>
                        <a href="/register">Register</a>
                    </div>
                </ul>
                <div className="user-account">
                    <Link to="/login">Login</Link>
                    <a href=" " className="slash">/ </a>
                    <a href="/register">Register</a>
                </div>


            </nav>
        </header>
    )
}