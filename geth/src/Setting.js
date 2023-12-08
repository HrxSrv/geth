import React, { useEffect } from 'react';
import { UserAuth } from './AuthContext';
import { useNavigate } from 'react-router-dom';
import "./settings.css"

function Setting(){
    const { googleSignIn } = UserAuth();
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <div>
        <form>
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required/>
            
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required/>
            
            <label for="phone">Phone:</label>
            <input type="tel" id="phone" name="phone" required/>
            
            <label for="skills">Skills (e.g., Carpenter, Plumber, Electrician, etc.):</label>
            <input type="text" id="skills" name="skills" required/>
            
            <label for="experience">Experience (years):</label>
            <input type="number" id="experience" name="experience" required/>
            
            <label for="resume">Resume/CV:</label>
            <textarea id="resume" name="resume" rows="4" required></textarea>
            
            <button type="submit">Submit Application</button>
        </form>
    </div>
  );
}
export default Setting;