import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import Button from "../components/Button/Button";
import ConnectDevice from "../assets/images/ConnectDevice.png"
import { useParams, useNavigate } from 'react-router-dom';


import Styles from '../styles/css/CheckPassword.module.css';
const token = localStorage.getItem("ACCESS_TOKEN");

function CheckPassword() {
  const { surveyId } = useParams();
  const [surveyData, setSurveyData] = useState(null);
  const [inputPassword, setInputPassword] = useState('');
  const inputsRef = useRef([]);
  const navigate = useNavigate();

  const handlePasswordChange = (event) => {
    setInputPassword(event.target.value);
  };

  function handleInput(e, inputIndex) {
    const value = e.target.value;
    setInputPassword(value);
  }

  function handleKeyDown(e, inputIndex) {
    if (e.keyCode === 8 && inputPassword === '') {
      const prevIndex = inputIndex - 1;
      if (prevIndex >= 0) {
        inputsRef.current[prevIndex].focus();
      }
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log(`${surveyId} !!!`);
        const response = await axios.get(`/api/ques/${surveyId}`);
        setSurveyData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching survey questions:', error);
      }
    };

    fetchData();
  }, [surveyId]);

  const handleAfterCheck = async (event) => {
    event.preventDefault();
    console.log(inputPassword);
    try {
      const response = await axios.post(`/api/${surveyId}/${inputPassword}`, {
        // ...
      }, {
        headers: {
          Authorization: `Bearer ${token}` // JWT 토큰을 헤더에 추가합니다.
        }
      });

      if (response.status === 200) {
        //  window.alert("응답을 시작합니다."); // Show an alert on successful submission
        navigate(`/survey-response/${surveyId}`, { state: { password: inputPassword } });
      }
    } catch (error) {
      console.error('Error submitting the password:', error);
    }
  };

  return (
    
    <div className={Styles.container}>
          <div className="position-relative d-flex justify-content-center align-items-center" >
      <img
        className="rounded wow zoomIn"
        data-wow-delay="0.9s"
        src={ConnectDevice}
        style={{ width: "80%", height: "auto" }}
        alt="Connect Device"
      />
     
      
    
  </div>
  <div>
  <h4 className="mb-0" style={{textAlign: "center"}}>
                설문 응답 시작에 앞서 뇌파 측정 프로그램을 실행하고 프로그램 화면에 나타난 패스워드를 입력해주세요
              </h4>
              <br/>
              </div>
      {surveyData ? (
        <>
          <h1 className={Styles.header}>설문 제목 : "{surveyData.title}"</h1>
          <p>설문을 진행하기 위해 응용프로그램에 나타난 비밀번호를 입력해주세요</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
      <br></br>
      <div className={Styles.formWrapper}>
        <form className={Styles.form} onSubmit={handleAfterCheck}>
          <div>
            <input
              type="text"
              ref={(el) => (inputsRef.current[0] = el)}
              value={inputPassword}
              onChange={(e) => handleInput(e, 0)}
              onKeyDown={(e) => handleKeyDown(e, 0)}
            />
          </div>
          <br></br>
          <Button type="submit" className={Styles.submitButton} title={"응답시작"}>Submit</Button>
        </form>
      </div>
    </div>
  );
}

export default CheckPassword;
