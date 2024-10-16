import { Link } from 'react-router-dom';
import { Input, Button, Form } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';

const Login = () => {
    const loginHandler = (data) => {
        console.log(e);
    }
    return <div className="login-container">
        <div className="login-inner">
            <h2 className='title'>Login</h2>
            <Form
                layout='vertical'
                autoComplete='off'
                onFinish={loginHandler}
            >
                <Form.Item label="Email" name="email" rules={[{
                    required: true,
                    message: "Please enter your email!"
                }]}>
                    <Input id='email' placeholder='email' />
                </Form.Item>

                <Form.Item label="Password" name="password" rules={[{
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
        <div>Not registered yet? <span><Link to="/register">Register Now</Link></span>
        </div>
    </div>
}

export default Login;