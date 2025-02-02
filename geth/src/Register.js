import React,{useState,useEffect} from "react";
import Img1 from './getH-logos_black.png';
import Img2 from './google.png';
import axios from "axios"
import { useData } from './DataContext';
import {useNavigate, Link } from 'react-router-dom';
import { UserAuth } from './AuthContext';

export default function Register()
{
    const {setUserData} = useData()
    const history = useNavigate();
    const [email,setEmail] = useState(' ')
    const [password,setPassword] = useState(' ')
    const [username,setusername] = useState(' ')
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
    async function submit(e){
        e.preventDefault();
         
        try{
            await axios.post("https://geth-ofyh.onrender.com/register",{
                email,password,username
            })
            .then(res=>{
                if(res.data==="exist"){
                    alert("User already exists")
                }
                else if(res.data==="notexist"){
                    history("/",{state:{id:email}})
                    setUserData({ email: email, password: password , username:username });
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
           <div className="box">
            <div className="head">
               <Link to= "/"> <button id='close'>close</button></Link>
                <img src={Img1} alt="twiter_logo" id="logo"/>
            </div>
           <div className="bodywrap">
                   <div id="Sign">
                       <h1>Register to getH</h1>
                   </div>
                   <div className="Btn-R">
                       <img src={Img2} alt="google_logo" id="glogo"/>
                       <p onClick={handleGoogleSignIn}>Register with Google</p>
                   </div>
                   <div id="line"><p>or</p></div>
                   <div className="input">
                    <form action=" ">
                        <input type="text" className="other_login_cred" onChange={(e)=>{setusername(e.target.value)}} placeholder="Username."/>
                        <input type="email" className="other_login_cred" onChange={(e)=>{setEmail(e.target.value)}} placeholder="e-mail."/>
                        <input type="password" className="other_login_cred" onChange={(e)=>{setPassword(e.target.value)}} placeholder="Password."/>
                        <Link to="/"> <button type="submit" id="btn3"  onClick={submit}>Submit</button></Link> 
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