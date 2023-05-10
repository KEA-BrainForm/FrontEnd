import React, { useState } from "react";
import logo from "../images/Logo.png";
import kakaoShare from "../images/kakao_share.png";
import urlShare from "../images/url_share.png";

import './css/surveycomplete.css'
import brainwaves from '../images/brainwaves.png';
import { Link } from 'react-router-dom';
import { Grid, TextField } from "@mui/material";
import { useLocation } from "react-router-dom";

function SurveyGenerateComplete() {
  const location = useLocation();
  const uniqueUrl = location.state.uniqueUrl;
  console.log(uniqueUrl);
  
  return (

    <div className='background'>
      <img src={logo} alt="Logo" className="img" />
      <div className="home-card">
        <div className="complete-card">
          <div class="container2">
            <div class="item2 itemmerge">
              <h2><strong>설문 생성이 완료되었습니다.</strong></h2>
            </div>
            <div class="item2 itemmerge2">
              <h2>설문 내용을 공유해보세요.</h2>
            </div>
            <div class="item2 itemmerge2">
              <TextField
                id="outlined-basic"
                label="URL"
                variant="outlined"
                value={uniqueUrl}
                style={{background: 'white', width: '50%'}}
                InputProps={{
                  style: { color: 'black', textAlign: 'center' }
                }}
              />
              <img src={urlShare} width='70px' height='auto' style={{ marginLeft: "10px" }} />
            </div>
          </div>
          <div class="con2">
              <img src={kakaoShare} class="shareImg" style={{ marginBottom: "50px" }}/>
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