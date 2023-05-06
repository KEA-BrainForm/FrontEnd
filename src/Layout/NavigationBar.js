import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../images/Logo.png'
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

function NavigationBar() {
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
            <Nav.Link as={Link} to="/createsurvey">설문 생성</Nav.Link>
            <Nav.Link as={Link} to="/managesurvey">설문 관리</Nav.Link>
            <Nav.Link as={Link} to="/mypage">My Page</Nav.Link>
            <Nav.Link as={Link} to="/login">Log In</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavigationBar;