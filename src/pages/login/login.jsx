import React from 'react'
import { Form, Input, Button, } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'

import './login.less'
import {reqLogin} from '../../api'
// import test from '../../api/test'
const Login = () => {

    const onFinish = values => {

        const {name,pwd} = values
        
        reqLogin(name,pwd).then(response => {
            console.log('成功',response.data)
            const result = response.data
            if(result.code === 0){
            }else{
                alert(result.message)
            }
        }).catch(error => {
            console.log('失败',error)
        })
      };

    return (
        <div className='login'>
            <div className='login-content'>
                <Form name="normal_login" className="login-form" initialValues={{ remember: true }} onFinish={onFinish}>
                    <Form.Item name="name" rules={[{ required: true, message: 'Please input your Username!' }]}>
                        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="用户名" />
                    </Form.Item>
                    <Form.Item name="pwd" rules={[{ required: true, message: 'Please input your Password!' }]}>
                        <Input prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="密码" />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button">登录</Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};

export default Login