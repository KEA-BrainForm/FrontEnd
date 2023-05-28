import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../images/Logo.png'
import Nav from 'react-bootstrap/Nav';
import { Link, useLocation } from 'react-router-dom';
import React, { useState } from 'react';

import LoginButton from '../pages/ui/LoginButton';

function NavigationBar() {
  const location = useLocation();
  const [hovered, setHovered] = useState(null);

  const handleMouseEnter = (index) => {
    setHovered(index);
  };

  const handleMouseLeave = () => {
    setHovered(null);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <>
      <Navbar
        bg="white"
        variant="#A0D3F9"
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
            <Nav.Link
              as={Link}
              to="/createsurvey"
              onMouseEnter={() => handleMouseEnter(0)}
              onMouseLeave={handleMouseLeave}
              style={{
                color: hovered === 0 || isActive("/createsurvey") ? '#A0D3F9' : 'inherit',
                borderBottom: isActive("/createsurvey") ? '2px solid #A0D3F9' : 'none',
              }}
              className={isActive("/createsurvey") ? "active" : ""}
            >
              설문 생성
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/managesurvey"
              onMouseEnter={() => handleMouseEnter(1)}
              onMouseLeave={handleMouseLeave}
              style={{
                color: hovered === 1 || isActive("/managesurvey") ? '#A0D3F9' : 'inherit',
                borderBottom: isActive("/managesurvey") ? '2px solid #A0D3F9' : 'none',
              }}
              className={isActive("/managesurvey") ? "active" : ""}
            >
              설문 관리
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/mypage"
              onMouseEnter={() => handleMouseEnter(2)}
              onMouseLeave={handleMouseLeave}
              style={{
                color: hovered === 2 || isActive("/mypage") ? '#A0D3F9' : 'inherit',
                borderBottom: isActive("/mypage") ? '2px solid #A0D3F9' : 'none',
              }}
              className={isActive("/mypage") ? "active" :""}
            >
              My Page
            </Nav.Link>
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

