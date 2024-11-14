import { Link, useNavigate } from 'react-router-dom';
import { Input, Button, Form } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import apiClient from '../util/api_client';
import { useState } from 'react';

const Login = () => {
    const navigate = useNavigate();
    const [error, setError] = useState();

    const loginHandler = (data) => {
        apiClient.post('/user/login', data)
            .then(response => {
                const authToken = response?.data?.accessToken;
                console.log(response?.data?.accessToken);
                localStorage.setItem('token', authToken);
                navigate('/');
            })
            .catch(err => {
                console.log(err.response);
                setError(err.response?.data?.error)
            });
    }

    return <div className="login-container">
        <div className="login-inner">
            <h2 className='title'>Login</h2>
            {error && <div>{error}</div>}
            <Form
                layout='vertical'
                autoComplete='off'
                onFinish={loginHandler}
                initialValues={{

                }}
                size='large'
                scrollToFirstError={true}
            >
                <Form.Item label='Email' name='email' rules={[{
                    required: true,
                    message: "Please enter your email!"
                },
                {
                    type: 'email',
                    message: "Please enter a valid Email address."
                }]}>
                    <Input id='email' placeholder='email' />
                </Form.Item>

                <Form.Item label='Password' name='password' rules={[{
                    required: true,
                    message: "Please enter your password!"
                }]}>
                    <Input.Password
                        id='password'
                        placeholder='password'
                        iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                    />
                </Form.Item>

                <Form.Item>
                    <Button type='primary' block htmlType='submit'>Login</Button>
                </Form.Item>
            </Form>
        </div>
        <div>
            <p>
                Forgot Password?<Link to="/forgot-password">Click Here</Link>
            </p>
            <p>
                Not registered yet? <span><Link to='/register'>Register Now</Link></span>
            </p>
        </div>
    </div>
}

export default Login;