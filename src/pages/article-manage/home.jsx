import React,{Component} from 'react'
import { Card,Button,Table,Select,Input } from 'antd';
import {PlusOutlined} from '@ant-design/icons'

import LinkButton from '../../components/link-button/link-button'
import {reqArticleSearch} from '../../api'

export default class Home extends Component{
  state = {
    total:0,
    articleLists:[]
  }

  componentWillMount() {
    this.columns =[
      {
        title: 'ID',
        dataIndex: 'order',
        align: 'center'
      },
      {
        title: '名称',
        dataIndex: 'title',
        align: 'center'
      },
      {
        title: '类型',
        dataIndex: 'type',
        align: 'center'
      },
      {
        title: '发布时间',
        dataIndex: 'createAt',
        align: 'center'
      },
      {
        title: '修改时间',
        dataIndex: 'updateAt',
        align: 'center'
      },
      {
        title: '发布者',
        dataIndex: 'author',
        align: 'center'
      },
      {
        title: '状态',
        dataIndex: 'status',
        align: 'center'
      },
      {
        title: '操作',
        align: 'center',
        render: (product) => (
          <span>
            <LinkButton>下线</LinkButton>
            <LinkButton>编辑</LinkButton>
            <LinkButton>删除</LinkButton>
          </span>
        )
      }
    ]
  }

  getArticleLists = () => {
    reqArticleSearch().then(response => {
      console.log(response.data)
      this.setState({
        total:response.data.data.total,
        articleLists:response.data.data.articleList
      })
    }).catch(error => {
      console.log(error)
    })
  }

  componentDidMount(){
    this.getArticleLists()
  }

  render(){
    const {articleLists,total} = this.state
    
    const extre = (
      <Button type='primary' onClick={() => this.props.history.push('/articlemanage/add')}><PlusOutlined></PlusOutlined>新增</Button>
    )
    return(
      <div style={{margin:20}}>
        <Card style={{marginBottom:30,height:200}}>
          <div style={{display:'flex',justifyContent:'space-between',flexWrap:'wrap',height:100,alignItems:'space-between'}}>
            <span style={{width:350}}>
              <span>发布时间</span>
              <Input type="text" style={{width:250,marginLeft:20}}/>
            </span>
            <span style={{width:350}}>
              <span>修改时间</span>
              <Input type="text" style={{width:250,marginLeft:20}}/>
            </span>
            <span style={{width:350}}>
              <span>类型</span>
              <Select value='1' style={{width:250,marginLeft:20}}>
                <Select.Option value='1'>全部</Select.Option>
                <Select.Option value='2'>首页Banner</Select.Option>
                <Select.Option value='3'>找职业Banner</Select.Option>
                <Select.Option value='4'>找精英Banner</Select.Option>
                <Select.Option value='5'>行业大图</Select.Option>
              </Select>
            </span>
            <span style={{width:350}}>
              <span>状态</span>
              <Select value='1' style={{width:250,marginLeft:48}}>
                <Select.Option value='1'>全部</Select.Option>
                <Select.Option value='2'>上线</Select.Option>
                <Select.Option value='3'>草稿</Select.Option>
              </Select>
            </span>
          </div>
          <div style={{marginLeft:1000}}>
            <Button type='primary'>清空</Button>
            <Button type='primary'>搜索</Button>
          </div>
        </Card>
        <Card title="Article列表" extra={extre} className='home'>
          <Table 
          dataSource={articleLists} 
          columns={this.columns} 
          bordered rowKey='id' 
          pagination={{
            showQuickJumper:true,
            total,
          }}
          />
        </Card>
      </div>
    )
  }
}