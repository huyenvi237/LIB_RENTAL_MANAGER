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


function MemberInfoView() {
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

                
            </StyledFormArea>
            <CopyrightText>
                All rights reserved &copy;2022
            </CopyrightText>
        </div>
    )
}

export default MemberInfoView;
