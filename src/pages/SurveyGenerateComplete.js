import React from "react";
import logo from '../images/Logo.png';

import './css/surveycomplete.css'
import brainwaves from '../images/brainwaves.png';
import { Link } from 'react-router-dom';

function SurveyGenerateComplete() {
  return (
    <div className='background'>
      <img src={logo} alt="Logo" className="img"/>
      <div className="home-card">
        <div className="complete-card">
          <div class="container2">
            <div class="item2 itemmerge">
              <h2><strong>설문 생성이 완료되었습니다.</strong></h2><br/><br/>
              
            </div>
            <div class="item2 itemmerge2">
              <h2>설문 내용을 공유해보세요.</h2>
              
            </div>
            <div class="item2 itemmerge2">
              <h2><strong>URL :                 </strong></h2><br/><br/>
              
            </div>
            <div class="con2 ">
            카카오톡 이미지
            </div>
            <div class="con3 ">
              URL 이미지
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



export default SurveyGenerateComplete;