import React, { useState, useEffect } from 'react';
import styles from '../css/SurveyItem.module.css';
import { PieChart } from 'react-minimal-pie-chart';

// 통계 화면에 사용되는 설문 항목 item
function StatisticSurveyItem(props) {
  const { question, questionType, onSelectedAnswer, pieChartData } = props;
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [selectedshortAnswer, setonShortAnswer] = useState('');


  
  function RenderOptions() {
    let opt = [0, 0, 0, 0, 0, 0]; // (index+1)번을 선택한 인원수
    const options = [];
    const label = [];
    console.log("question: ", question);
    console.log("questionmultipleChoiceAnswers.: ", question.multipleChoiceAnswers);
    console.log("questionmultipleChoiceAnswers.id: ", question.multipleChoiceAnswers[0].id);  // ${id}번 보기 출력 (선택한 보기)
    console.log("questionmultipleChoiceAnswers.answer: ", question.multipleChoiceAnswers[0].answer);  // ${id}번 보기 내용 (선택한 보기)

    for (let i = 1; i <= 5; i++) {
      if (question[`choice${i}`]) {
        label[i] = String(question[`choice${i}`]);
        for (let j = 0; j < question.multipleChoiceAnswers.length; j++) {
          if (question[`choice${i}`] === question.multipleChoiceAnswers[j].answer) {
            opt[i + 1] += 1;
          }
        }

        options.push(
          <div key={i}>
            <p> 보기{i}: {question[`choice${i}`]} - 선택한 전체 인원: {opt[i + 1]}명 </p>
          </div>
        );

      } else {
        label[i] = '';
      }
    }

    const data = [
      { value: Number(opt[1]), title: String(label[0]), color: '#E38627', label: String(label[0]) },
      { value: Number(opt[2]), title: String(label[1]), color: '#C13C37', label: String(label[1]) },
      { value: Number(opt[3]), title: String(label[2]), color: '#6A2135', label: String(label[2]) },
      { value: Number(opt[4]), title: String(label[3]), color: '#95B8D1', label: String(label[3]) },
      { value: Number(opt[5]), title: String(label[4]), color: '#1C7C54', label: String(label[4]) },
    ];

    const colors = ["#FF6384", "#36A2EB", "#FFCE56", "#8A2BE2", "#3CB371"];

    return (
      <div className={styles.surveyItem}>
        <div>
          <button onClick={handleShowAnswers}>
            {showAnswers ? '통계 숨기기' : '통계 보기'}
          </button>
          {showAnswers && (
            <div>
              {options}
              <div className='piechart'>
                <PieChart
                  radius={40}
                  data={data}
                  animate={true}
                  animationDuration={500}
                  animationEasing="ease-out"
                  label={({ dataEntry }) => {
                    if (dataEntry.value === 0) {
                      return ''; // value가 0인 경우 빈 문자열 반환하여 라벨을 안 보이게 함
                    }
                    return `${dataEntry.title}번 - ${dataEntry.value}명`
                  }}

                  labelStyle={{
                    fontSize: '6px', // 라벨의 폰트 크기 조절
                    fontWeight: 'bold', // 라벨의 글자 굵기 조절
                  }}
                />
              </div>
            </div>
          )}
        </div>
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

  const [showAnswers, setShowAnswers] = useState(false);  // 통계 보기 버튼 -> 보기 or 숨기기 setting

  const handleShowAnswers = () => {
    // setFilteredQuestions(sortedQuestions);
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
      console.log("객관식 파이차트 렌더링")
      console.log()
      return (
        <div className={styles.surveyItem}>
          <h2 className={styles.questionNumber}>Q.{question.num}</h2>
          <h5>객관식</h5>
          <p className={styles.questionTitle}>질문: {question.question}</p>
          {RenderOptions()}
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
