import React from 'react';
import TextInput from './TextInput';

function ResSurveyItem(props) {
  const { question, onDelete, questionType } = props;



  

  function renderOptions() {
    const options = [];
    for (let i = 1; i <= 5; i++) {
      if (question[`choice${i}`]) {
        options.push(
          <div key={i}>
            <input
              type="radio"
              name={`question-${question.num}`}
              value={question[`choice${i}`]}
              onChange={handleOptionChange}
              required
            />
            {question[`choice${i}`]}
          </div>
        );
      }
    }
    return options;
  }

  function renderYesNo() {
    return (
      <form>
        <input
          type="radio"
          name={`question-${question.num}`}
          value="true"
          required
        />
        참
        <input
          type="radio"
          name={`question-${question.num}`}
          value="false"
          required
        />
        거짓
      </form>
    );
  }

  function renderShortAnswer() {
    return (
      <div>
        <TextInput />
      </div>
    );
  }

  switch (questionType) {
    case 'subjectiveQuestions':
      return (
        <div>
          <h2>Q.{question.num}</h2>
          <p>질문: {question.question}</p>
          {renderShortAnswer()}
        
        </div>
      );
    case 'multipleChoiceQuestions':
      return (
        <div>
          <h2>Q.{question.num}</h2>
          <p>질문: {question.question}</p>
          {renderOptions()}
         
        </div>
      );
    case 'yesOrNoQueQuestions':
      return (
        <div>
          <h2>Q.{question.num}</h2>
          <p>질문: {question.question}</p>
          {renderYesNo()}
      
    
        </div>
      );
    default:
      return null;
  }
}

export default ResSurveyItem;
