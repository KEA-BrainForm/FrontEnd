
import React, { useEffect, useRef } from 'react';
import 'animate.css';
import WOW from 'wowjs';
import 'bootstrap/dist/css/bootstrap.css';
import ConnectDevice from "../assets/images/ConnectDevice.png"
import { useNavigate, Link } from "react-router-dom";
import brainhome from '../assets/images/brainhome.png';
import braindevice from '../assets/images/brain_device.png';
import brainmain from '../assets/images/brain_home.png';
import logos from '../assets/images/Logo.png';
import dy from '../assets/images/박도영.jpg';
import jw from '../assets/images/서지원.jpg';
import hb from '../assets/images/안해빈.jpg';
import kd from '../assets/images/서강덕.jpg';
import js from '../assets/images/박재석.jpg';

import Fitting1 from '../assets/images/Fitting-Figure-1.png';
import Fitting2 from '../assets/images/Fitting-Figure-2.png';
import Fitting3 from '../assets/images/Fitting-Figure-3.png';
import Fitting4 from '../assets/images/Fitting-Figure-4.png';


import mindwave from '../assets/images/mindwave.jpg';
import createSurvey from '../assets/images/createSurvey.png'


const Tutorial = () => {
  useEffect(() => {
    new WOW.WOW().init();
  }, []);

  const program = useRef(); 
  const device = useRef(); 
  const onMoveToForm1 = () => {
    program.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  const onMoveToForm2 = () => {
    device.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
    <meta charSet="utf-8" />
  
    <meta content="width=device-width, initial-scale=1.0" name="viewport" />
    <meta content="Free HTML Templates" name="keywords" />
    <meta content="Free HTML Templates" name="description" />
    {/* Favicon */}
    <link href="test/img/favicon.ico" rel="icon" />
    {/* Google Web Fonts */}
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
    <link
      href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&family=Rubik:wght@400;500;600;700&display=swap"
      rel="stylesheet"
    />
    {/* Icon Font Stylesheet */}

     <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css"
      rel="stylesheet"
    />
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css"
      rel="stylesheet"
    />
    {/* Libraries Stylesheet */}
    <link href="test/lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet" />
    <link href="test/lib/animate/animate.min.css" rel="stylesheet" />
    <link href="test/lib/animate/animate.css" rel="stylesheet"/>
    {/* Customized Bootstrap Stylesheet */}
    <link href="test/css/bootstrap.min.css" rel="stylesheet" />
    {/* Template Stylesheet */}
    <link href="test/css/style.css" rel="stylesheet" />
    
   
      <div
        id="header-carousel"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img className="image" src={brainhome} alt="Image" style={{ height: "400px" }} />
            </div>
            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
              <div className="p-3" style={{ maxWidth: 900 }}>
                <h5 className="text-white text-uppercase mb-3 animated slideInDown">
                More Reliable Digital Survey Solution
                </h5>
                <h1 className="display-1 text-white mb-md-4 animated zoomIn">
               
                BRAIN FORM
                </h1>
                <a
                  className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft"
                  target='_blank'
                  onClick={onMoveToForm1}
                >
                  뇌파 프로그램 사용 가이드
                </a>
                <a
                  className="btn btn-outline-light py-md-3 px-md-5 animated slideInRight"
                  onClick={onMoveToForm2}
                >
                  뇌파 기기 착용 가이드
                </a>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img className="w-100" src="test/img/carousel-2.jpg" alt="Image" />
            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
              <div className="p-3" style={{ maxWidth: 900 }}>
                <h5 className="text-white text-uppercase mb-3 animated slideInDown">
                Brain Wave &amp; Survey
                </h5>
                <h1 className="display-1 text-white mb-md-4 animated zoomIn">
                &amp; Reliable Digital Solution
                </h1>
                <a
                  href="quote.html"
                  className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft"
                >
                  Free Quote
                </a>
                <a
                  href=""
                  className="btn btn-outline-light py-md-3 px-md-5 animated slideInRight"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      
      </div>
  

   

    {/* Team Start */}

    <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s" ref={program}>
  <div className="container py-5">
    <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{ maxWidth: 600 }}>
      <h5 className="fw-bold text-primary text-uppercase">EEG Program User Guide</h5>
      <h1 className="mb-0">뇌파 프로그램 사용 가이드</h1>
    </div >
    </div>
    
    </div>
    <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
      <div className="container py-">
        <div className="row g-5" style={{marginRight : 300}}>
          <div className="col-lg-7"  >
            <div className="section-title position-relative pb-3 mb-5">
              <h5 className="fw-bold text-primary text-uppercase">Device Connector</h5>
              <h1 className="mb-0">
                BrainForm Device Connector
              </h1>
            </div>
            <p className="mb-4" style={{ fontSize: 18}}>
            BrainForm은 다양한 NeuroSky Mindwave 뇌파 기기와 호환되며, 이러한 기기와의 연결을 통해 실시간으로 뇌파 값을 획득합니다. 사용자는 BrainForm 소프트웨어를 사용하여 뇌파 기기와의 연결을 설정하고, 원하는 뇌파 데이터를 선택하여 수집할 수 있습니다. 뇌파 데이터는 고도의 정확성과 신뢰성을 보장하기 위해 실시간으로 처리됩니다.
</p>
           
            <Link to='https://drive.google.com/file/d/1fGpd4qOjD3rrap8cViqZaOxKdj9V1HQT/view?usp=drive_link./createsurvey' className="btn btn-primary py-4 px-6 mt-5 wow zoomIn"
              data-wow-delay="0.9s">
              BrainForm program download
            </Link>
          </div>
          <div className="col-lg-5" style={{ minHeight: 500 }}>
            <div className="position-relative h-100">
              <img
                className="position-absolute w-105 h-100 rounded wow zoomIn"
                data-wow-delay="0.9s"
                src={braindevice}
               
              />
            </div>
          </div>
        </div>
      </div>

      
      <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
  <br/><br/><br/><br/>
   <div className="row g-5"  style={{marginLeft : 100}}>
      
  <h1 className="mb-0" style={{marginLeft : 250}}>
                BrainForm Device Connector
              </h1>
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
  <h2 className="mb-0" style={{textAlign: "center"}}>
                설문 응답 시작에 앞서 뇌파 측정 프로그램을 실행하고 프로그램 화면에 나타난 패스워드를 입력해주세요
              </h2>
              </div>
  </div>
</div>
    </div>
    <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s" ref={device} >
  <div className="container py-5">
    <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{ maxWidth: 600 }}>
      <h5 className="fw-bold text-primary text-uppercase">NeuroSky MindWave Mobile</h5>
      <h1 className="mb-0">뇌파 기기 착용 가이드</h1>

    </div >


  <div className="row g-5"></div>
<div style={{ marginLeft: '15%' }}>
  <div className="container-fluid py-5 wow fadeInUp"  data-wow-delay="0.1s" style={{ minHeight: 50 }}>
    <div className="container py-5">
      <div className="row g-5">
        <div className="col-lg-5" style={{ minHeight: 50 }}>
          <div className="position-relative h-100">
            <img
              className="position-absolute w-95 h-95 rounded wow zoomIn"
              data-wow-delay="0.9s"
              src={Fitting1}
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
        <div className="col-lg-5">
          <div className="section-title position-relative pb-3 mb-5">
          <h5 className="fw-bold text-primary text-uppercase">Set sensor arm direction</h5>
          <h1 className="mb-0">1. 센서암 방향 설정</h1>
          </div>

          <p className="mb-4" style={{ fontSize: 18}}>
            MindWave의 이마 센서 암 방향을 정하십시오.
          </p>
        </div>
      </div>
    </div>
  </div>
  {/* Quote End */}
  <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s" style={{ minHeight: 50 }}>
    <div className="container py-5">
      <div className="row g-5">
        <div className="col-lg-7">
          <div className="section-title position-relative pb-3 mb-5">
          <h5 className="fw-bold text-primary text-uppercase">headband adjustable</h5>
            <h1 className="mb-0">2. 오버 헤드 밴드 조절</h1>
          </div>
          <p className="mb-4" style={{ fontSize: 18}}>
          MindWave의 오버 헤드 밴드는 조절 가능합니다. 다양한 크기에 맞게 확장하고 센서 암이 이마에 접촉되도록 머리에 착용하십시오.
          </p>
          <div className="row g-0 mb-3">
            <div className="col-sm-6 wow zoomIn" data-wow-delay="0.2s"></div>
          </div>
          <div className="d-flex align-items-center mb-4 wow fadeIn" data-wow-delay="0.6s"></div>
        </div>
        <div className="col-lg-4" style={{ minHeight: 100 }}>
          <div className="position-relative h-80">
            <img
              className="position-absolute w-95 h-95 rounded wow zoomIn"
              data-wow-delay="0.9s"
              src={Fitting2}
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
    </div>
  </div>

  <div className="container-fluid py-5 wow fadeInUp"  data-wow-delay="0.1s">
    <div className="container py-5">
      <div className="row g-5">
        <div className="col-lg-5" style={{ minHeight: 50 }}>
          <div className="position-relative h-100">
            <img
              className="position-absolute w-95 h-95 rounded wow zoomIn"
              data-wow-delay="0.9s"
              src={Fitting3}
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
        <div className="col-lg-5">
          <div className="section-title position-relative pb-3 mb-5">
          <h5 className="fw-bold text-primary text-uppercase">Ear hoop fixation</h5>
            <h1 className="mb-0">3. 이어 후프 고정</h1>
          </div>

          <p className="mb-4" style={{ fontSize: 18}}>
          고무 이어 후프를 왼쪽 귀 뒤에 놓은 다음 이어 클립을 귓볼에 끼 웁니다.
          </p>
        </div>
      </div>
    </div>
  </div>
  {/* Quote End */}
  <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
    <div className="container py-">
      <div className="row g-5">
        <div className="col-lg-7">
          <div className="section-title position-relative pb-3 mb-5">
            <h5 className="fw-bold text-primary text-uppercase">Check wearing the EEG device</h5>
            <h1 className="mb-0">4. 뇌파 기기 착용 완료</h1>
          </div>
          <p className="mb-4" style={{ fontSize: 18}}>
          이것이 MindWave가 적절하게 착용되었을 때의 모습입니다. <br/>
          " 센서는 항상 피부에 직접 접촉 할 수 있어야합니다. 화장, 각질 또는 파편이 연결을 방해 할 수 있습니다. "
          </p>
          <div className="row g-0 mb-3">
            <div className="col-sm-6 wow zoomIn" data-wow-delay="0.2s">
              <h5 className="mb-3">
                <i className="fa fa-check text-primary me-3" />
                센서암 방향 확인
              </h5>
              <h5 className="mb-3">
                <i className="fa fa-check text-primary me-3" />
                헤드 밴드 조절
              </h5>
            </div>
            <div className="col-sm-6 wow zoomIn" data-wow-delay="0.4s">
              <h5 className="mb-3">
                <i className="fa fa-check text-primary me-3" />
                이어 후프 고정
              </h5>
              <h5 className="mb-3">
                <i className="fa fa-check text-primary me-3" />
                센서 피부 접촉 확인
              </h5>
            </div>
          </div>
          <div className="d-flex align-items-center mb-4 wow fadeIn" data-wow-delay="0.6s"></div>
        </div>
        <div className="col-lg-3" style={{ minHeight: 100 }}>
          <div className="position-relative h-60">
            <img
              className="position-relative w-95 h-95 rounded wow zoomIn"
              data-wow-delay="0.9s"
              src={Fitting4}
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>


    
      
      </div>
    {/* Vendor Start */}
    <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
      <div className="container py-5 mb-5">
        <div className="bg-white">
          <div className="owl-carousel vendor-carousel">
            <img src="test/img/vendor-1.jpg" alt="" />
            <img src="test/img/vendor-2.jpg" alt="" />
            <img src="test/img/vendor-3.jpg" alt="" />
            <img src="test/img/vendor-4.jpg" alt="" />
            <img src="test/img/vendor-5.jpg" alt="" />
            <img src="test/img/vendor-6.jpg" alt="" />
            <img src="test/img/vendor-7.jpg" alt="" />
            <img src="test/img/vendor-8.jpg" alt="" />
            <img src="test/img/vendor-9.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
    {/* Vendor End */}
    {/* Footer Start */}
    <div
      className="container-fluid bg-dark text-light mt-5 wow fadeInUp"
      data-wow-delay="0.1s"
    >
      <div className="container">
        <div className="row gx-5">
          <div className="col-lg-4 col-md-6 footer-about">
            <div className="d-flex flex-column align-items-center justify-content-center text-center h-100 bg-primary p-4">
              <a href="index.html" className="navbar-brand">
                <h1 className="m-0 text-white">
                  <i className="fa fa-user-tie me-2" />
                  BrainForm
                </h1>
              </a>
              <p className="mt-3 mb-4">
                Brainform: Surveying platform using brainwave by Team KAKAO99%
              </p>
            </div>
          </div>
          <div className="col-lg-8 col-md-6">
          <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s" >
            
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container-fluid text-white" style={{ background: "#061429" }}>
      <div className="container text-center">
        <div className="row justify-content-end">
          <div className="col-lg-8 col-md-6">
            <div
              className="d-flex align-items-center justify-content-center"
              style={{ height: 75 }}
            >
              <p className="mb-0">
                ©{" "}
                <a className="text-white border-bottom" href="#">
                  Brainform
                </a>
                . All Rights Reserved. 
                {/*/*** This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. *** /*/}
                &nbsp; Designed by TEAM KAKAO99%
              </p>
              <br />
            </div>
            
          </div>
        </div>
      </div> 
    </div>


    {/* Footer End */}
    {/* Back to Top */}
    <a
      href="#"
      className="btn btn-lg btn-primary btn-lg-square rounded back-to-top"
    >
      <i className="bi bi-arrow-up" />
    </a>
    {/* JavaScript Libraries */}
    {/* Template Javascript */}

   
  </>
  
  

  );
}

export default Tutorial;
