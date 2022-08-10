import React, { useState } from 'react';
//import { toast, ToastContainer } from 'react-toastify';
import axios from 'axios';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { StyledFormArea } from '../components/Style';
import { useNavigate } from 'react-router-dom';


function SendMail() {
    const [ email, setEmail ] = useState('');
    const [name, setName ] = useState('');
    const [loading, setLoading ] = useState(false);

    const navigate = useNavigate();

    const submitHandler = async (e) => {
        e.preventDefault();
        if ( !email || !name ) {
            return window.confirm('メールアドレスと名前を入力してください。');
        }
        try {
            setLoading(true);
            console.log(email, name);
            const data = await axios.post("http://localhost:3001/api/email", {
                email,
                name
            }).then((response) => {
                console.log(response.data.message);
                if(response.data.message) {
                    if(window.confirm('ご利用ありがとうございます。メールアドレスへ、パスワード再設定URLの記載されたメールを送信いたしました。')) {
                        navigate("/");
                        console.log(data);
                        
                    }
                } else {
                    window.confirm('ご入力頂いたメールアドレスまた名前はご登録の情報と異なります。再度ご確認の上、ご入力ください。')
                    setLoading(false)
                }
            })
        } catch (err) {
            setLoading(false);
        } 
    };

    return (
        
        <StyledFormArea>
            <header>
                <Form noValidate onSubmit={ submitHandler }>
                    <h1>アカウントリセット</h1>
                    <div
                        style={{
                            fontSize:25,
                            fontWeight:"bold",
                            padding:25
                        }}
                    >
                        <label htmlFor='email'>
                            メール:&nbsp;&nbsp;&nbsp;&nbsp;
                        </label>
                        <input
                            onChange={(e) => setEmail(e.target.value)}
                            id="email"
                            type="email" />
                    </div>

                    <div
                        style={{
                            fontSize:25,
                            fontWeight:"bold",
                            padding:25
                        }}
                    >
                        <label htmlFor='name'>名前:&nbsp;&nbsp;&nbsp;&nbsp;</label>
                        <input
                            onChange={(e) => setName(e.target.value)}
                            id="name"
                            type="name" />
                    </div>
                    <div>
                        <label></label>
                        <Button variant='primary' disabled={loading} type="submit">
                            {loading ? '送信中...' : '送信'}
                        </Button>
                    </div>
                </Form>
            </header>
        </StyledFormArea>
        
    )
}

export default SendMail;