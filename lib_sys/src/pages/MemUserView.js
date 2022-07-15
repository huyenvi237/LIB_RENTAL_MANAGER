import React from 'react';
//Import Icon
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { 
    ButtonGroup,
    StyledFormButton, StyledUserButton,
    CopyrightText
} from '../components/Style';


import { useNavigate } from "react-router-dom";

const UserView = () => {
    const navigate = useNavigate();
    const handleLogout = () => {
        var r = window.confirm("Do you really want to logout?");
        if(r) {
            navigate("/");
        }
    }
    
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
                <StyledFormButton onClick={handleLogout}>
                        ログアウト
                </StyledFormButton>
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
                                width: '60%',
                                textAlign: 'center'
                            }}
                            type="text"  
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
                        予約状況
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
            <div
                style={{
                    bottom: 0,
                    clear: 'right'
                }}
            >
                <CopyrightText>
                    All rights reserved &copy;2022
                </CopyrightText>
            </div>
            
        </div>
        
    )
}

export default UserView;


