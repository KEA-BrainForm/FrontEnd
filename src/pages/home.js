import React from 'react';
import './css/home.css'
import logo from '../images/Logo.png';
import brainwave from '../images/brainwave.png';


const Home = () => {
  return (

    <div className='background'>

      <div className="home-card">
        <div className="cont1">
          <img src={logo} alt="Logo"/><br/>
          <img src={brainwave} alt="brainwave" />
        </div>
        <div className="cont2">
          <h1>뇌의 목소리, 뇌파<br/>어디까지 알고 계신가요?</h1><br/>
          <p>Team Kakao 99%만의 뇌파 활용 설문 조사 서비스입니다.</p><br />
          <p>설문 답변 시 자신의 뇌파를 측정할 수 있습니다.</p><br />
          <p>나도 몰랐던 뇌의 상태와 목소리를<br /> 전문적인 파형 분석을 통해 이해하고 활용할 수 있습니다.</p>
          <p>또한 나만의 설문 생성을 통해<br />뇌파 분석 결과를 다양한 기준으로 답변 결과를<br /> 비교/분석 및 활용할 수 있습니다.</p>
        </div>
      </div>
   
    </div>

  );
}

export default Home;