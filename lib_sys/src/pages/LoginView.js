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
import UseModal from './../components/UseModal';
import MemberInfoView from './MemberInfoView';

//Auth & redux
import { connect } from 'react-redux';
import { loginUser } from '../auth/actions/UserActions';

// Import useNavigate
import { useNavigate } from 'react-router-dom';     // ほかのページに遷移するため
import Axios, * as others from 'axios';

const LoginView = ({loginUser}) => {
    
    const history = useNavigate();
    const [id, setId] = useState();
    const [password, setPassword] = useState();

    const [loginStatus, setLoginStatus] = useState("");

    const login = () => {
        Axios.post("http://localhost:4000", {
            id: id,
            password: password
        }).then((response) => {
            if(response.data.message) {
                setLoginStatus(response.data.message)
            }
        })
    }
    

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
                            id: Yup.number().required("Required").positive().integer("Invalid ID"),
                            password: Yup.string().min(8,"Too short")
                                        .max(12,"Too long").required("Required")
                                        .matches("^([a-z A-Z 0-9]+)$", "Wrong Type")
                        })
                    }
                    onSubmit={(values, {setSubmitting,setFieldError}) => {
                        console.log(values);
                        loginUser(values, history, setFieldError, setSubmitting)
                    }}
                >
                    {({isSubmitting}) => (
                        <Form>
                            <TextInput
                                name="id"
                                type="text"
                                label="ログインID" 
                                placeholder="123456"
                                icon={<BsFillFilePersonFill />}
                                onChange={e => setId(e.target.value)}
                            />

                            <TextInput
                                name="password"
                                type="password"
                                label="パスワード"
                                placeholder="********" 
                                icon={<FiLock />}
                                onChange={e => setPassword(e.target.value)}
                            />

                            <ButtonGroup>
                                {!isSubmitting && (<StyledFormButton
                                    type="submit"
                                    
                                >
                                    ログイン
                                </StyledFormButton>
                                )}

                                {isSubmitting && (
                                    <ThreeDots
                                        color={colors.primary2}
                                        height={49}
                                        width={100}
                                    />
                                )}
                            </ButtonGroup>

                            
                        </Form>
                    )}
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


export default connect(null, {loginUser})(LoginView);
