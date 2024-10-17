import { Input, Button, Form, Select } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';

const UserProfile = ({ title }) => {
    const prefixSelector = (
        <Form.Item name="prefix" noStyle>
            <Select
                defaultValue={"91"}
                style={{
                    width: 80,
                }}
            >
                <Select.Option value="91" selected>+91</Select.Option>
            </Select>
        </Form.Item>
    );

    return <div className="profile-container">
        <h2 className='title'>{title}</h2>
        <div className="profile-form">
            <Form
                layout='vertical'
                autoComplete='off'
                onFinish={() => { }}
                initialValues={{

                }}
                size='large'
                scrollToFirstError={true}

            >
                <Form.Item label='First Name' name='first_name' rules={[{ required: true, message: 'Please enter your first name.' }]}>
                    <Input type='text' id='first_name' placeholder='First Name' />
                </Form.Item>

                <Form.Item label='Last Name' name='last_name' rules={[]}>
                    <Input type='text' id='last_name' placeholder='Last Name' />
                </Form.Item>

                <Form.Item label='Email' name='email' rules={[{
                    required: true,
                    message: "Please enter your email!"
                },
                {
                    type: 'email',
                    message: "Please enter a valid Email address."
                }]}>
                    <Input id='email' placeholder='email' type='email' />
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

                <Form.Item label='Phone Number' name='phone' rules={[{ max: 10 }]}>
                    <Input addonBefore={prefixSelector} type='text' id='phone' placeholder='Phone Number' maxLength={10} />
                </Form.Item>

                <Form.Item>
                    <Button type='primary' block htmlType='submit'>Register</Button>
                </Form.Item>
            </Form>
        </div>
    </div>
}

export default UserProfile;