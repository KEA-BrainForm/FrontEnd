import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Createsurvey from './pages/createsurvey';
import Managesurvey from './pages/managesurvey';
import Mypage from './pages/mypage';
import NavigationBar from './Layout/NavigationBar';
import Signup from './pages/signup';

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/createsurvey' element={<Createsurvey />}></Route>
          <Route path='/managesurvey' element={<Managesurvey />}></Route>
          <Route path='/mypage' element={<Mypage />}></Route>
          <Route path='/signup' element={<Signup />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
