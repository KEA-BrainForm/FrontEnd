import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import TextInput from "../ui/TextInput";
import Button from "../ui/Button";
import { Grid, TextField } from "@mui/material";

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

function ShortAnswer(props) {
  const [title, setTitle] = useState("");
  const type = "shortAnswer";
  const id = props.questionsLen + 1;

  const handleAddClick = () => {
    const newItem = { id, title, type };
    props.onAddQuestions(newItem);
    setTitle("");
  }

  return (
    <div>
      <Grid container style={{ marginTop: 20 }}>
        <Grid xs={11} md={11} item style={{ paddingRight: 16 }}>
          <h5>질문</h5>
          <TextField
            placeholder="질문을 입력하세요"
            fullWidth
            value={title}
            onChange={(event) => {
              setTitle(event.target.value);
            }}
            InputProps={{
              style: {
                width: 720,
                borderRadius: "10px",
              },
            }}
          />
        </Grid>
      </Grid>
      <br />
      <Wrapper>
        <Button title="질문 추가" onClick={handleAddClick} />
      </Wrapper>
    </div>
  );
}

export default ShortAnswer;
