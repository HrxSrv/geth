import React from "react";
import Img1 from './getH-logos_black.png';
import Img2 from './google.png';

import { Link } from 'react-router-dom';
export default function Login() {
    return (
        <div>
            <div className="Box">
                <div className="head">
                    <Link to="/"> <button id='close'>close</button></Link>
                    <img src={Img1} alt="twiter_logo" id="logo" />
                </div>
                <div className="bodywrap">
                    <div id="Sign">
                        <h1>Sign in to getH</h1>
                    </div>
                    <a href=" " className="Btn">
                        <img src={Img2} alt="google_logo" id="glogo" />
                        <p>Sign in with Google</p>
                    </a>

                    <div id="line"><p>or</p></div>
                    <div className="input">
                        <form action=" ">
                            <input type="text" className="other_login_cred" name="other_login_cred" placeholder="Phone,email or username" />
                            <input type="password" className="other_login_cred" name="other_login_cred" placeholder="Password" />
                            <div className="F-pswd">
                                <p>Forgot Password?</p>
                            </div>
                         <Link to="/account"> <button type="submit" id="btn3">Submit</button></Link> 

                        </form>


                        <div id="line-2"><p></p></div>
                    </div>
                    <div className="P">
                        Don't have an Account?<Link to="/register"> <div className="Registr"> Register</div> </Link>
                    </div>
                </div>
            </div>
        </div>
    )

}