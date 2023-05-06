import React from 'react';
import './css/home.css'
import logo from '../images/Logo.png';
import brainhome from '../images/brainhome.png';
import downasset from '../images/caret-down-fill.svg';
import intro from '../images/intro.png';
import intro2 from '../images/intro2.png';
import intro3 from '../images/intro3.png';
const Home = () => {
  return (
    
    <div className="grid-container">
    <div className="grid-item-merged">
      <img src={brainhome} ></img>
    </div>
    <div className="grid-item-merged">  
    <p>Team Kakao 99%만의 뇌파 활용 설문 조사 서비스입니다.</p>
    <img className='floating-arrow' src={downasset} alt="Down arrow"/><br></br><br></br><br></br><br></br>
    <img src={intro} alt="intro" style={{ width: '50%', height: 'auto' }} />
    </div>
    
    <div className="grid-item">       <p>
         <img src={intro2} alt="intro" style={{ width: '80%', height: 'auto' }} />
        </p></div>
    <div className="grid-item">         <img src={intro3} alt="intro" style={{ width: '80%', height: 'auto' }} /></div>
    <div className="grid-item">6</div>
  </div>

  );
}

export default Home;