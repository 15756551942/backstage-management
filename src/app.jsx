import React,{Component} from 'react'
import {BrowserRouter,Route,Switch} from 'react-router-dom'

import Login from './pages/login/login'
import Main from './pages/main/main'

export default class App extends Component{
    render(){
        return (
            <BrowserRouter>
                <Switch>
                    <Route path='/login' component={Login}></Route>
                    <Route path='/' component={Main}></Route>
                </Switch>
            </BrowserRouter>
        )
    }
}