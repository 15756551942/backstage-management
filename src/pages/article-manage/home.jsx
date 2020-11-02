import React,{Component} from 'react'
import { Card,Button,Table,Select,Input } from 'antd';
import {PlusOutlined} from '@ant-design/icons'

import LinkButton from '../../components/link-button/link-button'
import {reqArticleSearch,reqArticleBy,reqArticleByType,reqArticleByStatus} from '../../api'

export default class Home extends Component{
  state = {
    total:0,
    articleLists:[],
    type:'',
    status:''
  }

  tratimeformat = (time) => {
    var date = new Date(time)
    var Y = date.getFullYear() + '-'
    var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-'
    const D = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) + ' '
    const h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':'
    const m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':'
    const s = (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds())
    return Y + M + D + h + m + s
  }

  componentWillMount() {
    const {articleLists} = this.state
    this.columns =[
      {
        title: 'ID',
        render: (obj) => {
          console.log(articleLists.indexOf(obj))
          return <span>{articleLists.indexOf(obj)}</span>
        },
        align: 'center'
      },
      {
        title: '名称',
        dataIndex: 'title',
        align: 'center'
      },
      {
        title: '类型',
        render: (obj) => {
          // console.log(obj)
          if(obj.type === 0){
            return <span>首页banner</span>
          }else if(obj.type === 1){
            return <span>找职位banner</span>
          }else if(obj.type === 2){
            return <span>找精英banner</span>
          }else if(obj.type === 3){
            return <span>行业大图</span>
          }
        },
        align: 'center'
      },
      {
        title: '发布时间',
        render: (obj) => {
          return <span>{this.tratimeformat(obj.createAt)}</span>
        },
        align: 'center'
      },
      {
        title: '修改时间',
        render: (obj) => {
          return <span>{this.tratimeformat(obj.updateAt)}</span>
        },
        align: 'center'
      },
      {
        title: '发布者',
        dataIndex: 'author',
        align: 'center'
      },
      {
        title: '状态',
        render: (obj) => {
          if(obj.status === 1){
            return <span>草稿</span>
          }else{
            return <span>上线</span>
          }
        },
        align: 'center'
      },
      {
        title: '操作',
        align: 'center',
        render: () => (
          <span>
            <LinkButton>下线</LinkButton>
            <LinkButton>编辑</LinkButton>
            <LinkButton>删除</LinkButton>
          </span>
        )
      }
    ]
  }

  getArticleLists = ({page}) => {
    reqArticleSearch({page}).then(response => {
      console.log(response.data)
      this.setState({
        total:response.data.data.total,
        articleLists:response.data.data.articleList
      })
    }).catch(error => {
      console.log(error)
    })
  }

  getArticleBy = (page,type,status) => {
    if(type === '' && status === ''){
      reqArticleBy(page).then(response => {
        this.setState({
          total:response.data.data.total,
          articleLists:response.data.data.articleList
        })
      }).catch(error => {
        console.log(error)
      })
    }else if(status === ''){
      reqArticleByType(page,Number(type)).then(response => {
        this.setState({
          total:response.data.data.total,
          articleLists:response.data.data.articleList
        })
      }).catch(error => {
        console.log(error)
      })
    }else if(type === ''){
      reqArticleByStatus(page,Number(status)).then(response => {
        this.setState({
          total:response.data.data.total,
          articleLists:response.data.data.articleList
        })
      }).catch(error => {
        console.log(error)
      })
    }else {
      reqArticleBy(page,Number(type),Number(status)).then(response => {
        this.setState({
          total:response.data.data.total,
          articleLists:response.data.data.articleList
        })
      }).catch(error => {
        console.log(error)
      })
    }
  }

  

  componentDidMount(){
    this.getArticleLists(1)
  }

  // function handleChange(value) {
  //   console.log(value); // { value: "lucy", key: "lucy", label: "Lucy (101)" }
  // }

  render(){
    const {articleLists,total,type,status} = this.state
    
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
              <Select
              value={type}
              style={{width:250,marginLeft:20}} 
              onChange={value => this.setState({type:value})}
              >
                <Select.Option value=''>全部</Select.Option>
                <Select.Option value='0'>首页Banner</Select.Option>
                <Select.Option value='1'>找职业Banner</Select.Option>
                <Select.Option value='2'>找精英Banner</Select.Option>
                <Select.Option value='3'>行业大图</Select.Option>
              </Select>
            </span>
            <span style={{width:350}}>
              <span>状态</span>
              <Select 
              value={status} 
              style={{width:250,marginLeft:48}} 
              onChange={value => this.setState({status:value})}
              >
                <Select.Option value=''>全部</Select.Option>
                <Select.Option value='2'>上线</Select.Option>
                <Select.Option value='1'>草稿</Select.Option>
              </Select>
            </span>
          </div>
          <div style={{marginLeft:1000}}>
            <Button type='primary'>清空</Button>
            <Button type='primary' onClick={() => this.getArticleBy(1,type,status)}>搜索</Button>
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
            onChange: (current) => {this.getArticleLists({page:current})}
          }}
          />
        </Card>
      </div>
    )
  }
}