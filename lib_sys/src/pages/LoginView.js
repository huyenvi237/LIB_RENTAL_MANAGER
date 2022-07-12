import React, { useState } from 'react';

//Import Style
import { StyledTextInput, StyledFormArea, 
         StyledFormButton, StyledLabel,
         StyledTitle, colors, ButtonGroup, 
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

//Import ThreeDots
import { ThreeDots } from 'react-loader-spinner';

//Import Modal
import MemberInfoView from './MemberInfoView';

//Auth & redux
import { connect } from 'react-redux';

// Import useNavigate
import { useNavigate } from 'react-router-dom';     // ほかのページに遷移するため
import Axios, * as others from 'axios';

const LoginView = ({}) => {
    const history = useNavigate();
    return (
        <div >
            <StyledFormArea style={{border: 'solid #66BFBF'}}>
                <StyledTitle
                    style={
                        {size:30}
                    }
                >
                    メンバーログイン
                </StyledTitle>
                <Formik
                    initialValues={{
                        id: "",
                        password: ""
                    }}
                    validationSchema={
                        Yup.object({
                            id: Yup.number().typeError("Number Only").required("Required").positive().integer("Invalid ID"),
                            password: Yup.string().min(8,"Too short")
                                        .max(12,"Too long").required("Required")
                                        .matches("^([a-z A-Z 0-9]+)$", "Wrong Type")
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
                                window.alert("Wrong information!")
        
                            } else {
                                setTimeout(() => {
                                history("/userview")
                            }, 400);
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
                    <TextLink to="/meminfo">パスワードを忘れた場合</TextLink>
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



