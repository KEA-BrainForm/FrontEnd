import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../images/Logo.png'
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';

import LoginButton from '../pages/ui/LoginButton';

function NavigationBar() {

  const [hovered, setHovered] = useState(null);

  const handleMouseEnter = (index) => {
    setHovered(index);
  };

  const handleMouseLeave = () => {
    setHovered(null);
  };
  return (
    <>
      <Navbar
        bg="white"
        variant="blue"
        style={{
          height: '50px',
          borderBottom: '1px solid #ADD8E6',
        }}
      >
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img
              alt=""
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            BrainForm
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/createsurvey"
              onMouseEnter={() => handleMouseEnter(0)}
              onMouseLeave={handleMouseLeave}
              style={{
                color: hovered === 0 ? 'blue' : 'inherit',
              }}>설문 생성</Nav.Link>
            <Nav.Link as={Link} to="/managesurvey"
              onMouseEnter={() => handleMouseEnter(1)}
              onMouseLeave={handleMouseLeave}
              style={{
                color: hovered === 1 ? 'blue' : 'inherit',
              }}>설문 관리</Nav.Link>
            <Nav.Link as={Link} to="/mypage"
              onMouseEnter={() => handleMouseEnter(2)}
              onMouseLeave={handleMouseLeave}
              style={{
                color: hovered === 2 ? 'blue' : 'inherit',
              }}>My Page</Nav.Link>
          </Nav>
          <Nav className="ml-auto">
              <LoginButton />

          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavigationBar;