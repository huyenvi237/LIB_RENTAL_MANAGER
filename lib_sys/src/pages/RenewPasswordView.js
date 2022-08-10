import React from 'react';

//Import Style
import {  StyledFormArea, 
         StyledFormButton,
         StyledTitle, ButtonGroup, 
         CopyrightText
} from './../components/Style';

//Import formik
import { Formik, Form } from 'formik';
import { TextInput } from './../components/FormLib';

//Import yup
import * as Yup from 'yup';

//Import Icon
import { FiLock } from 'react-icons/fi';

// Import useNavigate
import { useNavigate } from 'react-router-dom';     // ほかのページに遷移するため
import Axios, * as others from 'axios';


function RenewPasswordView() {
    const history = useNavigate();
    return (
        <div >
            <StyledFormArea style={{border: 'solid #66BFBF'}}>
                <StyledTitle
                    style={
                        {size:30}
                    }
                >
                    パスワード変更
                </StyledTitle>
                <Formik
                    initialValues={{
                        password: "",
                        repeatPassword: ""
                    }}
                    validationSchema={
                        Yup.object({
                            password: Yup.string().min(8,"8文字以上を入力してください。")
                            .max(12,"12文字以下を入力してください。").required("新しいパスワードを入力してください。")
                            .matches("^([a-z A-Z 0-9]+)$", "英数字のみ入力してください。"),
                            repeatPassword: Yup.string().oneOf([Yup.ref("password")], "パスワードが一致しません。")
                                        .required("新しいパスワードをもう一度入力してください。")
                        })
                    }
                    onSubmit={(values) => {
                        const {password, repeatPassword} = values;
                        console.log(password,repeatPassword);   //Check value of id, password
                    
                        Axios.post("http://localhost:3001/api/checkpass", {
                            password:password
                        }).then((response) => {
                            if (response.data.message === "change") {
                                window.alert("新しいパスワードが設定されました。")
                                history("/"); 
                            } 
                            if (response.data.message === "error") {
                                window.alert("一度使用したパスワードは、新しいパスワードとして設定できません。")
                            }
                         })
                    }}
                >
                    
                    <Form>
                        <TextInput
                            name="password"
                            type="password"
                            label="新しいパスワード"
                            placeholder="********" 
                            icon={<FiLock />}
                        />

                        <TextInput
                            name="repeatPassword"
                            type="password"
                            label="新しいパスワード再入力"
                            placeholder="********" 
                            icon={<FiLock />}
                        />

                        <ButtonGroup>
                            <StyledFormButton
                                type="submit"
                            >
                                変更する
                            </StyledFormButton>
                            

                        </ButtonGroup>
                    </Form>
                    
                </Formik>

                
            </StyledFormArea>
            <CopyrightText>
                All rights reserved &copy;2022
            </CopyrightText>
        </div>
    )
}

export default RenewPasswordView;