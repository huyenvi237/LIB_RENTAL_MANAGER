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
import { FiMail } from 'react-icons/fi';
import { BsFillFilePersonFill } from 'react-icons/bs';

//Import ThreeDots
import { ThreeDots } from 'react-loader-spinner';

// Import useNavigate
import { useNavigate } from 'react-router-dom';     // ほかのページに遷移するため
import Axios, * as others from 'axios';


function MemberInfoView() {
    const history = useNavigate();
    return (
        <div className='modal fade'>
            <StyledFormArea style={{border: 'solid #66BFBF'}}>
                <StyledTitle
                    style={
                        {size:30}
                    }
                >
                    ユーザー情報確認
                </StyledTitle>
                <Formik
                    initialValues={{
                        id: "",
                        email: ""
                    }}
                    validationSchema={
                        Yup.object({
                            id: Yup.number().required("Required").positive().integer("Invalid ID"),
                            email: Yup.string().email("Invalid Email").required("Required")
                        })
                    }
                    onSubmit={(values, {setSubmitting}) => {
                        const {id, email} = values;
                        console.log(id,email);   //Check value of id, password
                        Axios.post("http://localhost:3001/api/check", {
                            id:id,
                            email:email
                        }).then((response) => {
                            console.log(response.data || "null");
                            if (response.data.message) {
                                window.alert("Wrong information!")
        
                            } else {
                                setTimeout(() => {
                                history("/passchange")
                            }, 400);
                            }
                        })
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
                                name="email"
                                type="email"
                                label="メール"
                                placeholder="" 
                                icon={<FiMail />}
                            />

                            <ButtonGroup>
                                {!isSubmitting && (<StyledFormButton
                                    type="submit"
                                >
                                    送信
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

export default MemberInfoView;
