import React, { useState, useEffect } from "react";
import '../../styles/css/surveycomplete.css'
import brainwaves from '../../assets/images/brainwaves.png';
import { Link, useLocation } from 'react-router-dom';
import axios from "axios";
import { wait } from "@testing-library/user-event/dist/utils";


function SurveyComplete() {
  const token = localStorage.getItem("ACCESS_TOKEN");
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const surveyId = searchParams.get("surveyId");
  const [brainwaveData, setBrainWaveData] = useState(null);
  const [imgUrl, setImgUrl] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      
      try {
        const response = await axios.get(`/api/member/brainwave/result/${surveyId}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setBrainWaveData(response.data);
        //setImgUrl("http://localhost:8080/images/brainwave/" + response.data.image);
        setImgUrl("C:/Users/USER/Desktop/backend_MSA_KAE/kea_brainform_be/src/main/resources/static/images/brainwave/" + response.data.image);
        console.log(imgUrl);
        console.log(surveyId);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [surveyId, token]);

  console.log("imgUrl", imgUrl);
  return (
    <div className='background'>
      <div className="home-card">
        <div className="complete-card">
          <div className="container">
            <div className="item2 itemmerge">
              <h2><strong>설문 응답 제출이 완료되었습니다.</strong></h2>
            </div>
            <div className="con2">
              뇌파 분석 결과<br /><br />
              설문 중 전반적으로 <br />
              {brainwaveData && (
                <>
                  집중도: {brainwaveData.avgAtt} <br />
                  안정도: {brainwaveData.avgMedit} <br />

                </>
              )}
            </div>

            {imgUrl && (
              <>
                <div className="con3">
                  <img src={imgUrl} alt="brainwave" />
                </div>
              </>
            )}

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