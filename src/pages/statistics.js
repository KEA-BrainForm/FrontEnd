import './css/stat.css';

import { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import StatisticSurveyItem from './ui/StatisticSurveyItem';
import axios from 'axios';

const token = localStorage.getItem("ACCESS_TOKEN");

const SurveyStatistic = () => {
    const { surveyId } = useParams();
    const [surveyData, setSurveyData] = useState(null); // 굳이? 그냥 전역변수로 받아도 될 거 같음
    const [sortedQuestions, setSortedQuestions] = useState([]);

    // test start ===
    // test data
    const [testData, setTestData] = useState(
        [   // 서버로 받은 데이터를 이 형식으로 바꿔주어야 파이차트가 그려짐.  
            ["Task", "Hours per Day"],  //  구분 (null값이어도 상관없음)
            ["Work", 11],   // [보기1 내용, 답변 개수] 
            ["Eat", 2],     // [보기2 내용, 답변 개수] 
            ["Commute", 2],
            ["Watch TV", 2],
            ["Sleep", 7],
        ]
    );
    // test end ===


    useEffect(() => {
        const fetchSurvey = async () => {
            try {
                const response = await axios.get(`/api/statistic/surveys/${surveyId}`);
                console.log("0th. response: ", response.data);
                setSurveyData(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchSurvey();
    }, [surveyId]);

    // surveyData 에 들어가있는 리턴값으로 dataTest 배열의 꼴로 바꿔주어야 함..-> 그래야 차트를 그릴 수가 있으
    useEffect(() => {
        if (surveyData) {
            // const questions = [...surveyData.yesOrNoQuestions, ...surveyData.multipleChoiceQuestions, ...surveyData.subjectiveQuestions];
            // const sortedQuestions = questions.sort((a, b) => a.num - b.num);
            // setSortedQuestions(sortedQuestions);
            let questions = [...surveyData.yesOrNoQuestions, ...surveyData.multipleChoiceQuestions, ...surveyData.subjectiveQuestions];
            questions = questions.sort((a, b) => a.num - b.num);
            setSortedQuestions(questions);
            console.log("** 1st. surveyData: ", questions);
        }
    }, [surveyData]);

    if (!surveyData) {
        return <div>Loading...</div>; // 데이터가 로딩 중일 때 보여줄 내용
    }



    // 필터 적용 버튼을 클릭했을 때 호출되는 함수
    const ApplyFilters = async () => {  // 이 메소드가 실행될 때마다 파이차트도 업데이트가 되도록 되어야 함.
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
            const response = await axios.post('http://127.0.0.1:8090/filter', { //  이 주소만 다시 스프링부트로 바꾸면 됨.
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
            console.log("필터 적용 성공", response.data);   // 필터 요청을 보냈을 때의 리턴 값
            setTestData(response.data);  // ** 서버에서 아예 testData 형식으로 보내주면 편함!! **

        } catch (error) {
            console.error("필터 적용 실패", error);
        }

    };


    // try { // 필터 요청
    //     const response = await axios.post('/api/statistic/surveys/filter', {
    //         genders: selectedGenders,
    //         ages: selectedAges,
    //         occupations: selectedOccupations,
    //         surveyId: surveyId
    //     }, {
    //         headers: {
    //             'Content-Type': 'application/json', // 요청 본문의 타입을 지정합니다.
    //             Authorization: `Bearer ${token}` // JWT 토큰을 헤더에 추가합니다.
    //         }
    //     });
    //     console.log("필터 적용 성공", response.data);   // 필터 요청을 보냈을 때의 리턴 값
    //     // setSurveyData(response.data); 으로 해서 survey변수로 업데이트 저장하면 됨.
    //     // 
    //     // response.data 이 값으로 파이차트를 다시 업데이트 해야 함.
    // } catch (error) {
    //     console.error("필터 적용 실패", error);
    // }
    // };


    // // 필터 적용 버튼을 클릭했을 때 호출되는 함수
    // const applyFilters = async () => {  // 이 메소드가 실행될 때마다 파이차트도 업데이트가 되도록 되어야 함.
    //     // 선택된 체크박스 값을 가져옵니다.
    //     const genderCheckboxes = document.querySelectorAll('input[name="gender"]:checked');
    //     const ageCheckboxes = document.querySelectorAll('input[name="age"]:checked');
    //     const occupationCheckboxes = document.querySelectorAll('input[name="occupation"]:checked');

    //     // 선택된 체크박스 값을 배열로 변환합니다.
    //     const selectedGenders = Array.from(genderCheckboxes).map((checkbox) => checkbox.value);
    //     const selectedAges = Array.from(ageCheckboxes).map((checkbox) => checkbox.value);
    //     const selectedOccupations = Array.from(occupationCheckboxes).map((checkbox) => checkbox.value);

    //     const queryString = new URLSearchParams({
    //         genders: selectedGenders,
    //         ages: selectedAges,
    //         occupations: selectedOccupations,
    //         surveyId: surveyId,
    //     }).toString();

    //         const response = await axios.post('http://127.0.0.1:8090/filter', {
    //             genders: selectedGenders,
    //             ages: selectedAges,
    //             occupations: selectedOccupations,
    //             surveyId: surveyId
    //         }, {
    //             headers: {
    //                 'Content-Type': 'application/json', // 요청 본문의 타입을 지정합니다.
    //                 Authorization: `Bearer ${token}` // JWT 토큰을 헤더에 추가합니다.
    //             }
    //         });
    //         console.log("필터 적용 성공", response.data);   // 필터 요청을 보냈을 때의 리턴 값

    //     // try { // 필터 요청
    //     //     const response = await axios.post('/api/statistic/surveys/filter', {
    //     //         genders: selectedGenders,
    //     //         ages: selectedAges,
    //     //         occupations: selectedOccupations,
    //     //         surveyId: surveyId
    //     //     }, {
    //     //         headers: {
    //     //             'Content-Type': 'application/json', // 요청 본문의 타입을 지정합니다.
    //     //             Authorization: `Bearer ${token}` // JWT 토큰을 헤더에 추가합니다.
    //     //         }
    //     //     });
    //     //     console.log("필터 적용 성공", response.data);   // 필터 요청을 보냈을 때의 리턴 값
    //     //     // setSurveyData(response.data); 으로 해서 survey변수로 업데이트 저장하면 됨.
    //     //     // 
    //     //     // response.data 이 값으로 파이차트를 다시 업데이트 해야 함.
    //     // } catch (error) {
    //     //     console.error("필터 적용 실패", error);
    //     // }
    // };


    // const dataTest = [
    //     ["Task", "Hours per Day"],
    //     ["Work", 11],
    //     ["Eat", 2],
    //     ["Commute", 2],
    //     ["Watch TV", 2],
    //     ["Sleep", 7],
    //   ];

    // surveyData 안에 들어가있는 값들로 dataTest 이차원배열의 형태로 만들어주면 됨.
    return (
        <div className='background-statistic'>
            <div className='left-side'>
                <h1>제목 : {surveyData.title}</h1>

                {sortedQuestions.map((question) => {
                    let questionType;
                    if (surveyData.yesOrNoQuestions.includes(question)) {
                        questionType = "yesOrNoQuestions";
                    } else if (surveyData.multipleChoiceQuestions.includes(question)) {
                        questionType = "multipleChoiceQuestions";
                    } else if (surveyData.subjectiveQuestions.includes(question)) {
                        questionType = "subjectiveQuestions";
                    } else {
                        questionType = null;
                    }
                    return (
                        <StatisticSurveyItem
                            key={question.id}   // 사용되지 않음
                            question={question} // sortedQuestions 배열 안의 요소, 각 번호에 해당하는 질문 1개 데이터 객체.
                            questionType={questionType} // sortedQuestions 배열 안의 요소, 즉 질문 1개의 질문 유형(객관식||주관식||찬부식)
                            // data = {dataTest} // 질문 1개의 통계 파이차트를 그리기 위한 데이터
                            data={testData}
                        // sortedQuestions={sortedQuestions}
                        />
                    );
                })}<br />
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

                    <button className="apply-filter-button" onClick={ApplyFilters}>필터 적용</button>
                </div>
            </div>
        </div>
    );
}

export default SurveyStatistic;
