import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import Home from './pages/home';
import Createsurvey from './pages/createsurvey';
import Managesurvey from './pages/managesurvey';
import Mypage from './pages/mypage';
import NavigationBar from './components/NavigationBar/NavigationBar';
import Signup from './pages/signup';
import Login from './pages/login';
import SurveyResponse from './pages/SurveyResponse';
import SurveyComplete from './components/Survey/SurveyComplete';
import SurveyGenComplete from './pages/SurveyGenerateComplete';
import SurveyStatistics from './pages/statistics';
import Chat from './components/Chat/chat';
import SocialLogin from './components/Login/SocialLogin';
import SurveyItem from './components/Survey/SurveyItem';
import CheckPassword from './components/Survey/CheckPassword';
import SurveyModify from './pages/SurveyModify';
import ResponseLookup from './pages/ResponseLookup';
import SurveyURL from './pages/SurveyURL';

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


  
  console.log(isAuthenticated);
  return (
    isAuthChecked ? ( // Only render the routes after the auth check
      <div>   
        <Chat />
        <BrowserRouter>
          <NavigationBar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/createsurvey' element={ isAuthenticated ? <Createsurvey /> : <Navigate to="/login" replace={true} />} />
          <Route path='/managesurvey' element={ isAuthenticated ? <Managesurvey /> : <Navigate to="/login" replace={true} />}/>
          <Route path='/login' element={<Login />} />
          <Route path="/mypage" element={ isAuthenticated ? <Mypage /> : <Navigate to="/login" replace={true} />}/>
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/survey-response' element={ isAuthenticated ? <SurveyResponse /> : <Navigate to="/login" replace={true} />} />
          <Route path='/survey-gen-complete' element={ isAuthenticated ? <SurveyGenComplete /> : <Navigate to="/login" replace={true} />} />
          <Route path='/managesurvey/survey/:surveyId/statistic' element={ isAuthenticated ? <SurveyStatistics /> : <Navigate to="/login" replace={true} />} />
          <Route path='/modifysurvey/:surveyId' element={<SurveyModify />}/>
          <Route path='/social-login' element={<SocialLogin />} />
          <Route path='/surveyitem' element={ isAuthenticated ? <SurveyItem /> : <Navigate to="/login" replace={true} />} />
          <Route path="/survey-response-lookup/:surveyId" element={ isAuthenticated ? <ResponseLookup /> : <Navigate to="/login" replace={true} />} />
          <Route path="/survey-response/:surveyId" element={ isAuthenticated ? <SurveyResponse /> : <Navigate to="/login" replace={true} />} />
          <Route path="/response-success" element={ isAuthenticated ? <SurveyComplete /> : <Navigate to="/login" replace={true} />} />
          <Route path="/surveyurl/:surveyId"  element={ isAuthenticated ? <SurveyURL /> : <Navigate to="/login" replace={true} />} />
          <Route path="/check-password/:surveyId" element={<CheckPassword />} />
        </Routes>
      </BrowserRouter>
      <Chat />
      </div>
    ) : null // Render nothing while the auth check is not completed
  );
}

export default App;
