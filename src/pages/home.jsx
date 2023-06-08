
import React, { useEffect, useRef } from 'react';
import 'animate.css';
import WOW from 'wowjs';
import 'bootstrap/dist/css/bootstrap.css';

import { useNavigate, Link } from "react-router-dom";
import brainhome from '../assets/images/brainhome.png';
import logos from '../assets/images/Logo.png';
import dy from '../assets/images/박도영.jpg';
import jw from '../assets/images/서지원.jpg';
import hb from '../assets/images/안해빈.jpg';
import kd from '../assets/images/서강덕.jpg';
import js from '../assets/images/박재석.jpg';
import mindwave from '../assets/images/mindwave.jpg';
import createSurvey from '../assets/images/createSurvey.png'


const Home = () => {
  useEffect(() => {
    new WOW.WOW().init();
  }, []);

  const how = useRef(); 
  const contact = useRef(); 
  const onMoveToForm = () => {
    how.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  const onMoveToForm2 = () => {
    contact.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
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
    <link
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css"
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
            <img className="w-100" src={brainhome} alt="Image" />
            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
              <div className="p-3" style={{ maxWidth: 900 }}>
                <h5 className="text-white text-uppercase mb-3 animated slideInDown">
                More Reliable Digital Survey Solution
                </h5>
                <h1 className="display-1 text-white mb-md-4 animated zoomIn">
               
                BRAIN FORM
                </h1>
                <Link to="/tutorial" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">
  How to use?
</Link>
                <a
                  className="btn btn-outline-light py-md-3 px-md-5 animated slideInRight"
                  onClick={onMoveToForm2}
                >
                  Contact Us
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
  
   
   
    {/* About Start */}
    <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
      <div className="container py-">
        <div className="row g-5">
          <div className="col-lg-7">
            <div className="section-title position-relative pb-3 mb-5">
              <h5 className="fw-bold text-primary text-uppercase">Our Website</h5>
              <h1 className="mb-0">
                Brain Form
              </h1>
            </div>
            <p className="mb-4" style={{ fontSize: 15}}>
  설문에 참여하는 많은 사람들이 제대로 생각하지 않고 설문 응답에 집중하거나 답변하지 않습니다. <br/>따라서 저희 홈페이지에서는 뇌파를 측정하여 응답자의 집중도를 파악하여 설문결과에 반영하고 있습니다.

</p>
            <div className="row g-0 mb-3">
              <div className="col-sm-6 wow zoomIn" data-wow-delay="0.2s">
                <h5 className="mb-3">
                  <i className="fa fa-check text-primary me-3" />
                  Reliability
                </h5>
                <h5 className="mb-3">
                  <i className="fa fa-check text-primary me-3" />
                  Response rate
                </h5>
              </div>
              <div className="col-sm-6 wow zoomIn" data-wow-delay="0.4s">
                <h5 className="mb-3">
                  <i className="fa fa-check text-primary me-3" />
                  Variety of utilization
                </h5>
                <h5 className="mb-3">
                  <i className="fa fa-check text-primary me-3" />
                  Easy to use
                </h5>
              </div>
            </div>
            <div
              className="d-flex align-items-center mb-4 wow fadeIn"
              data-wow-delay="0.6s"
            >
            
            </div>
            <Link to='./createsurvey' className="btn btn-primary py-3 px-5 mt-3 wow zoomIn"
              data-wow-delay="0.9s">
              Go make your Form
            </Link>
          </div>
          <div className="col-lg-5" style={{ minHeight: 500 }}>
            <div className="position-relative h-100">
              <img
                className="position-absolute w-100 h-100 rounded wow zoomIn"
                data-wow-delay="0.9s"
                src={logos}
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* About End */}
    
    {/* Service Start */}
    <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
      <div className="container py-5">
        <div
          className="section-title text-center position-relative pb-3 mb-5 mx-auto"
          style={{ maxWidth: 600 }}
        >
          <h5 className="fw-bold text-primary text-uppercase">Our Services</h5>
          <h1 className="mb-0">
            Why do people use Brain Form?
          </h1>
        </div>
        <div className="row g-5">
          <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.3s">
            <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
              <div className="service-icon">
                <i className="fa fa-brain text-white" />
              </div>
              <h4 className="mb-3">뇌파 측정</h4>
              <p className="m-0">
              조사시 EEG 측정을 통해 보다 정확하고 분석된 결과를 얻을 수 있습니다.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.6s">
            <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
              <div className="service-icon">
                <i className="fa fa-chart-pie text-white" />
              </div>
              <h4 className="mb-3">데이터 분석</h4>
              <p className="m-0">
              조사 결과와 뇌파 측정 결과를 시각화하며 이후 뇌파 측정 결과와 연계하여 분석합니다.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.9s">
            <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
              <div className="service-icon">
                <i className="fa fa-face-smile text-white" />
              </div>
              <h4 className="mb-3">간편함</h4>
              <p className="m-0">
              사용자에게 간편한 UI를 제공합니다. 누구나 쉽게 참여할 수 있습니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Service End */}
    
    {/* Quote Start */}
    <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
      <div className="container py-5">
        <div className="row g-5">
          <div className="col-lg-7">
            <div className="section-title position-relative pb-3 mb-5">
              <h5 className="fw-bold text-primary text-uppercase">
              EEG measurements during the survey
              </h5>
              <h1 className="mb-0">
                 BrainForm의 Identity, 뇌파 측정
              </h1>
            </div>
            
            <p className="mb-4">
            {/* Participants can measure brain waves while participating in the survey. The survey creator can check the participants' EEG graphs along with the survey results, and exclude questionnaires with less than a certain concentration. Participants can view their own EEG measurements, visualized as graphs. In addition, you can easily end the survey by blinking your eyes more than three times quickly after completing the survey. */}
            참여자는 설문에 참여하면서 뇌파를 측정할 수 있습니다. 설문 생성자는 설문 결과와 함께 참여자들의 뇌파 그래프를 확인할 수 있으며, 집중도가 일정 이하인 설문지는 배제할 수 있습니다. <br/>참여자는 그래프로 시각화된 자신의 뇌파 측정 결과를 확인할 수 있습니다. 또한, 설문 완료 후 눈을 빠르게 3회 이상 깜빡임으로써 설문을 간편하게 종료할 수 있습니다.
            </p>
           
          </div>
          <div className="col-lg-5" style={{ minHeight: 500 }}>
            <div className="position-relative h-100">
              <img
                className="position-absolute w-100 h-100 rounded wow zoomIn"
                data-wow-delay="0.9s"
                src={mindwave}
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Quote End */}

    {/* Quote Start */}
   <div className="container-fluid py-5 wow fadeInUp" ref= {how} data-wow-delay="0.1s">
      <div className="container py-5">
        <div className="row g-5">
        <div className="col-lg-5" style={{ minHeight: 500 }}>
            <div className="position-relative h-100">
              <img
                className="position-absolute w-100 h-100 rounded wow zoomIn"
                data-wow-delay="0.9s"
                src={createSurvey}
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
          <div className="col-lg-7">
            <div className="section-title position-relative pb-3 mb-5">
              <h5 className="fw-bold text-primary text-uppercase">
                Make a survey easily
              </h5>
              <h1 className="mb-0">
              쉬운 설문조사 만들기
              </h1>
            </div>
            
            <p className="mb-4">
            누구나 쉽게 설문조사를 만들고 배포할 수 있습니다. 객관식, 찬반, 주관식 질문 생성을 지원하고, 설문 참여 시 EEG 측정 기능 사용 여부를 결정합니다.
