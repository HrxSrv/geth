import React from "react";
import Img1 from './getH-logos_black.png';
import Img2 from './google.png';
import { Link } from 'react-router-dom';
export default function Register()
{
    return(
        <div>
           <div className="Box">
            <div className="head">
               <Link to= "/"> <button id='close'>close</button></Link>
                <img src={Img1} alt="twiter_logo" id="logo"/>
            </div>
           <div className="bodywrap">
                   <div id="Sign">
                       <h1>Register to getH</h1>
                   </div>
                   <a href=" " className="Btn-R">
                       <img src={Img2} alt="google_logo" id="glogo"/>
                       <p>Register with Google</p>
                   </a>
                   <div id="line"><p>or</p></div>
                   <div className="input">
                    <form action=" ">
                        <input type="text" className="other_login_cred" name="other_login_cred" placeholder="Phone or email."/>
                        <input type="text" className="other_login_cred" name="other_login_cred" placeholder="Password."/>
                        <button type="submit" id="btn3">Submit</button>
                    </form>
                    <div id="line-2"><p></p></div>
                   </div>
                   <div className="P">
                    Already have an Account.<Link to ="/login"> <div className="Registr"> Sign in</div> </Link> 
                   </div>
           </div>
        </div>
        </div>
    )
    
}