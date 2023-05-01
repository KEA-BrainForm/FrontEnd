import React from 'react';
import './css/home.css'
import logo from '../images/Logo.png';
import googleLoginImg from '../images/google_login.png';
import kakaoLogin from '../images/kakao_login.png';
import naverLogin from '../images/naver_login.png';


import { Link } from 'react-router-dom';

function ImageButton(props) {
    return (
        <Link to={props.link}>
        <button onClick={props.onClick}>
            <img src={props.src} alt={props.altText} width="300px" height="50px" />
        </button>
        </Link>
    );
}


const login = () => {


    return (
        <div className='background'>
            <div className="home-card">
                <div className="cont1">
                </div>
                <div>
                    <img src={logo} alt="Logo" /><br />
                    <h1>Log in</h1>
                    <h5>회원가입을 통해 더 많은 서비스를 즐겨보세요</h5> <br/>

                    <ImageButton src={googleLoginImg} alt="구글 로그인" link="http://localhost:8080/oauth2/authorization/google"/><br />  {/* link 속성에 이동할 페이지 url 입력하면 됩니다 -> 회원가입 페이지 */} 
                    <ImageButton src={kakaoLogin} alt="카카오 로그인" link="http://localhost:8080/oauth2/authorization/kakao"/><br /> { /* " */}
                    <ImageButton src={naverLogin} alt="네이버 로그인" link="http://localhost:8080/oauth2/authorization/naver"/><br />  { /* " */}
                </div>
           
            </div>

        </div>

    );
}


export default login;

