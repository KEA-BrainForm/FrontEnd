
import React, { useState, useEffect } from "react";
import './css/surveycomplete.css'
import brainwaves from '../images/brainwaves.png';
import { Link, useLocation } from 'react-router-dom';
import axios from "axios";

function SurveyComplete() {
  const token = localStorage.getItem("ACCESS_TOKEN");
  const location = useLocation();
  const surveyId = location.state.surveyId;

  const [brainwaveData, setBrainWaveData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/member/brainwave/result/${surveyId}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setBrainWaveData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const imgUrl = "http://localhost:8080/images/brainwave" + brainwaveData.image;
  
  return (
    <div className='background'>
      <div className="home-card">
        <div className="complete-card">
          <div class="container">
            <div class="item2 itemmerge">
              <h2><strong>설문 응답 제출이 완료되었습니다.</strong></h2>
            </div>
            <div class="con2 ">
            뇌파 분석 결과<br/><br/>
              설문 중 전반적으로 <br/>
              집중도: {brainwaveData.avgAtt} <br/>
              집중도: {brainwaveData.avgMedit} <br/>
            </div>
            <div class="con3 ">
              <img src={imgUrl} alt="brainwave" />
            </div>
          </div>
          <Link to="/"> 
          <button className="completebutton">닫기</button>
          </Link>
        </div>
      </div>
    </div>
  );
}



export default SurveyComplete;
