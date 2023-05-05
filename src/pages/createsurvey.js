import './css/pages.css';

import Dropdown from "./ui/Dropdown";
import { questionList } from "./ui/Dropdown";

import Axios from 'axios';
import styled from "styled-components";

import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Button from "./ui/Button";
import { Grid, TextField } from "@mui/material";


const Wrapper = styled.div`
    padding: 16px;
    width: calc(100% - 32px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Container = styled.div`
    width: 100%;
    max-width: 720px;
    & > * {
        :not(:last-child) {
            margin-bottom: 16px;
        }
    }
`;
const HorizonLine = ({ text }) => {
  return (
    <div
      style={{
        width: "100%",
        textAlign: "center",
        borderBottom: "1px solid #aaa",
        lineHeight: "0.1em",
        margin: "10px 0 20px",
      }}
    >
      <span style={{ background: "#fff", padding: "0 10px" }}>{text}</span>
    </div>
  );
};

let globalTitle ;


function TitleInput() { // 제목
  const [title, setTitle] = useState("");

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };
  
globalTitle = title;

  return (
    <div>
      {/* <h3 htmlFor="title-input">설문 제목</h3>  // 참고
      <input
        type="text"
        id="title-input"
        value={title}
        onChange={handleTitleChange}
      /> */}

      <Grid container style={{ marginTop: 20 }}>
        <h3 htmlFor="title-input">설문 제목</h3>
        <Grid xs={11} md={11} item style={{ paddingRight: 16 }}>
          <TextField placeholder="제목을 입력하세요" fullWidth value={title}
            onChange={(event) => {
              setTitle(event.target.value);
              globalTitle = event.target.value;

            }} />
        </Grid>
      </Grid>
      <br />
      <HorizonLine text="질문을 추가해주세요" />
    </div>
  );
}

let visibilityTemp = null;
function VisibilitySelector() { //  공개 여부
  const [visibility, setVisibility] = useState("public");

  const handleVisibilityChange = (event) => {
    setVisibility(event.target.value);
  };
  visibilityTemp = visibility;  // **
  return (
    <div>
      <p> [공개 여부]</p>
      <label>
        공개
        <input
          type="radio"
          value="public"
          checked={visibility === "public"}
          onChange={handleVisibilityChange}
        />

      </label>
      <label>
        비공개
        <input
          type="radio"
          value="private"
          checked={visibility === "private"}
          onChange={handleVisibilityChange}
        />

      </label>
    </div>
  );
}
let wearableTemp = null;

function WearableSelector() { // 기기 착용 여부
  const [wearable, setWearable] = useState("worn");

  const handleWearableChange = (event) => {
    setWearable(event.target.value);
  };
  wearableTemp = wearable;
  return (
    <div>
      <p> [기기 착용 필수 여부]</p>
      <label>
        착용
        <input
          type="radio"
          value="worn"
          checked={wearable === "worn"}
          onChange={handleWearableChange}
        />
      </label>
      <label>
        미착용
        <input
          type="radio"
          value="not-worn"
          checked={wearable === "not-worn"}
          onChange={handleWearableChange}
        />
      </label>
    </div>
  );
}

const Createsurvey = () => {
  const navigate = useNavigate();
  // const history = useHistory();



  const handleSubmit = async (event) => {
    event.preventDefault();
    // 서버로 데이터를 보내는 로직 작성
    // ...
    console.log(globalTitle);
    console.log(questionList);
    console.log(typeof questionList);
    console.log("visibility: ", visibilityTemp);
    console.log("wearable: ", wearableTemp);

    const min = 1;
    const max = 1000;
    var randomInt = Math.floor(Math.random() * (max - min + 1)) + min;
    
    const token = localStorage.getItem("ACCESS_TOKEN");
    console.log("token", token);

    let result = await Axios.post("/api/new-question", {
      title: globalTitle,
      questionList: questionList,
      visibility: visibilityTemp,
      wearable: wearableTemp,
      // surveyId : randomInt
    }, {
      headers: {
        'Content-Type': 'application/json', // 요청 본문의 타입을 지정합니다.
        Authorization: `Bearer ${token}` // JWT 토큰을 헤더에 추가합니다.
      }
    });
    console.log(result);
    if (result.status === 200) {
      alert("success to create new question");
      const baseUrl = "http://localhost:3000/survey-response/";
      const uniqueUrl = `${baseUrl}${result.data}`;
      navigate("/survey-gen-complete", { state: { uniqueUrl } });
      
    } else {
      alert("failed to create new Car");
    }
    // 다른 페이지로 이동
    // history.push("/home");
    
  };

  return (
    <Wrapper>

      <Container>
        <TitleInput />
        <div className='body'>
          <Dropdown />
        </div>
        <br />
        <HorizonLine text="완료 설정" />
        <div style={{ float: 'right' }}>
          <VisibilitySelector /> <br />
          <WearableSelector /><br />
          <form onSubmit={handleSubmit}>
            <Button type="submit" title="설문 생성 완료"></Button>
          </form>
        </div>
      </Container>
    </Wrapper>
  );
};

export default Createsurvey;