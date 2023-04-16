import './css/pages.css';
import Chat from './chat';
import Dropdown from "./ui/Dropdown";
import styled from "styled-components";
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
// import TextInput from './ui/TextInput';

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

function TitleInput() { // 제목
  const [title, setTitle] = useState("");

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  return (
    <div>
      <label htmlFor="title-input">설문 제목</label>
      <input
        type="text"
        id="title-input"
        value={title}
        onChange={handleTitleChange}
      />
    </div>
  );
}

function VisibilitySelector() { //  공개 여부
  const [visibility, setVisibility] = useState("public");

  const handleVisibilityChange = (event) => {
    setVisibility(event.target.value);
  };

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

function WearableSelector() { // 기기 착용 여부
  const [wearable, setWearable] = useState("worn");

  const handleWearableChange = (event) => {
    setWearable(event.target.value);
  };

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

  const handleSubmit = (event) => {
    event.preventDefault();
    // 서버로 데이터를 보내는 로직 작성
    // ...
  
    // 다른 페이지로 이동
    // history.push("/home");
    navigate("/signup");
  };
  
  return (
    <Wrapper>
      
      <Container>
        <h1>Createsurvey</h1>
        <TitleInput />
        <div className='body'>
          <Dropdown />
          <Chat></Chat>
        </div>

      </Container>
      <div style={{float: 'right'}}>
      <VisibilitySelector /> <br />
      <WearableSelector />
      <form onSubmit={handleSubmit}>
      <button type="submit">설문 생성</button>
      </form>
      </div>
    </Wrapper>
  );
};

export default Createsurvey;