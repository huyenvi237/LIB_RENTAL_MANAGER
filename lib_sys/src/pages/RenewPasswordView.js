import React from 'react';

//Import Style
import { StyledTextInput, StyledFormArea, 
         StyledFormButton, StyledLabel,
         StyledTitle, colors, ButtonGroup, 
         ExtraText, TextLink, CopyrightText
} from './../components/Style';

//Import formik
import { Formik, Form } from 'formik';
import { TextInput } from './../components/FormLib';

//Import yup
import * as Yup from 'yup';

//Import Icon
import { FiLock } from 'react-icons/fi';
import { BsFillFilePersonFill } from 'react-icons/bs';

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
                            password: Yup.string().min(8,"Too short")
                                        .max(12,"Too long").required("Required")
                                        .matches("^([a-z A-Z 0-9]+)$", "Wrong Type"),
                            repeatPassword: Yup.string().oneOf([Yup.ref("password")], "Passwords must match")
                                        .required("Required")
                        })
                    }
                    onSubmit={(values) => {
                        const {password, repeatPassword} = values;
                        console.log(password,repeatPassword);   //Check value of id, password
                        Axios.post("http://localhost:3001/api/change", {
                            password:password
                        }).then(() => {
                            setTimeout(() => {
                                history("/")
                            }, 400);
                            
                        })
                    }}
                >
                    {({isSubmitting}) => (
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
                                {!isSubmitting && (<StyledFormButton
                                    type="submit"
                                >
                                    変更する
                                </StyledFormButton>
                                )}

                            </ButtonGroup>
                        </Form>
                    )}
                </Formik>

                
            </StyledFormArea>
            <CopyrightText>
                All rights reserved &copy;2022
            </CopyrightText>
        </div>
    )
}

export default RenewPasswordView;
