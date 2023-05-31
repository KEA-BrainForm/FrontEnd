import React, { useState } from 'react';
import Button from "./Button";
import TextInput from './TextInput';
import Styles from '../css/SurveyItem.module.css';

function SurveyItem(props) {

    const { question, onDelete ,questionType} = props;
    console.log("타입 확인" ,question);
    const [editMode, setEditMode] = useState(false);
    const [editedTitle, setEditedTitle] = useState(question.title || question.question);
    const [editedOptions, setEditedOptions] = useState(
        (question.type === "multipleChoice" ) ? question.options : []
    );

    function handleOptionChange(index) {
        return function(e) {
            const newOptions = [...editedOptions];
            newOptions[index].text = e.target.value;
            setEditedOptions(newOptions);
        }
    }

    function handleOptionDelete(index) {
        return function() {
            const newOptions = editedOptions.filter((_, i) => i !== index);
            setEditedOptions(newOptions);
        }
    }

    function handleDeleteClick() {
        onDelete(question.num);
    }

    function handleDeleteModifyClick() {
      onDelete(question.id);
  }

    function handleEditClick() {
        if (editMode) {
            // Apply changes here if needed
            question.title = editedTitle;
        }
        setEditMode(!editMode);
    }

    function handleTitleChange(e) {
        setEditedTitle(e.target.value);
    }

    
  
    function renderOptions() {
        return editedOptions.map((option, index) => (
            <div key={option}>
              {editMode && (
                <div>
                  <label>
                    
                    <input type="radio" name="myCheckbox" value="true" required />
                    &nbsp;Option {index + 1}:{' '}
                    <input
                      type="text"
                      value={option.text}
                      onChange={handleOptionChange(index)}
                    />
                    <Button onClick={handleOptionDelete(index)} title="Delete option" />
                  </label>
                </div>
              )}
              {!editMode && (
                <div>
                  <input type="radio" name="myCheckbox" value="true" required />
                  {option.text}
                </div>
              )}
            </div>
          ));
        }

    
    switch (questionType) {
      case "shortAnswer":
        return (
          <div className={Styles.surveyItem}>
            <h2 className={Styles.questionNumber}>Q.{question.num}</h2>
            <p className={Styles.questionTitle}>
              질문:
              {editMode ? 
                            <TextInput value={editedTitle} onChange={handleTitleChange} /> 
                            : 
                            editedTitle}
            </p>
            <TextInput type="text" name="shortAnswerInput" required />
            <Button
              className={Styles.editButton}
              onClick={handleEditClick}
              title={editMode ? "Apply" : "Edit"}
            ></Button>
            &nbsp;&nbsp;
            <Button
              className={Styles.deleteButton}
              onClick={handleDeleteClick}
              title="Delete"
            ></Button>
          </div>
        );

        case "multipleChoice":
          return (
              <div className={Styles.surveyItem}>
                  <h2 className={Styles.questionNumber}>Q.{question.num}</h2>
                  <p className={Styles.questionTitle}>질문: 
                      {editMode ? 
                          <TextInput value={editedTitle} onChange={handleTitleChange} /> 
                          : 
                          editedTitle
                      }
                  </p>
                  {renderOptions()}

                  <Button
              className={Styles.editButton}
              onClick={handleEditClick}
              title={editMode ? "Apply" : "Edit"}
            ></Button>
            &nbsp;&nbsp;
            <Button
              className={Styles.deleteButton}
              onClick={handleDeleteClick}
              title="Delete"
            ></Button>
          </div>

             
          );
    
      case "yesOrNo":
          return (
              <div className={Styles.surveyItem}>
                  <h2 className={Styles.questionNumber}>Q.{question.num}</h2>
                  <p className={Styles.questionTitle}>질문:
                      {editMode ? 
                          <TextInput value={editedTitle} onChange={handleTitleChange} />
                          
                          : 
                          editedTitle
                      }
                  </p>
                  <form>
                      <input type="radio" name="myCheckbox" value="true" required /> 참
                      <input type="radio" name="myCheckbox" value="false" required /> 거짓
                      <br />
                  </form>

                  <Button className={Styles.editButton} onClick={handleEditClick} title={editMode ? "Apply" : "Edit"}></Button>
                  &nbsp;&nbsp;
                  <Button className={Styles.deleteButton} onClick={handleDeleteClick} title="Delete"></Button>

              </div>
          );
  }
    

    switch (question.type) {
        case "shortAnswer":
          return (
            <div className={Styles.surveyItem}>
                    <h2 className={Styles.questionNumber}>Q.{question.id}</h2>
                    <p className={Styles.questionTitle}>질문: 
                        {editMode ? 
                            <TextInput value={editedTitle} onChange={handleTitleChange} /> 
                            : 
                            editedTitle}

              </p>
              <TextInput type="text" name="shortAnswerInput" required />
              <Button
                className={Styles.editButton}
                onClick={handleEditClick}
                title={editMode ? "Apply" : "Edit"}
              ></Button>
              &nbsp;&nbsp;
              <Button
                className={Styles.deleteButton}
                onClick={handleDeleteClick}
                title="Delete"
              ></Button>
            </div>
          );

          case "multipleChoice":
            return (
                <div className={Styles.surveyItem}>
                    <h2 className={Styles.questionNumber}>Q.{question.id}</h2>
                    <p className={Styles.questionTitle}>질문: {question.question}
                        {editMode ? 
                            <TextInput value={editedTitle} onChange={handleTitleChange} /> 
                            : 
                            editedTitle
                        }
                    </p>
                    {renderOptions()}

                    <Button
                className={Styles.editButton}
                onClick={handleEditClick}
                title={editMode ? "Apply" : "Edit"}
              ></Button>
              &nbsp;&nbsp;
              <Button
                className={Styles.deleteButton}
                onClick={handleDeleteClick}
                title="Delete"
              ></Button>
            </div>

               
            );
      
        case "yesOrNo":
            return (
                <div className={Styles.surveyItem}>
                    <h2 className={Styles.questionNumber}>Q.{question.id}</h2>
                    <p className={Styles.questionTitle}>질문: 
                        {editMode ? 
                            <TextInput value={editedTitle} onChange={handleTitleChange} /> 
                            : 
                            editedTitle
                        }
                    </p>
                    <form>
                        <input type="radio" name="myCheckbox" value="true" required /> 참
                        <input type="radio" name="myCheckbox" value="false" required /> 거짓
                        <br />
                    </form>

                    <Button className={Styles.editButton} onClick={handleEditClick} title={editMode ? "Apply" : "Edit"}></Button>
                    &nbsp;&nbsp;
                    <Button className={Styles.deleteButton} onClick={handleDeleteClick} title="Delete"></Button>

                </div>
            );
    }


}

export default SurveyItem;
