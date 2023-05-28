import React from "react";
import styled from "styled-components";

const StyledTextarea = styled.textarea`
  width: 100%;
  ${(props) => props.height && `height: ${props.height}px;`}
  padding: 16px;
  font-size: 16px;
  line-height: 20px;
  border-radius: 20px;
  border: none;
  outline: none;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);

  &:hover {
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
  }
`;

function TextInput(props) {
    const { height, value, onChange } = props;
    
return <StyledTextarea height={height} value={value} onChange={onChange} />; 
}
export default TextInput;