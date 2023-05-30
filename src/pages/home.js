
import React, { useEffect, useRef } from 'react';
import 'animate.css';
import WOW from 'wowjs';
import 'bootstrap/dist/css/bootstrap.css';

import { useNavigate, Link } from "react-router-dom";
import logo from '../images/Logo.png';
import brainhome from '../images/brainhome.png';
import brain from '../images/brain.png';
import logos from '../images/Logo.png';
import dy from '../images/박도영.jpg';
import jw from '../images/서지원.jpg';
import hb from '../images/안해빈.jpg';
import kd from '../images/서강덕.jpg';
import js from '../images/박재석.jpg';
import downasset from '../images/caret-down-fill.svg';
import intro from '../images/intro.png';
import intro2 from '../images/intro2.png';
import intro3 from '../images/intro3.png';
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
                <a
                  className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft"
                  onClick={onMoveToForm}
                >
                  How To Use? 
                </a>
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
            <p className="mb-4">
            Many of the people who participate in the survey do not focus on the survey response or answer without thinking properly. Therefore, our website determines the concentration of respondents by measuring brain waves and reflects them in the survey results.
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
                <i className="fa fa-shield-alt text-white" />
              </div>
              <h4 className="mb-3">Cyber Security</h4>
              <p className="m-0">
                Amet justo dolor lorem kasd amet magna sea stet eos vero lorem
                ipsum dolore sed
              </p>
              <a className="btn btn-lg btn-primary rounded" href="">
                <i className="bi bi-arrow-right" />
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.6s">
            <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
              <div className="service-icon">
                <i className="fa fa-chart-pie text-white" />
              </div>
              <h4 className="mb-3">Data Analytics</h4>
              <p className="m-0">
                Amet justo dolor lorem kasd amet magna sea stet eos vero lorem
                ipsum dolore sed
              </p>
              <a className="btn btn-lg btn-primary rounded" href="">
                <i className="bi bi-arrow-right" />
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.9s">
            <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
              <div className="service-icon">
                <i className="fa fa-code text-white" />
              </div>
              <h4 className="mb-3">Web Development</h4>
              <p className="m-0">
                Amet justo dolor lorem kasd amet magna sea stet eos vero lorem
                ipsum dolore sed
              </p>
              <a className="btn btn-lg btn-primary rounded" href="">
                <i className="bi bi-arrow-right" />
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.3s">
            <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
              <div className="service-icon">
                <i className="fab fa-android text-white" />
              </div>
              <h4 className="mb-3">Apps Development</h4>
              <p className="m-0">
                Amet justo dolor lorem kasd amet magna sea stet eos vero lorem
                ipsum dolore sed
              </p>
              <a className="btn btn-lg btn-primary rounded" href="">
                <i className="bi bi-arrow-right" />
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.6s">
            <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
              <div className="service-icon">
                <i className="fa fa-search text-white" />
              </div>
              <h4 className="mb-3">SEO Optimization</h4>
              <p className="m-0">
                Amet justo dolor lorem kasd amet magna sea stet eos vero lorem
                ipsum dolore sed
              </p>
              <a className="btn btn-lg btn-primary rounded" href="">
                <i className="bi bi-arrow-right" />
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.9s">
            <div className="position-relative bg-primary rounded h-100 d-flex flex-column align-items-center justify-content-center text-center p-5">
              <h3 className="text-white mb-3">Call Us For Quote</h3>
              <p className="text-white mb-3">
                Clita ipsum magna kasd rebum at ipsum amet dolor justo dolor est
                magna stet eirmod
              </p>
              <h2 className="text-white mb-0">+012 345 6789</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Service End */}

   {/* Quote Start */}
   <div className="container-fluid py-5 wow fadeInUp" ref= {how} data-wow-delay="0.1s">
      <div className="container py-5">
        <div className="row g-5">
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
          <div className="col-lg-7">
            <div className="section-title position-relative pb-3 mb-5">
              <h5 className="fw-bold text-primary text-uppercase">
                쉬운 설문조사 만들기
              </h5>
              <h1 className="mb-0">
                Make a survey easily
              </h1>
            </div>
            
            <p className="mb-4">
              Eirmod sed tempor lorem ut dolores. Aliquyam sit sadipscing kasd
              ipsum. Dolor ea et dolore et at sea ea at dolor, justo ipsum duo
              rebum sea invidunt voluptua. Eos vero eos vero ea et dolore eirmod
              et. Dolores diam duo invidunt lorem. Elitr ut dolores magna sit. Sea
              dolore sanctus sed et. Takimata takimata sanctus sed.
            </p>
           
          </div>
          
          
        </div>
      </div>
    </div>
    {/* Quote End */}

    
    {/* Quote Start */}
    <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
      <div className="container py-5">
        <div className="row g-5">
          <div className="col-lg-7">
            <div className="section-title position-relative pb-3 mb-5">
              <h5 className="fw-bold text-primary text-uppercase">
                쉬운 설문조사 만들기
              </h5>
              <h1 className="mb-0">
                Make a survey easily
              </h1>
            </div>
            
            <p className="mb-4">
              Eirmod sed tempor lorem ut dolores. Aliquyam sit sadipscing kasd
              ipsum. Dolor ea et dolore et at sea ea at dolor, justo ipsum duo
              rebum sea invidunt voluptua. Eos vero eos vero ea et dolore eirmod
              et. Dolores diam duo invidunt lorem. Elitr ut dolores magna sit. Sea
              dolore sanctus sed et. Takimata takimata sanctus sed.
            </p>
           
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
            Professional Stuffs Ready to Help Your Business
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

