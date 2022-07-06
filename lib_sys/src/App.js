import React, { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';

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
import MemberInfoView from './pages/MemberInfoView';
import RenewPasswordView from './pages/RenewPasswordView';
import UserView from './pages/UserView';


function App() {
  return (
    <div>
      <Router>
        <StyledContainer>
          <Routes>
            <Route index element={<LoginView />}></Route>
            <Route path='userview' element={<UserView />}>
            </Route>
          </Routes>
      
          
        
        </StyledContainer>
      </Router>
      
    </div>
    
    
  );
}
export default App;
