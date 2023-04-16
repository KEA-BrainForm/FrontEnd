import React from 'react'
import SurveyItem from './SurveyItem';

function SurveyForm(props) {
    const {questions, setQuestions} = props;
    console.log(questions);

    function handleDeleteQuestion(id) {
      const newQuestions = questions.filter((question) => question.id !== id);
      
      // Assign new IDs to each question
      const updatedQuestions = newQuestions.map((question, index) => {
        return { ...question, id: index+1 };
      });
    
      console.log(updatedQuestions);
      setQuestions(updatedQuestions);
    }

    

  return (
    <div>
    {questions.map((question, index) => {
        return <SurveyItem key={question.id} question={question} onDelete={handleDeleteQuestion}/>;
    })}
    </div>
  )
}

export default SurveyForm;