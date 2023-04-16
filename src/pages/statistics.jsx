import './css/stat.css';
import Chat from './chat';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

const Statistics = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const surveyName = searchParams.get('surveyName');
    // 필터 상태값 추가
    const questions = [
        {
            title: '질문 1',
            type: '객관식',
            options: [
                { text: '옵션 1', count: 10 },
                { text: '옵션 2', count: 20 },
                { text: '옵션 3', count: 5 },
            ],
        },
        {
            title: '질문 2',
            type: '주관식',
            options: [
                { text: '옵션 A', user: 'a' },
                { text: '옵션 B', user: 'b' },
                { text: '옵션 C', user: 'c' },
                { text: '옵션 D', user: 'd' },
                { text: '옵션 E', user: 'e' },
                { text: '옵션 F', user: 'f' },
                { text: '옵션 G', user: 'g' },
            ],
        },
        {
            title: '질문 3',
            type: '찬반투표',
            options: [
                { text: '찬성', count: 10 },
                { text: '반대', count: 20 },
            ],
        },
    ];

    const [showAll, setShowAll] = useState(false); // 초기값: false

    const handleShowAllClick = () => {
        setShowAll(true); // showAll 상태를 true로 변경
    };

    const handleShowLessClick = () => {
        setShowAll(false); // showAll 상태를 false로 변경
    };

    return (
        <div className='background'>
            <div className='left-side'>
                <h2>{surveyName}의 통계</h2>
                {questions.map((question, index) => (
                    <div key={index}>
                        <h2 style={{ marginTop: '40px' }}>{question.title}</h2>
                        <div style={{ marginTop: '20px' }}>
                            {question.type === '주관식' ?
                                (showAll ? // showAll이 true이면 모든 주관식 옵션 렌더링
                                    question.options.map((option, optionIndex) => (
                                        <li key={optionIndex}>
                                            {option.text} : User Name: {option.user}
                                        </li>
                                    )) :
                                    question.options.slice(0, 3).map((option, optionIndex) => ( // showAll이 false이면 첫 3개의 주관식 옵션만 렌더링
                                        <li key={optionIndex}>
                                            {option.text} : User Name: {option.user}
                                        </li>
                                    ))
                                ) :
                                question.options.map((option, optionIndex) => (
                                    <li key={optionIndex}>
                                        {option.text} : {option.count} 표
                                    </li>
                                ))
                            }
                        </div>
                        {!showAll && question.type === '주관식' && ( // showAll이 false이고 주관식 질문일 때만 버튼 렌더링
                            <button className='button' onClick={handleShowAllClick} >▼</button>
                        )}
                        {showAll && question.type === '주관식' && ( // showAll이 false이고 주관식 질문일 때만 버튼 렌더링
                            <button className='button' onClick={handleShowLessClick}>▲</button>
                        )}
                    </div>
                ))}
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
                    <label>
                        <input type='checkbox' name='gender' value='other' />기타
                    </label>
                    <h3 style={{ marginTop: '40px' }}>연령대</h3>
                    <label>
                        <input type='checkbox' name='age' value='10s' />10대
                    </label>
                    <label>
                        <input type='checkbox' name='age' value='20s' />20대
                    </label>
                    <label>
                        <input type='checkbox' name='age' value='30s' />30대
                    </label>
                    <label>
                        <input type='checkbox' name='age' value='40s' />40대
                    </label>
                    <label>
                        <input type='checkbox' name='age' value='50s' />50대 이상
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

                    <button className="apply-filter-button">필터 적용</button>
                </div>
            </div>
        </div>
    );
};

export default Statistics;
