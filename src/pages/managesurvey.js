import React, { useState, useEffect } from 'react';

import axios from 'axios';
import { Link } from 'react-router-dom';
import './css/managesurvey.css';
import search from '../images/search.png';
import filter from '../images/filter.png';

import Card from '../pages/card';
import './css/pages.css';
import Pagination from 'react-bootstrap/Pagination';



const PAGE_SIZE = 1; // You can adjust this to change how many surveys are shown per page

const answeredSurvey = [
  { id: 1, title: "응답한 설문 제목 1", ddate: "2023/04/25 (진행중)" },
  { id: 2, title: "응답한 설문 제목 2", ddate: "2023/05/02 (진행중)" },
  { id: 3, title: "응답한 설문 제목 3", ddate: "2023/02/11 (마감)" }
]

const ManagementPage = () => {
    
   


  const [surveyData, setSurveyData] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const token = localStorage.getItem('ACCESS_TOKEN');

  useEffect(() => {
    async function fetchData() {
      try {
        console.log('ACCESS-Token: ', token);
        const response = await axios.get('/api/data', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        console.log('result: ', response);
        setSurveyData(response.data);
        console.log('response.data: ', response.data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  return <Managesurvey surveyData={surveyData} currentPage={currentPage} setCurrentPage={setCurrentPage} />;
};

const Managesurvey = ({ surveyData, currentPage, setCurrentPage }) => {
  const [selectedSurvey, setSelectedSurvey] = useState('');


  if (!surveyData) {
    return <div>Loading...</div>;
  }

  const handleStatisticsClick = (surveyData) => {
    setSelectedSurvey(surveyData);
  };

  return (

    
    <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
      <div className="container py-5 grid-margin wow fadeInUp">
        <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{ maxWidth: 600 }}>
          <Pagination className='pagination'>
            <Pagination.Item active={currentPage === 1} onClick={() => setCurrentPage(1)}>
              내가 생성한 설문
            </Pagination.Item>
            <Pagination.Item active={currentPage === 2} onClick={() => setCurrentPage(2)}>
              내가 응답한 설문
            </Pagination.Item>
          </Pagination>
          
          {currentPage === 1 && (
            <>
              <h5 className="fw-bold text-primary  text-uppercase wow">Manage Survey</h5>
              <h1 className="mb-0">Created by me</h1>
            </>
          )}

          {currentPage === 2 && (
            <>
              <h5 className="fw-bold text-primary text-uppercase">Manage Survey</h5>
              <h1 className="mb-0">Responsed by me</h1>
            </>
          )}
        </div>

        {currentPage === 1 && (
          <div className="row g-3">
            {surveyData.map((survey) => (
              <div className="col-lg-3" key={survey.id}>
                <Card itemId={survey.id.toString()} id={survey.id} title={survey.title} />
              </div>
            ))}
          </div>
        )}

        {currentPage === 2 && (
          <div className="row g-3">
            {answeredSurvey.map((survey) => (
              <div className="col-lg-3" key={survey.id}>
                <Card itemId={survey.id.toString()} id={survey.id} title={survey.title} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ManagementPage;
