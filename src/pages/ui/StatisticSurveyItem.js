import React, { useState } from 'react';
import ResTextInput from './ResTextInput';
import styles from '../css/SurveyItem.module.css';

// 통계 화면에 사용되는 설문 항목 item
function StatisticSurveyItem(props) {
  const { question, onDelete, questionType, onSelectedAnswer } = props;
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [selectedshortAnswer, setonShortAnswer] = useState('');

  function handleRadioOptionChange(e) {
    setSelectedAnswer(e.target.value);
    onSelectedAnswer(question.id, e.target.value);
  }

  function handleShortAnswerChange(e) {
    setonShortAnswer(e.target.value);
    onSelectedAnswer(question.id, e.target.value);
  }

  // 원본
  function renderOptions() {
    let opt = [0, 0, 0, 0, 0, 0]; // (index+1)번을 선택한 인원수
    console.log("question: ", question);
    console.log("questionmultipleChoiceAnswers.: ", question.multipleChoiceAnswers);
    console.log("questionmultipleChoiceAnswers.id: ", question.multipleChoiceAnswers[0].id);  // ${id}번 보기 출력 (선택한 보기)
    console.log("questionmultipleChoiceAnswers.answer: ", question.multipleChoiceAnswers[0].answer);  // ${id}번 보기 내용 (선택한 보기)
    let num = 0;
    const options = [];
    for (let i = 1; i <= 5; i++) {
      if (question[`choice${i}`]) {
        for(let j = 0; j<question.multipleChoiceAnswers.length; j++){
          if(question[`choice${i}`] === question.multipleChoiceAnswers[j].answer){
            opt[i+1] +=1;
          }
        }
        
        options.push(
          <div key={i}>
            <p> 보기{i}: {question[`choice${i}`]} - 선택한 전체 인원: {opt[i+1]}명 </p>
          </div>
        );

        // options.push(
        //   <div key={i}>
        //     <text> 보기{i}: {question[`choice${i}`]}
        //     </text>
        //   </div>
        // );
      }
    }

    return (
      <div>
        <button onClick={handleShowAnswers}>
          {showAnswers ? '통계 숨기기' : '통계 보기'}
        </button>
        {showAnswers && (
          <div>
            {options}
          </div>
        )}
      </div>
    );
  }

  function renderYesNo() {

    return (
      <div>
        <button onClick={handleShowAnswers}>
          {showAnswers ? '통계 숨기기' : '통계 보기'}
        </button>
        {showAnswers && (
          <div>
            <text>참:</text> <br />
            <text>거짓:</text>
          </div>
        )}
      </div>

      // <form>
      //   <input
      //     type="radio"
      //     name={`question-${question.num}`}
      //     value="true"
      //     onChange={handleRadioOptionChange}
      //     required
      //   />
      //   참
      //   <input
      //     type="radio"
      //     name={`question-${question.num}`}
      //     value="false"
      //     onChange={handleRadioOptionChange}
      //     required
      //   />
      //   거짓
      // </form>
    );
  }

  function renderShortAnswer() {
    return (
      <div>
        <button onClick={handleShowAnswers}>
          {showAnswers ? '답변 숨기기' : '답변 보기'}
        </button>
        {showAnswers && (
          <div>
            {/* 답변 리스트 */}

            <p>Answer 1</p>
            <p>Answer 2</p>
            <p>Answer 3</p>
          </div>
        )}
      </div>
    )
  }

  const [showAnswers, setShowAnswers] = useState(false);  // 답변 보기 버튼 -> 보기 or 숨기기 setting

  const handleShowAnswers = () => {
    setShowAnswers(!showAnswers);
  };

  switch (questionType) {
    case 'subjectiveQuestions':
      return (
        <div className={styles.surveyItem}>
          <h2 className={styles.questionNumber}>Q.{question.num}</h2>
          <h5>주관식</h5>
          <p className={styles.questionTitle}>질문: {question.question}</p>
          {renderShortAnswer()}

        </div>
      );
    case 'multipleChoiceQuestions':
      return (
        <div className={styles.surveyItem}>
          <h2 className={styles.questionNumber}>Q.{question.num}</h2>
          <h5>객관식</h5>
          <p className={styles.questionTitle}>질문: {question.question}</p>
          {renderOptions()}
        </div>
      );
    case 'yesOrNoQuestions':
      return (
        <div className={styles.surveyItem}>
          <h2 className={styles.questionNumber}>Q.{question.num}</h2>
          <h5>찬부식</h5>
          <p className={styles.questionTitle}>질문: {question.question}</p>
          {renderYesNo()}
        </div>
      );
    default:
      return null;
  }
}

export default StatisticSurveyItem;
