import React from 'react';

//Import Style
import { StyledFormArea, 
         StyledFormButton,
         StyledTitle,ButtonGroup, 
        CopyrightText
} from './../components/Style';

//Import formik
import { Formik, Form } from 'formik';
import { TextInput } from './../components/FormLib';

//Import yup
import * as Yup from 'yup';

//Import Icon
import { FiMail } from 'react-icons/fi';
import { BsFillFilePersonFill } from 'react-icons/bs';

// Import useNavigate
import { useNavigate } from 'react-router-dom';     // ほかのページに遷移するため
import axios from 'axios';

const CheckInfo = () => {
    const navigate = useNavigate();

    return (
        <div>
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
                            id: Yup.number().typeError("数字のみ入力してください。")
                                    .min(100000,"６桁を入力してください。")
                                    .max(999999,"６桁を入力してください。")
                                    .required("IDを入力してください。").integer("正しいIDを入力してください。"),
                            email: Yup.string().email("正しいメールアドレスを入力してください。")
                                                .required("メールアドレスを入力してください。")
                        })
                    }
                    onSubmit={(values) => {
                        const {id, email} = values;
                        console.log(id,email.includes("\""));   //Check value of id, password
                        if (email.startsWith('\"')) {
                            window.confirm("申し訳ございません、この文字を受け入れられません。もう一度入力したらお客様のIDをブロックします。");
                            return;
                        }
                        axios.post("http://localhost:3001/api/check", {
                            id:id,
                            email:email
                        }).then((response) => {
                            console.log(response.data || "null");
                            if (response.data.message) {
                                window.alert("IDまたはメールアドレスが間違っています。")
        
                            } else {
                                setTimeout(() => {
                                    navigate("/passchange")
                            }, 400);
                            }
                        })
                    }}
                >
                    
                    <Form noValidate>
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
                            <StyledFormButton
                                type="submit"
                            >
                                送信
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

export default CheckInfo;