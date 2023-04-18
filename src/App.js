import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Createsurvey from './pages/createsurvey';
import Managesurvey from './pages/managesurvey';
import Mypage from './pages/mypage';
import NavigationBar from './Layout/NavigationBar';
import Signup from './pages/signup';
import Login from './pages/login';
import SurveyResponse from './pages/SurveyResponse';
import MyResponse from './pages/MyResponse';
import SurveyComplete from './pages/SurveyComplete';
import SurveyGenComplete from './pages/SurveyGenerateComplete';
import SurveyStatistics from './pages/statistics';
import Chat from './pages/chat';
function App() {
  return (
    <div>
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/createsurvey' element={<Createsurvey />}></Route>
          <Route path='/managesurvey' element={<Managesurvey />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/mypage' element={<Mypage />}></Route>
          <Route path='/signup' element={<Signup />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/survey-response' element={<SurveyResponse />}></Route>
          <Route path='/survey-complete' element={<SurveyComplete />}></Route>
          <Route path='/survey-gen-complete' element={<SurveyGenComplete />}></Route>
          <Route path='/statistics' element={<SurveyStatistics />}></Route>
          <Route path='/my-response' element={<MyResponse />}></Route>
        </Routes>
      </BrowserRouter>
      <Chat/>
    </div>
    
   
  );
}

export default App;
