
import React from 'react';
import Button from "./Button";
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

                    <Button className={Styles.deleteButton} onClick={handleDeleteClick} title="Delete"></Button>

                </div>
            );
        case "multipleChoice":
            return (
                <div className={Styles.surveyItem}>
                    <h2 className={Styles.questionNumber}>Q.{question.id}</h2>
                    <p className={Styles.questionTitle}>질문: {question.title}</p>
                    {renderOptions()}

                    <Button className={Styles.deleteButton} onClick={handleDeleteClick} title="Delete">Delete</Button>

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

                    <Button className={Styles.deleteButton} onClick={handleDeleteClick} title="Delete">Delete</Button>

                </div>
            );
    }
}

export default SurveyItem;

