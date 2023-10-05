import React, { useState } from "react";
import Img1 from './getH-logos_black.png';
import Img2 from './google.png';
import axios from "axios"
import { useNavigate, Link } from 'react-router-dom';
export default function Login() {


    const history = useNavigate();

    const [email, setEmail] = useState(' ')
    const [password, setPassword] = useState(' ')

    async function submit(e) {
        e.preventDefault();

        try {
            await axios.post("http://localhost:8000/login", {
                email, password
            })
                .then(res => {
                    if (res.data === "exist") {
                        history("/account", { state: { id: email } })
                    }
                    else if (res.data === "notexist") {
                        alert("User have not sign up")
                    }
                })
                .catch(e => {
                    alert("wrong details")
                    console.log(e);
                })
        }
        catch (e) {
            console.log(e);

        }
    }
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
                        <form action="POST">
                            <input type="email" className="other_login_cred" onChange={(e) => { setEmail(e.target.value) }} placeholder="Phone,email or username" />
                            <input type="password" className="other_login_cred" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password" />
                            <div className="F-pswd">
                                <p>Forgot Password?</p>
                            </div>
                            <Link to="/account"> <button type="submit" id="btn3" onClick={submit}>Submit</button></Link>

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