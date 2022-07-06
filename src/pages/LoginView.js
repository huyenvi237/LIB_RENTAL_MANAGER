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

//Import ThreeDots
import { ThreeDots } from 'react-loader-spinner';


function LoginView() {
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
                    onSubmit={(values, {setSubmitting}) => {
                        console.log(values)
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
                            />

                            <TextInput
                                name="password"
                                type="password"
                                label="パスワード"
                                placeholder="********" 
                                icon={<FiLock />}
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

export default LoginView;
