import React, { useState, useContext,useEffect }  from "react";
import Img1 from './getH-logos_black.png';
import Img2 from './google.png';
import axios from "axios"
import { useNavigate, Link } from 'react-router-dom';
import { useData } from './DataContext';
import { UserAuth } from './AuthContext';
// import {auth,provider} from "./config";
// import {signInWithPopup} from "firebase/auth";

export default function Login() {
    
    const {setUserData} = useData()
    // const {loginUser} = useData()
   
    const history = useNavigate();
    const history1 = useNavigate();

    const [email, setEmail] = useState(' ')
    const [password, setPassword] = useState(' ')
    const { googleSignIn,user } = UserAuth();
    const navigate = useNavigate();
  
    const handleGoogleSignIn = async () => {
      try {
        await googleSignIn();
      } catch (error) {
        console.log(error);
      }
    };
    useEffect(() => {
        if (user !== null) {
          navigate('/');
        }
      }, [user]);
    // const [valueemail,setValueemail] = useState('')
    // const handleClick =()=>{
       
    //     signInWithPopup(auth,provider).then((data)=>{
    //         setValueemail(data.user.email)
    //         localStorage.setItem("e__mail",data.user.email)
    //     })
    //     console.log(1);
    // }

    // useEffect(()=>{
    //     setValueemail(localStorage.getItem('e__mail'))
    // })
    // console.log(email)
    async function submit(e) {
        e.preventDefault();
        try {
            await axios.post("http://localhost:8000/login", {
                email, password
            })
                .then(res => {
                    
                    if (res.data === "notexist" || res.data==="fail") {
                        alert("Wrong password or username!")
                    }
                    else{
                        history("/", { state: { id: email }})
                        setUserData({ email: res.data.email, password: res.data.password,username:res.data.username });
                        
                        // loginUser(res.data);
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
                    <div className="Btn">
                        <img src={Img2} alt="google_logo" id="glogo" />
                    <p onClick={handleGoogleSignIn} >Sign in with Google</p>   
                    </div>

                    <div id="line"><p className="line-P">or</p></div>
                    <div className="input">
                        <form action="POST">
                            <input type="email" className="other_login_cred" onChange={(e) => { setEmail(e.target.value) }} placeholder="email or username" />
                            <input type="password" className="other_login_cred" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password" />
                            <div className="F-pswd">
                                <p>Forgot Password?</p>
                            </div>
                            <Link to='/'> <button type="submit" id="btn3" onClick={submit}>Submit</button></Link>
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

