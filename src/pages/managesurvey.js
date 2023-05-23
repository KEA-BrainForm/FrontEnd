import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './css/managesurvey.css';
import search from '../images/search.png';
import filter from '../images/filter.png';


const createdSurvey = [
    { id: 1, name: "생성한 설문 제목 1", ddate: "2023/04/23 (진행중)" },
    { id: 2, name: "생성한 설문 제목 2", ddate: "2023/05/04 (진행중)" },
    { id: 3, name: "생성한 설문 제목 3", ddate: "2023/02/24 (마감)" }
];

const answeredSurvey = [
    { id: 1, name: "응답한 설문 제목 1", ddate: "2023/04/25 (진행중)" },
    { id: 2, name: "응답한 설문 제목 2", ddate: "2023/05/02 (진행중)" },
    { id: 3, name: "응답한 설문 제목 3", ddate: "2023/02/11 (마감)" }
]
const ManagementPage = () => {
    const [surveyData, setSurveyData] = useState(null); //
    const token = localStorage.getItem("ACCESS_TOKEN");

    useEffect(() => {
        async function fetchData() {
            try {
                console.log("ACCESS-Token: ", token);
                // 페이지가 마운트된 후에 서버로 GET 요청 보내기
                const response = await axios.get('/api/data', {
                    headers: {
                        Authorization: `Bearer ${token}` // JWT 토큰을 헤더에 추가합니다.
                    }
                });

                console.log("result: ", response);
                setSurveyData(response.data); // 데이터를 상태로 설정합니다.
                console.log("response.data: ", response.data);
            } catch (error) {
                console.error(error);
            }
        }

        fetchData();
    }, []);

    return (
        <Managesurvey surveyData={surveyData} />
    )
}

const Managesurvey = ({ surveyData }) => {
    const [selectedSurvey, setSelectedSurvey] = useState('');

    

    if (!surveyData) {
        return <div>Loading...</div>; // 데이터가 로딩 중일 때 보여줄 내용
    }

    const handleStatisticsClick = (surveyData) => {
        setSelectedSurvey(surveyData);
    };

    return (
        <div className='background1'>
            <h2>생성한 설문 목록</h2><br />
            <table>
                <colgroup>
                    <col className="col1" />
                    <col className="col2" />
                    <col className="col3" />
                    <col className="col4" />
                    <col className="col5" />
                    <col className="col6" />
                    <col className="col7" />
                </colgroup>
                <thead>
                    <tr>
                        <th style={{ textAlign: 'left' }}><img src={search} alt="돋보기" /><button>검색</button>&nbsp;&nbsp;&nbsp;<img src={filter} alt="필터" /><button>필터</button></th>
                    </tr>
                </thead>
                <tbody>
                    {surveyData.map((survey, index) => (
                        // {createdSurvey.map((survey) => (
                        <tr key={survey.id}>
                            <td>Q{index + 1}</td>   {/* 이 id가 1부터 survey.length가 되어야 함.*/}
                            <td>{survey.title}</td>
                            <td>
                                <Link to={`/managesurvey/survey/${encodeURIComponent(survey.id)}/statistic`}><button>통계</button></Link>
                            </td>
                            <td>
                                <button>수정</button>
                            </td>
                            <td>
                                <button>삭제</button>
                            </td>
                            <td>
                                <button>공유</button>
                            </td>
                            <td>{survey.ddate}</td>
                        </tr>
                    ))}


                </tbody>
            </table>

            <h2><br /><br />응답한 설문 목록</h2><br />
            <table>
                <colgroup>
                    <col className="col1" />
                    <col className="col2" />
                    <col className="col3" />
                    <col className="col4" />
                    <col className="col5" />
                    <col className="col6" />
                    <col className="col7" />
                </colgroup>
                <thead>
                    <tr>
                        <th style={{ textAlign: 'left' }}><img src={search} alt="돋보기" /><button>검색</button>&nbsp;&nbsp;&nbsp;<img src={filter} alt="필터" /><button>필터</button></th>
                    </tr>
                </thead>
                <tbody>
                    {answeredSurvey.map((survey, index) => (
                        <tr key={survey.id}>
                            <td>Q{index + 1}</td>
                            <td>{survey.title}</td>
                            <td>

                                <button onClick={() => setSelectedSurvey(survey.title)}>통계</button>

                            </td>
                            <td>
                                <button>수정</button>
                            </td>
                            <td>
                                <button>삭제</button>
                            </td>
                            <td>
                                <button>공유</button>
                            </td>
                            <td>{survey.ddate}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    );
}

// export default Managesurvey;
export default ManagementPage;
