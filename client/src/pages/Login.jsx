import { Link } from 'react-router-dom';
import { Input, Button, Form } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';

const Login = () => {
    const loginHandler = (data) => {
        console.log(data);
    }
    return <div className="login-container">
        <div className="login-inner">
            <h2 className='title'>Login</h2>
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