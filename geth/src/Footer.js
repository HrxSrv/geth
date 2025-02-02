import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {

    return (
        <div>
            <footer>
                <div class="Contact-info">
                    <p>Contact Us: geth@hireworkers.com</p>
                </div>
                <div class="footer-links">
                    <a href=" ">About Us</a>
                    <a href=" ">FAQ</a>
                    <a href=" ">Privacy Policy</a>
                    <Link to={"/yadav-manthan"}>
                        Yadav-Manthan
                    </Link>
                </div>
                {/* <div class="social-media-icons">
                </div> */}
                <p>&copy; 2023 Hire Workers</p>
            </footer>
        </div>
    )
}