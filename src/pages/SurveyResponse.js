import React, { useEffect, useState } from "react";
import axios from "axios";

import { useParams } from "react-router-dom";

function SurveyResponse() {
  const { surveyId } = useParams();
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log(`${surveyId} !!!`);
        const response = await axios.get(`/api/ques/${surveyId}`);
        setQuestions(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching survey questions:", error);
      }
    };
    
    fetchData();
  }, [surveyId]);

  return (
    <div>
      {questions.map((question, index) => (
        <div key={index}>
          {/* Render each question here */}
          <p>{question.text}</p>
          {/* Render the rest of the question properties */}
        </div>
      ))}
    </div>
  );}

export default SurveyResponse;
