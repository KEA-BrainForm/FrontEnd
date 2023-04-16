import React, { useState } from "react";
import styled from "styled-components";
import Button from "../ui/Button";
import { Grid, TextField } from "@mui/material";

function YesOrNo(props) {

    const [title, setTitle] = useState("");
    const type = "yesOrNo";
    const id = props.questionsLen + 1;

    const handleAddClick = () => {
        const newItem = { id, title, type };
        props.onAddQuestions(newItem);
    }

    return (
        <div>
            <Grid container style={{ marginTop: 20 }}>
                <Grid xs={11} md={11} item style={{ paddingRight: 16 }}>
                    질문:  <TextField placeholder="질문을 입력하세요" fullWidth value={title}
                        onChange={(event) => {
                            setTitle(event.target.value);
                        }} />
                </Grid>
            </Grid>
            <br />
            <div>
                <Button
                    title="설문 생성"
                    onClick={handleAddClick}
                />
            </div>
        </div>
    );
}
export default YesOrNo;