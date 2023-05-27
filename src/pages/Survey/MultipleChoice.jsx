import React, { useState } from "react";
import { Grid, TextField } from "@mui/material";
import Button from "../ui/Button";
import { useNavigate } from "react-router-dom";
import questions from "../ui/Dropdown";


function MultipleChoice(props) {
    const [options, setOptions] = useState([]);
    const [title, setTitle] = useState("");
    const [selectedOption, setSelectedOption] = useState(null);

    const type = "multipleChoice";
    const id = props.questionsLen + 1;

    const handleAddClick = () => {
        
        const newItem = {id, title, type, options};
        props.onAddQuestions(newItem);
        setTitle("");
        setOptions([]);
        setSelectedOption(null);
        
    }
    // props.onAddQuestions({});
    function addOption(newOption) {
        setOptions([...options, {text: ''}]);

    }

    function handleChangeOptionText(index, event) {
        let id = index + 1;
        const newOptions = [...options];
        newOptions[index].text = event.target.value;
        setOptions(newOptions);
    }
    

    function handleDeleteOption(index) {
      const newOptions = [...options];
      newOptions.splice(index, 1);
      setOptions(newOptions);
    }

    function renderOptions() {
      return options.map((option, index) => (
        <div key={index}>
          <label>
            Option {index + 1}:{' '}
            <br></br>
            <input
              type="text"
              value={option.text}
              onChange={(event) => handleChangeOptionText(index, event)}
            />
            &nbsp;
            <Button onClick={() => handleDeleteOption(index)} title={"Delete Option"}>Delete Option</Button>
          </label>
        </div>
      ));
      }

    return (
        <div>
            <Grid container style={{ marginTop: 20 }}>
                <Grid xs={11} md={11} item style={{ paddingRight: 16 }}>
                    <h5>질문</h5>  <TextField placeholder="질문을 입력하세요" fullWidth value={title}  
                            onChange={(event) => {
                            setTitle(event.target.value);  }} sx={{ width: 720 }} />
                </Grid>
            </Grid>
            <br />
            <div>
                <Button onClick={addOption} title={"Add Option"}>Add Option</Button>
               
            </div>
            {renderOptions()}

            <div><br></br><br></br>
                <Button
                    title="질문 추가"
                    onClick={handleAddClick}
                /><br></br><br></br>
            </div>
        </div>
    );
}
export default MultipleChoice;