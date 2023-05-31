import React from 'react'
import SurveyItem from './SurveyItem';

// function SurveyForm(props) {



export const SurveyForm = (props) => {
// export const SurveyForm = (props) => {
    const {questions, setQuestions} = props;
   
    console.log("퀘스천",questions);

    function handleDeleteQuestion(id) {
      const newQuestions = questions.filter((question) => question.id !== id);
      
      // Assign new IDs to each question
      const updatedQuestions = newQuestions.map((question, index) => {
        return { ...question, id: index+1 };
      });
    
      
      setQuestions(updatedQuestions);
    }

    

  return (
    <div>

{questions.map((question) => {
  let questionType;
  if (question.hasOwnProperty('yesOrNoAnswer')) {
    questionType = "yesOrNo";
    question['types'] = 'yesOrNo'; // add type key with value 'yesOrNo'
  } else if (question.hasOwnProperty('subjectiveAnswers')) {
    questionType = "shortAnswer";
    question['types'] = 'shortAnswer'
  } else if (question.hasOwnProperty('multipleChoiceAnswers')) {
    questionType = "multipleChoice";
    question['types'] = 'multipleChoice'
    
  }

      return (
        <SurveyItem
          key={question.id}
          question={question}
          questionType={questionType}
          onDelete = {handleDeleteQuestion}
        />
      );
    })}
  

   
    </div>
  )
}

export default SurveyForm;