import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Button from "./ui/Button";
import ResSurveyItem from './ui/ResSurveyItem';
import { useParams, useNavigate } from 'react-router-dom';
import SurveyComplete from './SurveyComplete';
import CheckPasswordTextInput from './ui/PasswordTextInput';

import Styles from '../pages/css/CheckPassword.module.css';
const token = localStorage.getItem("ACCESS_TOKEN");


function CheckPassword() {
    const { surveyId } = useParams();
  const [surveyData, setSurveyData] = useState(null);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const navigate = useNavigate();

 
  const [password, setPassword] = useState('');

const handlePasswordChange = (event) => {
    setPassword(event.target.value);
};




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
  
    try {
      const response = await axios.post(`/api/${surveyId}/${password}`, {
        // ...
      }, {
        headers: {
          Authorization: `Bearer ${token}` // JWT 토큰을 헤더에 추가합니다.
        }
      });
  
      if (response.status === 200) {
        window.alert("응답을 시작합니다."); // Show an alert on successful submission
 
        navigate(`/survey-response/${surveyId}`, { state: { password } });
      }
    } catch (error) {
      console.error('Error submitting the password:', error);
    }
  };

  

  return (
    <div className={Styles.container}>
    {surveyData ? (
      <>
        <h1 className={Styles.header}>설문 제목 : "{surveyData.title}"</h1>
        <p>설문을 진행하기 위해 응용프로그램에 나타난 비밀번호를 입력해주세요</p>
      </>
    ) : (
      <p>Loading...</p>
    )}<br></br>
    

    <div className={Styles.formWrapper}>
      <form className={Styles.form} onSubmit={handleAfterCheck}>
        <CheckPasswordTextInput
          name="password"
          height={60}
          value={password}
          onChange={handlePasswordChange}
        /><br></br>
        <Button type="submit" className={Styles.submitButton} title={"Submit"}>Submit</Button>
  
      </form>
    </div>
  </div>
);
}

export default CheckPassword;