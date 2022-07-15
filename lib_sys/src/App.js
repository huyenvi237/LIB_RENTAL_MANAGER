import React, { useEffect } from 'react';

import { 
  BrowserRouter as Router,
  Route, Routes
 } from 'react-router-dom';
//Style components
import {StyledContainer} from './components/Style'
//Loader
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

//LoginView
import LoginView from './pages/LoginView';

//Test view

import SendMail from './pages/SendMail';
import RenewPasswordView from './pages/RenewPasswordView';
import UserView from './pages/UserView';
import ManagerView from './pages/ManagerView';
import MemUserView from './pages/MemUserView';
import { useNavigate } from "react-router-dom";
//import TestPage from './pages/TestPage';
import CheckInfo from './pages/CheckInfo';

/*function App() {
  return (
    <div>
      <TestPage />
    </div>
  )
}

export default App;
*/



function Root () {
  const navigate = useNavigate();
  useEffect(() =>  {
    window.addEventListener("popstate", () => {
      navigate(1);
    });
  })

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

/*
  - Code du tru:
    <Route path='userview' element={<UserView />}></Route>
*/ 
