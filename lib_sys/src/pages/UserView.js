import React from 'react';
//Import Icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { 
    ButtonGroup,
    StyledFormButton, StyledUserButton,
    CopyrightText
} from './../components/Style';
import LoginView from './LoginView';
import { useNavigate } from "react-router-dom";

const UserView = () => {
    const navigate = useNavigate();
    return (
        <div>
             {/**ページタイトル */}
            <h1 className='mx-auto flex flex col justify-center items-center'
                style={{
                    fontSize: 80
                }}
            >
                マイライブラリ
            </h1>
            
            {/**ログアウトのボタンをセッティング 
             * クリックしたらログインページに遷移
            */}
            <div
                style={{
                    position: "absolute",
                    top: 10,
                    right: 20,
                    backgroundColor: "transparent",
                    width: "100%",
                    padding: "15px",
                    display: "flex",
                    justifyContent: "flex-end"

                }}
            >
                <StyledFormButton onClick={() => navigate("/")}>ログアウト</StyledFormButton>
            </div>
            {/**管理者ページへ遷移のボタンをセッティング*/} 
         
            <div
                style={{
                    position: "absolute",
                    top: 70,
                    right: 20,
                    backgroundColor: "transparent",
                    width: "100%",
                    padding: "15px",
                    display: "flex",
                    justifyContent: "flex-end"

                }}
            >
                <StyledFormButton onClick={() => navigate("/manager")}>管理者ページへ</StyledFormButton>
            </div>

            {/** ページのコンテント */}
            <div className="min-h-screen">
                <div className="max-w-5xl mx-auto flex flex col justify-center items-center">
                    <div style={{marginTop: 20}}>
                        <span
                            style={{
                                margin: 5,
                                fontSize: 20
                            }}
                        >図書検索・予約</span>
                        <input 
                            style={{
                                margin: 5,
                                fontSize: 20,
                                width: '70%'
                            }}
                            type="text" className="border border-gray-500 w-full h-full rounded-md opacity-0 p-3 " 
                            autoComplete='off'
                            placeholder='タイトル、著者、出版社'
                        />
                     
                    </div>
                    
                    <br/>
                    <StyledUserButton>個人情報変更</StyledUserButton>
                    <br/>
                    <StyledUserButton>パスワード変更</StyledUserButton>
                    <br/>
                    <StyledUserButton
                        style={{
                            width: '40%',
                            float: 'left'
                        }}
                    >
                        予約状況<FontAwesomeIcon icon="fa-solid fa-angle-down" />
                    </StyledUserButton>
                    <StyledUserButton
                        style={{
                            width: '40%',
                            float: 'right',
                            marginRight: 0
                        }}
                    >
                        貸出状況
                    </StyledUserButton>    
                    
                </div>
            </div>
            <CopyrightText>
                All rights reserved &copy;2022
            </CopyrightText>
        </div>
        
    )
}

export default UserView;


