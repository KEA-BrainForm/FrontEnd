import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Button from "./ui/Button";
import ResSurveyItem from './ui/ResSurveyItem';
import { useParams } from 'react-router-dom';

function SurveyResponse() {
  const { surveyId } = useParams();
  const [surveyData, setSurveyData] = useState(null);

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



  if (!surveyData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>제목 : {surveyData.title}</h1>
      {surveyData.yesOrNoQueQuestions.map((question) => (
        <ResSurveyItem
          key={question.id}
          question={question}
          questionType="yesOrNoQueQuestions"
         
        />
      ))}
      {surveyData.multipleChoiceQuestions.map((question) => (
        <ResSurveyItem
          key={question.id}
          question={question}
          questionType="multipleChoiceQuestions"
          
        />
      ))}
      {surveyData.subjectiveQuestions.map((question) => (
        <ResSurveyItem
          key={question.id}
          question={question}
          questionType="subjectiveQuestions"
         
        />
      ))}

            <Button type="submit" title="설문 응답 제출"></Button>
 
    </div>
  );
}

export default SurveyResponse;
