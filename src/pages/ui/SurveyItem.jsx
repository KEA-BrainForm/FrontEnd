
import React from 'react';

import TextInput from './TextInput';
import Styles from '../css/SurveyItem.module.css';

function SurveyItem(props) {


    const { question, onDelete } = props;

    function handleDeleteClick() {
        onDelete(question.id);
    }
    


    function renderOptions() {
        return question.options.map((option) => (
            <div key={option}>
                <input type="radio" name="myCheckbox" value="true" required /> {option.text}
            </div>
        ));
    }

    switch (question.type) {
        case "shortAnswer":
            return (
                <div className={Styles.surveyItem}>
                    <h2 className={Styles.questionNumber}>Q.{question.id}</h2>
                    <p className={Styles.questionTitle}>질문: {question.title}</p>
                    <TextInput />

                    <button className={Styles.deleteButton} onClick={handleDeleteClick}>Delete</button>

                </div>
            );
        case "multipleChoice":
            return (
                <div className={Styles.surveyItem}>
                    <h2 className={Styles.questionNumber}>Q.{question.id}</h2>
                    <p className={Styles.questionTitle}>질문: {question.title}</p>
                    {renderOptions()}

                    <button className={Styles.deleteButton} onClick={handleDeleteClick}>Delete</button>

                </div>
            );
        case "yesOrNo":
            return (
                <div className={Styles.surveyItem}>
                    <h2 className={Styles.questionNumber}>Q.{question.id}</h2>
                    <p className={Styles.questionTitle}>질문: {question.title}</p>
                    <form>
                        <input type="radio" name="myCheckbox" value="true" required /> 참
                        <input type="radio" name="myCheckbox" value="false" required /> 거짓
                        <br />
                    </form>

                    <button className={Styles.deleteButton} onClick={handleDeleteClick}>Delete</button>

                </div>
            );
    }
}

export default SurveyItem;

