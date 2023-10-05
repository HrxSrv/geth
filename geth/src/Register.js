import React,{useState} from "react";
import Img1 from './getH-logos_black.png';
import Img2 from './google.png';
import axios from "axios"
import {useNavigate, Link } from 'react-router-dom';
export default function Register()
{

    const history = useNavigate();
    const [email,setEmail] = useState(' ')
    const [password,setPassword] = useState(' ')

    async function submit(e){
        e.preventDefault();
         
        try{
            await axios.post("http://localhost:8000/login",{
                email,password
            })
            .then(res=>{
                if(res.data==="exist"){
                    alert("User already exists")
                }
                else if(res.data==="notexist"){
                    history("/",{state:{id:email}})
                }
            })
            .catch(e=>{
                alert("wrong details")
                console.log(e);
            })
        }
         catch(e){
            console.log(e);
    
         }
       }

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
                        <input type="email" className="other_login_cred" onChange={(e)=>{setEmail(e.target.value)}} placeholder="Phone or email."/>
                        <input type="password" className="other_login_cred" onChange={(e)=>{setPassword(e.target.value)}} placeholder="Password."/>
                        <Link to="/account"> <button type="submit" id="btn3"  onClick={submit}>Submit</button></Link> 
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