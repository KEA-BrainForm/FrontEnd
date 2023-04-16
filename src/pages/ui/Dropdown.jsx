import React, { useState } from 'react';
import MultipleChoice from '../Survey/MultipleChoice';
import ShortAnswer from '../Survey/ShortAnswer';
import YesOrNo from '../Survey/YesOrNo';
import Button from '../ui/Button';
import SurveyForm from './SurveyForm';


function Dropdown() {
  const [selectedComponent, setSelectedComponent] = useState('MultipleChoice');

  const [questions, setQuestions] = useState([]);

  const handleAddQuestions = (newQuestion) => {
      setQuestions([...questions, newQuestion]);
  };


  const handleChange = (event) => {
    setSelectedComponent(event.target.value);
  };

  const renderComponent = () => {
    switch (selectedComponent) {
      case 'MultipleChoice':
        return <MultipleChoice onAddQuestions={handleAddQuestions} questionsLen={questions.length}/>;
      case 'ShortAnswer':
        return <ShortAnswer onAddQuestions={handleAddQuestions} questionsLen={questions.length}/>;
      case 'YesOrNo':
        return <YesOrNo onAddQuestions={handleAddQuestions} questionsLen={questions.length}/>;
      default:
        return null;
    }
  };

  return (
    <div>
      <select value={selectedComponent} onChange={handleChange}>
        <option value="MultipleChoice">객관식</option>
        <option value="ShortAnswer">주관식</option>
        <option value="YesOrNo">찬부식</option>
      </select>
      {renderComponent()}
      <div>

        <SurveyForm questions={questions} setQuestions={setQuestions} />

      </div>
    </div>
  );
}

export default Dropdown;