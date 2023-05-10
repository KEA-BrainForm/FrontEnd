import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
margin-top: 0rem;
background-color: #363cf4;
color: #ffffff;
border: none;
padding: 0.5rem 1rem;
font-size: 1rem;
cursor: pointer;
transition: background-color 0.3s ease;
border-radius: 4px; /* Make the button round */

`;


  


function Button(props) {
    const { title, onClick } = props;
    
    return <StyledButton onClick={onClick}>{title || "Submit"}</StyledButton>;
}

export default Button;
