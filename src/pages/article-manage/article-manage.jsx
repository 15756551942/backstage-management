import React,{Component} from 'react'
import {Switch,Route} from 'react-router-dom'

import Home from './home'
import Add from './add'
import './article-manage.less'

export default class ArticleManage extends Component{
    render(){
        return(
            <Switch>
                <Route path='/articlemanage' component={Home}  exact></Route>
                <Route path='/articlemanage/add' component={Add}></Route>
            </Switch>
        )
    }
}