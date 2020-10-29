import React,{Component} from 'react'
import {Route,Switch} from 'react-router-dom'
import { Layout } from 'antd';

import LeftNav from '../../components/left-nav/left-nav'
import HeadBar from '../../components/head-bar/head-bar'
import ArticleManage from '../article-manage/article-manage'

const { Sider, Content } = Layout;

export default class Main extends Component{
    render(){
        return (
            <Layout style={{height:'100%'}}>
                <Sider><LeftNav></LeftNav></Sider>
                <Layout>
                    <HeadBar></HeadBar>
                    <Content>
                        <Switch>
                            <Route path='/articlemanage' component={ArticleManage}></Route>
                        </Switch>
                    </Content>
                </Layout>
            </Layout>
        )
    }
}