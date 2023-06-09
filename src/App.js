import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import Home from './pages/home';
import Createsurvey from './pages/createsurvey';
import Managesurvey from './pages/managesurvey';
import Mypage from './pages/mypage';
import NavigationBar from './components/NavigationBar/NavigationBar';
import Signup from './pages/signup';
import Login from './pages/login';
import SurveyResponse from './pages/SurveyResponse';
import SurveyComplete from './pages/SurveyComplete';
import SurveyGenComplete from './pages/SurveyGenerateComplete';
import SurveyStatistics from './pages/statistics';
import Chat from './components/Chat/chat';
import SocialLogin from './components/Login/SocialLogin';
import SurveyItem from './components/Survey/SurveyItem';
import CheckPassword from './pages/CheckPassword';
import SurveyModify from './pages/SurveyModify';
import ResponseLookup from './pages/ResponseLookup';
import SurveyURL from './pages/SurveyURL';
import Tutorial from './pages/tutorial';

import { useState, useEffect } from 'react';
import AuthRoute from './routes/AuthRoute';
function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAuthChecked, setIsAuthChecked] = useState(false); // New state

  useEffect(() => {
    const token = localStorage.getItem("ACCESS_TOKEN");
    setIsAuthenticated(!!token);
    setIsAuthChecked(true); // Set to true after checking
  }, []);

  
  if (isAuthenticated === null) {
    return null;
  }


  console.log(isAuthChecked);
  return (
     // Only render the routes after the auth check
      <div>   
        <Chat />
        <BrowserRouter>
          <NavigationBar />
          <Routes>
           <Route path='/' element={<Home />} />
           {isAuthChecked ? (<Route path='/createsurvey' element={ isAuthenticated ? <Createsurvey /> : <Navigate to="/login" replace={true} />} />
          ) : null}
           <Route path='/tutorial' element={<Tutorial />} />
           {isAuthChecked ? (<Route path='/tutorial' element={ isAuthenticated ? <Tutorial /> : <Navigate to="/login" replace={true} />} />
          ) : null}
          {isAuthChecked ? (
          <Route path='/managesurvey' element={ isAuthenticated ? <Managesurvey /> : <Navigate to="/login" replace={true} />}/>
          ) : null}
          <Route path='/login' element={<Login />} />
          {isAuthChecked ? (
          <Route path="/mypage" element={ isAuthenticated ? <Mypage /> : <Navigate to="/login" replace={true} />}/>
          ) : null}
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          {isAuthChecked ? (
          <Route path='/survey-response' element={ isAuthenticated ? <SurveyResponse /> : <Navigate to="/login" replace={true} />} />
          ) : null}
          {isAuthChecked ? (
          <Route path='/survey-gen-complete' element={ isAuthenticated ? <SurveyGenComplete /> : <Navigate to="/login" replace={true} />} />
          ) : null}
          {isAuthChecked ? (
          <Route path='/managesurvey/survey/:surveyId/statistic' element={ isAuthenticated ? <SurveyStatistics /> : <Navigate to="/login" replace={true} />} />
          ) : null}
          <Route path='/modifysurvey/:surveyId' element={<SurveyModify />}/>
          <Route path='/social-login' element={<SocialLogin />} />
          {isAuthChecked ? (
          <Route path='/surveyitem' element={ isAuthenticated ? <SurveyItem /> : <Navigate to="/login" replace={true} />} />
          ) : null}
          {isAuthChecked ? (
          <Route path="/survey-response-lookup/:surveyId" element={ isAuthenticated ? <ResponseLookup /> : <Navigate to="/login" replace={true} />} />
          ) : null}
          {isAuthChecked ? (
          <Route path="/survey-response/:surveyId" element={ isAuthenticated ? <SurveyResponse /> : <Navigate to="/login" replace={true} />} />
          ) : null}
          {isAuthChecked ? (
          <Route path="/response-success" element={ isAuthenticated ? <SurveyComplete /> : <Navigate to="/login" replace={true} />} />
          ) : null}
          {isAuthChecked ? (
          <Route path="/surveyurl/:surveyId"  element={ isAuthenticated ? <SurveyURL /> : <Navigate to="/login" replace={true} />} />
          ) : null}
          {isAuthChecked ? (
          <Route path="/check-password/:surveyId" element={<CheckPassword />} />
          ) : null}
          </Routes>
      </BrowserRouter>
      <Chat />
      </div>
 // Render nothing while the auth check is not completed
  );
}

export default App;