import React from 'react';

import { 
  BrowserRouter as Router,
  Route, Routes
 } from 'react-router-dom';
//Style components
import {StyledContainer} from './components/Style'
//Loader
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

//import { useNavigate } from 'react-router-dom';

//LoginView
import LoginView from './pages/LoginView';
import SendMail from './pages/SendMail';
import RenewPasswordView from './pages/RenewPasswordView';
import UserView from './pages/UserView';
import ManagerView from './pages/ManagerView';
import MemUserView from './pages/MemUserView';
import CheckInfo from './pages/CheckInfo';
import ErrorPage from './pages/ErrorPage';
import Register from './pages/Register';
import Edit from './pages/Edit';
//import TestPage from './pages/TestPage';
import ViewPage from './pages/ViewPage';
// import CheckInfoAfterSendMail from './pages/CheckInfoAfterSendMail'


function Root () {
  /*
  const navigate = useNavigate();
  window.onpopstate = () => {
    localStorage.clear();
    navigate(1);
  }
  */
  return (
    <div>
        <StyledContainer>
          <Routes>
            <Route index path ='/' element={<LoginView/>}></Route>

            <Route path='userview' element={<UserView />}></Route>
            <Route path='memuserview' element={<MemUserView />}></Route>

            <Route path='manager' element={<ManagerView />}></Route>
            <Route path='resetinfo' element={<SendMail />}></Route>
            <Route path='info' element={<CheckInfo />}></Route>
            <Route path='passchange' element={<RenewPasswordView />}></Route>
            <Route path='error' element={<ErrorPage />}></Route>
            <Route path='register' element={<Register />}></Route>
            <Route path='edit' element={<Edit />}></Route>
            <Route path='view' element={<ViewPage />}></Route>
            {/* <Route path='checkinfo' element={<CheckInfoAfterSendMail />}></Route> */}
            {/*<Route path='test' element={<TestPage />}></Route>*/}

            
          </Routes>
      
        </StyledContainer>
    </div>
  
  );
}
function App () {
  return (
    <Router>
      <Root />
    </Router>
  )
  
}
export default App;

 
