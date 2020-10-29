import React,{Component} from 'react'
import {Card,Select,Input,Form,Button} from 'antd'

import './pictures-wall'
import PicturesWall from './pictures-wall';

export default class Add extends Component{
    render(){
        const formItemLayout = {
            labelCol: {
              xs: {
                span: 24,
              },
              sm: {
                span: 5,
              },
            },
            wrapperCol: {
              xs: {
                span: 24,
              },
              sm: {
                span: 12,
              },
            },
          };

        return(
            <Card title='新增article列表' className='add' style={{marginBottom:30}}>
                <Form {...formItemLayout}>
                    <Form.Item label='标题名称'>
                        <Input></Input>
                    </Form.Item>
                    <Form.Item label='类型'>
                        <Select className='add-input' value='1'>
                            <Select.Option value='1'>请选择</Select.Option>
                            <Select.Option value='2'>首页Banner</Select.Option>
                            <Select.Option value='3'>找职业Banner</Select.Option>
                            <Select.Option value='4'>找精英Banner</Select.Option>
                            <Select.Option value='5'>行业大图</Select.Option>
                        </Select>
                    </Form.Item>
                    <Form.Item label='说明'>
                        <Input></Input>
                    </Form.Item>
                    <Form.Item label='跳转链接'>
                        <Input></Input>
                    </Form.Item>
                    <Form.Item label='配图'>
                        <PicturesWall></PicturesWall>
                    </Form.Item>
                    <Form.Item>
                        <Button type='primary'>立即上线</Button>
                        <Button type='primary'>存为草稿</Button>
                        <Button type='primary'>取消</Button>
                    </Form.Item>
                </Form>
            </Card>
        )
    }
}