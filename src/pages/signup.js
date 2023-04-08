import React, { useState } from "react";
import logo from '../images/Logo.png';
import './css/signup.css'
import Axios from "axios";

function Signup() {

  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [job, setJob] = useState("");

  const handleAgeOptionChange = (event) => {
    setAge(event.target.value);
  };

  const handleJobOptionChange = (event) => {
    setJob(event.target.value);
  };

  const handleGenderOptionChange = (event) => {
    setGender(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const registerInfo = { username, gender, age, job };
    console.log(registerInfo);
    
    Axios.post("/api/register", registerInfo).then((response) => {
      if (response.status === 200) {
        alert("회원가입에 성공했습니다!");
        window.location.href = "/"
      }
    });
  };

  return (
    <div className="background">
      <div className="signup-card">
        <div className="content-center">
          <img className="logeSignup" src={logo} alt="logo" /><br />
          <h1>Sign up</h1><br />
          <form className="signuptext" onSubmit={handleSubmit}>
            <div className="nickname">
              <div >
                <label htmlFor="username">Nickname :</label>
                <input className="signupinput" type="text" id="username" onChange={e => setUsername(e.target.value)}/>
              </div>
              <div className="genderagegrid">
                <label htmlFor="gender">성별 : </label>
                <label>
                  <input type="radio" value="male" checked={gender === 'male'} onChange={handleGenderOptionChange} />
                  Male
                </label>
                <label>
                  <input type="radio" value="female" checked={gender === 'female'} onChange={handleGenderOptionChange} />
                  Female
                </label>
              </div>


              <div className="genderagegrid">
                <label htmlFor="age">나이 : </label>
                <label>
                  <input type="radio"
                    value="10대"
                    checked={age === '10대'}
                    onChange={handleAgeOptionChange} />
                  10대
                </label>
                <label>
                  <input type="radio"
                    value="20대"
                    checked={age === '20대'}
                    onChange={handleAgeOptionChange} />
                  20대
                </label>
                <label>
                  <input type="radio"
                    value="30대"
                    checked={age === '30대'}
                    onChange={handleAgeOptionChange} />
                  30대
                </label>
                <label>
                  <input type="radio"
                    value="40대"
                    checked={age === '40대'}
                    onChange={handleAgeOptionChange} />
                  40대
                </label>
                <label>
                  <input type="radio"
                    value="50대"
                    checked={age === '50대'}
                    onChange={handleAgeOptionChange} />
                  50대
                </label>
                <label>
                  <input type="radio"
                    value="60대이상"
                    checked={age === '60대이상'}
                    onChange={handleAgeOptionChange} />
                  60대 이상
                </label>

              </div>


              <div className="jobgrid">
                <label htmlFor="job">직업 : </label>

                <label>
                <input type="radio" value="student" checked={job === 'student'} onChange={handleJobOptionChange} />
                  학생
                </label>
                <label>
                <input type="radio" value="office" checked={job === 'office'} onChange={handleJobOptionChange} />
                  사무직
                </label>
                <label>
                <input type="radio" value="professional" checked={job === 'professional'} onChange={handleJobOptionChange} />
                  전문직
                </label>
                <span>
                </span>
                <label>
                <input type="radio" value="civil-servant" checked={job === 'civil-servant'} onChange={handleJobOptionChange} />
                  공무원
                </label>
                <label>
                <input type="radio" value="research" checked={job === 'research'} onChange={handleJobOptionChange} />
                  연구직
                </label>
                <label>
                <input type="radio" value="job-unavailable" checked={job === 'job-unavailable'} onChange={handleJobOptionChange} />
                  무직
                </label>
              </div>


            </div>
            <div ><br /><br /><br /><br />
              <button className="signupbutton" type="submit">회원가입</button>
          </div>
          </form>

        </div>
      </div>
    </div>

  );
}

export default Signup;
