import React, { useState } from 'react';
//import { toast, ToastContainer } from 'react-toastify';
import axios from 'axios';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';



function SendMail() {
    const [ email, setEmail ] = useState('');
    const [name, setName ] = useState('');
    const [loading, setLoading ] = useState(false);

    const submitHandler = async (e) => {
        e.preventDefault();
        if ( !email || !name ) {
            return window.confirm('Please fill all blank');
        }
        try {
            setLoading(true);
            console.log(email, name);
            const data = await axios.post("http://localhost:3001/api/email", {
                email,
                name
            });
            setLoading(false);
            console.log(data);
        } catch (err) {
            setLoading(false);
        } 
    };

    return (
        
        <div>
            <header>
                <Form onSubmit={ submitHandler }>
                    <h1>RESET YOUR ACCOUNT</h1>
                    <div>
                        <label htmlFor='email'>Email</label>
                        <input
                            onChange={(e) => setEmail(e.target.value)}
                            type="email" />
                    </div>

                    <div>
                        <label htmlFor='name'>Name</label>
                        <input
                            onChange={(e) => setName(e.target.value)}
                            type="name" />
                    </div>
                    <div>
                        <label></label>
                        <Button variant='primary' disabled={loading} type="submit">
                            {loading ? 'Sending...' : 'Submit'}
                        </Button>
                    </div>
                </Form>
            </header>
        </div>
        
    )
}

export default SendMail;