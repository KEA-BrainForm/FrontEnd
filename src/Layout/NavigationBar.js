import React from 'react';
import './css/NavigationBar.css'

class NavigationBar extends React.Component {
  render() {
    return (
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/createsurvey">설문 생성</a></li>
          <li><a href="/managesurvey">설문 관리</a></li>
          <li><a href="/mypage">마이페이지</a></li>
          <li><a href="/login">Log In</a></li>
          <li><a href="/signup">Sign Up</a></li>
        </ul>
      </nav>
    );
  }
}

export default NavigationBar;
