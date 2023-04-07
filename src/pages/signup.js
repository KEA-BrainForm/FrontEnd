import React from "react";
import logo from '../images/Logo.png';
import './css/signup.css'
import { Link } from 'react-router-dom';
function signup() {
  return (
    <div className="background">
      <div className="signup-card">
        <img className="logeSignup" src={logo} alt="logo" /><br />
        <h1>Sign up</h1><br />
        <form className="signuptext">
          <div className="nickname">
            <div >
              <label htmlFor="nickname">Nickname :</label>
              <input className="signupinput" type="text" id="nickname" />
            </div>
            <div className="genderagegrid">
              <label htmlFor="gender">성별 : </label>
              <label>
                <input type="radio" name="gender" value="male" />
                Male
              </label>
              <label>
                <input type="radio" name="gender" value="female" />
                Female
              </label>
            </div>


            <div className="genderagegrid">
              <label htmlFor="age">나이 : </label>
              <label>
                <input type="radio" name="age" value="10대" />
                10대
              </label>
              <label>
                <input type="radio" name="age" value="20대" />
                20대
              </label>
              <label>
                <input type="radio" name="age" value="30대" />
                30대
              </label> 
              <label>
        
              </label> 
            
              <label>
                <input type="radio" name="age" value="40대" />
                40대
              </label> 
              <label>
                <input type="radio" name="age" value="50대" />
                50대
              </label>
              <label>
                <input type="radio" name="age" value="60대 이상" />
                60대 이상
              </label>

            </div>


            <div className="jobgrid">
              <label htmlFor="occupation">직업 : </label>
             
              <label>
                <input type="radio" name="occupation" value="student" />
                학생
              </label>
              <label>
                <input type="radio" name="occupation" value="office" />
                사무직     
              </label>
              <label>
                <input type="radio" name="occupation" value="professional" />
                전문직
              </label> 
              <span>
              </span> 
              <label>
                <input type="radio" name="occupation" value="civil-servant" />
                공무원
              </label> 
              <label>
                <input type="radio" name="occupation" value="research" />
                연구직
              </label>
              <label>
                <input type="radio" name="occupation" value="job-unavailable" />
                무직
              </label>
            </div>

          
          </div>
        </form>
        <div className="button">
        <Link to="/">
              <button type="submit">Sign up</button>
              </Link>
            </div>
        
      </div>
      
    </div>
  );
}

export default signup;