설문이 생성되면 쉽게 공유할 수 있도록 참여 링크가 생성됩니다.
            </p>
            
           
          </div>
        </div>
      </div>
    </div>
    {/* Quote End */}
    

    {/* Team Start */}
    <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s" ref={contact}>
      <div className="container py-5">
        <div
          className="section-title text-center position-relative pb-3 mb-5 mx-auto"
          style={{ maxWidth: 600 }}
        >
          <h5 className="fw-bold text-primary text-uppercase">Team Members</h5>
          <h1 className="mb-0">
            Team KAKAO99%
          </h1>
        </div>
        <div className="row g-5">
        <div className="col-lg-4 wow slideInUp" data-wow-delay="0.3s">
            <div className="team-item bg-light rounded overflow-hidden">
              <div className="team-img position-relative overflow-hidden">
                <img className="img-fluid w-100 h-100" src={dy} alt="" />
                <div className="team-social">
                  <a
                    className="btn btn-lg btn-primary btn-lg-square rounded"
                    href="https://github.com/Doyoung-Park"
                  >
                    <i className="fab fa-github fw-normal" />
                  </a>
                  <a
                    className="btn btn-lg btn-primary btn-lg-square rounded"
                    href="mailto:doodoo55@gachon.ac.kr"
                  >
                    <i className="fa-solid fa-envelope" />
                  </a>
                </div>
              </div>
              <div className="text-center py-4">
                <h4 className="text-primary">박도영 Do Young Park</h4>
                <p className="text-uppercase m-0">Manager</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 wow slideInUp" data-wow-delay="0.3s">
            <div className="team-item bg-light rounded overflow-hidden">
              <div className="team-img position-relative overflow-hidden">
                <img className="img-fluid w-100" src={jw} alt="" />
                <div className="team-social">
                <a
                    className="btn btn-lg btn-primary btn-lg-square rounded"
                    href="https://github.com/manips1"
                  >
                    <i className="fab fa-github fw-normal" />
                  </a>
                  <a
                    className="btn btn-lg btn-primary btn-lg-square rounded"
                    href="mailto:jwjw6410@naver.com"
                  >
                    <i className="fa-solid fa-envelope" />
                  </a>
                </div>
              </div>
              <div className="text-center py-4">
                <h4 className="text-primary">서지원 Ji Won Seo</h4>
                <p className="text-uppercase m-0">Member</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 wow slideInUp" data-wow-delay="0.3s">
            <div className="team-item bg-light rounded overflow-hidden">
              <div className="team-img position-relative overflow-hidden">
                <img className="img-fluid w-100" src={hb} alt="" />
                <div className="team-social">
                <a
                    className="btn btn-lg btn-primary btn-lg-square rounded"
                    href="https://github.com/HaebinAHN"
                  >
                    <i className="fab fa-github fw-normal" />
                  </a>
                  <a
                    className="btn btn-lg btn-primary btn-lg-square rounded"
                    href="mailto:gnh06280@gachon.ac.kr"
                  >
                    <i className="fa-solid fa-envelope" />
                  </a>
                </div>
              </div>
              <div className="text-center py-4">
                <h4 className="text-primary">안해빈 Hae Bin Ahn</h4>
                <p className="text-uppercase m-0">Member</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 wow slideInUp" data-wow-delay="0.6s">
            <div className="team-item bg-light rounded overflow-hidden">
              <div className="team-img position-relative overflow-hidden">
                <img className="img-fluid w-100" src={kd} alt="" />
                <div className="team-social">
                <a
                    className="btn btn-lg btn-primary btn-lg-square rounded"
                    href="https://github.com/rkdejr2321"
                  >
                    <i className="fab fa-github fw-normal" />
                  </a>
                  <a
                    className="btn btn-lg btn-primary btn-lg-square rounded"
                    href="mailto:rkdejr2321@naver.com"
                  >
                    <i className="fa-solid fa-envelope" />
                  </a>
                </div>
              </div>
              <div className="text-center py-4">
                <h4 className="text-primary">서강덕 Kang Deok Seo</h4>
                <p className="text-uppercase m-0">Member</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 wow slideInUp" data-wow-delay="0.9s">
            <div className="team-item bg-light rounded overflow-hidden">
              <div className="team-img position-relative overflow-hidden">
                <img className="img-fluid w-100" src={js} alt="" />
                <div className="team-social">
                <a
                    className="btn btn-lg btn-primary btn-lg-square rounded"
                    href="https://github.com/Jedo0224"
                  >
                    <i className="fab fa-github fw-normal" />
                  </a>
                  <a
                    className="btn btn-lg btn-primary btn-lg-square rounded"
                    href="mailto:qkrwotjr0@gmail.com"
                  >
                    <i className="fa-solid fa-envelope" />
                  </a>
                </div>
              </div>
              <div className="text-center py-4">
                <h4 className="text-primary">박재석 Jae Seok Park</h4>
                <p className="text-uppercase m-0">Member</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Team End */}
    
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

export default Home;
