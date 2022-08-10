import React from 'react';

//Import Style
import { StyledFormArea, 
         StyledFormButton, 
         StyledTitle, ButtonGroup, 
         ExtraText, TextLink, CopyrightText
} from './../components/Style';

//Import formik
import { Formik, Form } from 'formik';          //Formを管理するため
import { TextInput } from './../components/FormLib';

//Import yup
import * as Yup from 'yup';     //データを検証するため

//Import Icon
import { FiLock } from 'react-icons/fi';
import { BsFillFilePersonFill } from 'react-icons/bs';

// Import useNavigate
import { useNavigate } from 'react-router-dom';     // ほかのページに遷移するため
import Axios, * as others from 'axios';

const LoginView = () => {
    const navigate = useNavigate();
        window.onpopstate = () => {
        localStorage.clear();
        navigate("/");
    }
    return (
        <div >
            <StyledTitle
                style={
                    {size:30,
                    padding: '15px 75px'
                    }
                }
            >
                図書館会員ログイン
            </StyledTitle>
            <StyledFormArea style={{border: 'solid #66BFBF'}}>
                
                <Formik
                    initialValues={{
                        id: "",
                        password: ""
                    }}
                    validationSchema={
                        Yup.object({
                            id: Yup.number().typeError("数字のみ入力してください。")
                                        .min(100000,"６桁を入力してください。")
                                        .max(999999,"６桁を入力してください。")
                                        .required("IDを入力してください。").integer("正しいIDを入力してください。"),
                            password: Yup.string()//.min(8,"8文字以上を入力してください。")
                                        // .max(12,"12文字以下を入力してください。")
                                        .required("パスワードを入力してください。")
                                        .matches("^([a-z A-Z 0-9]+)$", "英数字のみ入力してください。")
                        })
                    }
                    /*onSubmit={login}*/
                    onSubmit={(values) => {
                        const {id, password} = values;
                        console.log(id,password);   //Check value of id, password
                        Axios.post("http://localhost:3001/api/post", {
                            id:id,
                            password:password
                        }).then((response) => {
                            console.log(response.data || "null");
                            if (response.data.message) {
                                window.alert("IDまたはパスワードが間違っています。")
        
                            } else {
                                const auth = response.data.map((item) => { return item.authority_CODE })
                                console.log(auth);
                                const test = auth[0];
                                if( test === 1){
                                    setTimeout(() => {
                                    navigate("/userview")
                                    }, 400);
                                } else {
                                    setTimeout(() => {
                                    navigate("/memuserview")
                                    }, 400);
                                }
                                
                            }
                        })

                        
                        
                    }}
                >
                    
                    <Form>
                        <TextInput
                            name="id"
                            type="text"
                            label="ログインID" 
                            placeholder="123456"
                            icon={<BsFillFilePersonFill />}
                        />

                        <TextInput
                            name="password"
                            type="password"
                            label="パスワード"
                            placeholder="********" 
                            icon={<FiLock />}
                        />

                        <ButtonGroup>
                            <StyledFormButton>
                                ログイン
                            </StyledFormButton>
                        </ButtonGroup>

                            
                    </Form>
                    
                </Formik>

                <ExtraText style={{
                    padding:10, 
                    fontSize: 10,
                    textAlign: 'right'
                }}>
                    <TextLink to="/info">パスワードを忘れた場合</TextLink>
                    <br/>
                    <TextLink to="/resetinfo">ログインIDを忘れた場合</TextLink>
                </ExtraText>
                
            </StyledFormArea>


            <CopyrightText>
                All rights reserved &copy;2022
            </CopyrightText>
        </div>
    )
}


export default LoginView;



