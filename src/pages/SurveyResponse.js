import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Button from "./ui/Button";
import ResSurveyItem from './ui/ResSurveyItem';
import { useParams, useNavigate } from 'react-router-dom';
import SurveyComplete from './SurveyComplete';
// import { useHistory } from 'react-router-dom';

function SurveyResponse() {
  const { surveyId } = useParams();
  const [surveyData, setSurveyData] = useState(null);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const navigate = useNavigate();

  const handleAfterSubmit = async (event) => {
    event.preventDefault();
    
    // 서버로 데이터를 보내는 로직 작성

    // 다른 페이지로 이동
    navigate("/response-success");
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log(`${surveyId} !!!`);
        const response = await axios.get(`/api/ques/${surveyId}`);
        setSurveyData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching survey questions:', error);
      }
    };

    fetchData();
  }, [surveyId]);

  function handleSelectedAnswer(questionId, questionNum, answer, questionType) {
    const newAnswerObj = {
      questionId,
      questionNum,
      answer,
      type: questionType,
    };

    setSelectedAnswers((prevAnswers) => {
      const index = prevAnswers.findIndex((a) => a.questionNum === questionNum);
      if (index !== -1) {
        const updatedAnswers = [...prevAnswers];
        updatedAnswers[index] = newAnswerObj;
        return updatedAnswers;
      } else {
        return [...prevAnswers, newAnswerObj];
      }
    });
  }



  async function handleSubmit() {
    // Just log the values to be sent in the POST request
    console.log("Survey ID:", surveyId);
    const selectedAnswersJSON = JSON.stringify(selectedAnswers);
    console.log("Selected Answers JSON:", selectedAnswersJSON);
    // localStorage.setItem("ACCESS_TOKEN", token);
    const token = localStorage.getItem("ACCESS_TOKEN");
    console.log("token", token);
    try {
      const response = await axios.post('/api/answer', {
        surveyId: surveyId,
        answers: selectedAnswers, // 변경된 부분: 'answer'를 'answers'로 수정하고 selectedAnswers를 그대로 보냅니다.
      }, {
        headers: {
          'Content-Type': 'application/json', // 요청 본문의 타입을 지정합니다.
          Authorization: `Bearer ${token}` // JWT 토큰을 헤더에 추가합니다.
        }
      });

      if (response.status === 200) {
        console.log('설문 응답이 성공적으로 제출되었습니다.');
      } else {
        console.error('설문 응답 제출에 실패했습니다:', response.status);
      }
    } catch (error) {
      console.error('설문 응답 제출 중 오류가 발생했습니다:', error);
    }
  }


  if (!surveyData) {
    return <div>Loading...</div>;
  }
  const sortedQuestions = [...surveyData.yesOrNoQuestions, ...surveyData.multipleChoiceQuestions, ...surveyData.subjectiveQuestions].sort((a, b) => a.num - b.num);


  console.log("sortedQuestions: ", sortedQuestions);
  return (
    <div>
      <h1>제목 : {surveyData.title}</h1>
      {/* {surveyData.yesOrNoQueQuestions.map((question) => (
        <ResSurveyItem
          key={question.id}
          question={question}
          questionType="yesOrNoQueQuestions"
          onSelectedAnswer={(questionNum, answer) => handleSelectedAnswer(question.id, question.num, answer, 'yesOrNoQueQuestions')}
        />
      ))}
      {surveyData.multipleChoiceQuestions.map((question) => (
        <ResSurveyItem
          key={question.id}
          question={question}
          questionType="multipleChoiceQuestions"
          onSelectedAnswer={(questionNum, answer) => handleSelectedAnswer(question.id, question.num, answer, 'multipleChoiceQuestions')}
        />
      ))}
      {surveyData.subjectiveQuestions.map((question) => (
        <ResSurveyItem
          key={question.id}
          question={question}
          questionType="subjectiveQuestions"
          onSelectedAnswer={(questionNum, answer) => handleSelectedAnswer(question.id, question.num, answer, 'subjectiveQuestions')}
        />
      ))} */}
      {sortedQuestions.map((question) => {
        let questionType;
        if (surveyData.yesOrNoQuestions.includes(question)) {
          questionType = "yesOrNoQuestions";
        } else if (surveyData.multipleChoiceQuestions.includes(question)) {
          questionType = "multipleChoiceQuestions";
        } else if (surveyData.subjectiveQuestions.includes(question)) {
          questionType = "subjectiveQuestions";
        }
        return (
          <ResSurveyItem
            key={question.id}
            question={question}
            questionType={questionType}
            onSelectedAnswer={(questionNum, answer) =>
              handleSelectedAnswer(
                question.id,
                question.num,
                answer,
                questionType
              )
            }
          />
        );
      })}
    <form onSubmit={handleAfterSubmit}>
      <Button type="submit" title="설문 응답 제출" onClick={handleSubmit}></Button>
      </form>
    </div>
  );
}

export default SurveyResponse;