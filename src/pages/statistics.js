import './css/stat.css';

import { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import StatisticSurveyItem from './ui/StatisticSurveyItem';
import axios from 'axios';
const token = localStorage.getItem("ACCESS_TOKEN");

const SurveyStatistic = () => {

    const { surveyId } = useParams();
    const [surveyData, setSurveyData] = useState(null);
    // const [sortedQuestions, setSortedQuestions] = useState([]);
    

    useEffect(() => {
        const fetchSurvey = async () => {
            try {
                const response = await axios.get(`/api/statistic/surveys/${surveyId}`);
                console.log("response: ", response.data);
                setSurveyData(response.data);


            } catch (error) {
                console.error(error);
            }
        };

        fetchSurvey();
    }, [surveyId]);


    if (!surveyData) {
        return <div>Loading...</div>; // 데이터가 로딩 중일 때 보여줄 내용
    }



    // 필터 적용 버튼을 클릭했을 때 호출되는 함수
    const applyFilters = async () => {
        // 선택된 체크박스 값을 가져옵니다.
        const genderCheckboxes = document.querySelectorAll('input[name="gender"]:checked');
        const ageCheckboxes = document.querySelectorAll('input[name="age"]:checked');
        const occupationCheckboxes = document.querySelectorAll('input[name="occupation"]:checked');

        // 선택된 체크박스 값을 배열로 변환합니다.
        const selectedGenders = Array.from(genderCheckboxes).map((checkbox) => checkbox.value);
        const selectedAges = Array.from(ageCheckboxes).map((checkbox) => checkbox.value);
        const selectedOccupations = Array.from(occupationCheckboxes).map((checkbox) => checkbox.value);

        const queryString = new URLSearchParams({
            genders: selectedGenders,
            ages: selectedAges,
            occupations: selectedOccupations,
            surveyId: surveyId,
        }).toString();

        try {
            const response = await axios.post('/api/statistic/surveys/filter', {      //POST로 요청
                genders: selectedGenders,
                ages: selectedAges,
                occupations: selectedOccupations,
                surveyId: surveyId
            }, {
                headers: {
                    'Content-Type': 'application/json', // 요청 본문의 타입을 지정합니다.
                    Authorization: `Bearer ${token}` // JWT 토큰을 헤더에 추가합니다.
                }
            });

            console.log('** 2nd. 필터 적용 완료 데이터:', response.data);
            let responseData = response.data;
            let multi=responseData.map(data => data.multipleChoiceQuestions);
            console.log("multi: ", multi);
        } catch (error) {
            console.error("필터 적용 실패", error);
        }
    }

    
    const sortedQuestionsTest = [...surveyData.yesOrNoQuestions, ...surveyData.multipleChoiceQuestions, ...surveyData.subjectiveQuestions];
    sortedQuestionsTest.sort((a, b) => {
        return a.num - b.num;   // num 크기 순서대로 정렬
    });
    console.log("** 1st. surveyData: ", sortedQuestionsTest);

    return (
        <div className='background-statistic'>
            <div className='left-side'>
                <h1>제목 : {surveyData.title}</h1>

                {sortedQuestionsTest.map((question) => {
                    let questionType;
                    if (surveyData.yesOrNoQuestions.includes(question)) {
                        questionType = "yesOrNoQuestions";
                    } else if (surveyData.multipleChoiceQuestions.includes(question)) {
                        questionType = "multipleChoiceQuestions";
                    } else if (surveyData.subjectiveQuestions.includes(question)) {
                        questionType = "subjectiveQuestions";
                    }
                    return (
                        <StatisticSurveyItem
                            key={question.id}
                            question={question}
                            questionType={questionType}
                            sortedQuestions={sortedQuestionsTest}
                        />
                    );
                })}<br></br>
            </div>
            <div className='right-side'>
                <h2 style={{ marginBottom: '40px' }}>필터</h2>
                <div className='filters'>
                    <h3>성별</h3>
                    <label>
                        <input type='checkbox' name='gender' value='male' />남성
                    </label>
                    <label>
                        <input type='checkbox' name='gender' value='female' />여성
                    </label>
                    <h3 style={{ marginTop: '40px' }}>연령대</h3>
                    <label>
                        <input type='checkbox' name='age' value='10' />10대
                    </label>
                    <label>
                        <input type='checkbox' name='age' value='20' />20대
                    </label>
                    <label>
                        <input type='checkbox' name='age' value='30' />30대
                    </label>
                    <label>
                        <input type='checkbox' name='age' value='40' />40대
                    </label>
                    <label>
                        <input type='checkbox' name='age' value='50+' />50대 이상
                    </label>
                    <h3 style={{ marginTop: '40px' }}>직업</h3>
                    <label>
                        <input type='checkbox' name='occupation' value='student' />학생
                    </label>
                    <label>
                        <input type='checkbox' name='occupation' value='office' />사무직
                    </label>
                    <label>
                        <input type='checkbox' name='occupation' value='service' />서비스직
                    </label>
                    <label>
                        <input type='checkbox' name='occupation' value='freelancer' />프리랜서
                    </label>

                    <button className="apply-filter-button" onClick={applyFilters}>필터 적용</button>
                </div>
            </div>
        </div>
    );
}

export default SurveyStatistic;
