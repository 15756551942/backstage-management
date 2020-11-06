import React, { Component } from 'react'
import { Card, Select, Input, Form, Button } from 'antd'

import './pictures-wall'
import PicturesWall from './pictures-wall'
import {reqAddArticle} from '../../api/index'

export default class Add extends Component {
  state = {
    type:'',
    title:'',
    illustrate:'',
    skip:'',
    status:1
  }

  constructor(props){
    super(props)
    this.myRef = React.createRef()
  }

  addArticleonline = (title,type,illustrate) => {
    const img = this.myRef.current.filelist.map(file => file.name)
    if(this.status === 2){
      reqAddArticle(title,type,illustrate,img).then(response => {
        console.log(title,type,illustrate,img)
        console.log(response.data)
      }).catch(error => {
        console.log(title,type,illustrate,img)
        console.log(error)
      })
    }else{
      this.setState({status:2})
      reqAddArticle(title,type,illustrate,img).then(response => {
        console.log(title,type,illustrate,img)
        console.log(response.data)
      }).catch(error => {
        console.log(title,type,illustrate,img)
        console.log(error)
      })
    }
  }

  addArticledraft = (title,type,illustrate) => {
    const img = this.myRef.current.filelist.map(file => file.name)
    if(this.status === 1){
      reqAddArticle(title,type,illustrate,img).then(response => {
        console.log(title,type,illustrate,img)
        console.log(response.data)
      }).catch(error => {
        console.log(title,type,illustrate,img)
        console.log(error)
      })
    }else{
      this.setState({status:1})
      reqAddArticle(title,type,illustrate,img).then(response => {
        console.log(title,type,illustrate,img)
        console.log(response.data)
      }).catch(error => {
        console.log(title,type,illustrate,img)
        console.log(error)
      })
    }
  }

  render() {
    const {title,type,illustrate,skip} = this.state

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

    return (
      <Card title='新增article列表' className='add' style={{ marginBottom: 30 }}>
        <Form {...formItemLayout}>
          <Form.Item label='标题名称'>
            <Input value={title} onChange={e => this.setState({title:e.target.value})}></Input>
          </Form.Item>
          <Form.Item label='类型'>
            <Select className='add-input' value={type} onChange={value => this.setState({type:value})}>
              <Select.Option value=''>请选择</Select.Option>
              <Select.Option value='0'>首页Banner</Select.Option>
              <Select.Option value='1'>找职业Banner</Select.Option>
              <Select.Option value='2'>找精英Banner</Select.Option>
              <Select.Option value='3'>行业大图</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label='说明'>
            <Input value={illustrate} onChange={e => this.setState({illustrate:e.target.value})}></Input>
          </Form.Item>
          <Form.Item label='跳转链接'>
            <Input value={skip} onChange={e => this.setState({skip:e.target.value})}></Input>
          </Form.Item>
          <Form.Item label='配图'>
            <PicturesWall ref={this.myRef}></PicturesWall>
          </Form.Item>
          <Form.Item>
            <Button type='primary' onClick={() => this.addArticleonline({title,type,illustrate,skip})}>立即上线</Button>
            <Button type='primary' onClick={() => this.addArticledraft({title,type,illustrate,skip})}>存为草稿</Button>
            <Button type='primary'>取消</Button>
          </Form.Item>
        </Form>
      </Card>
    )
  }
}