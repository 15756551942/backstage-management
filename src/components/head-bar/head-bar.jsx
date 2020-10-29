import React,{Component} from 'react'

import './head-bar.less'
import LinkButton from '../../components/link-button/link-button'

export default class HeadBar extends Component{
    render(){
        return(
            <div className='head-bar'>
                <span>管理员</span>
                <span>|</span>
                <span>admin</span>
                <span>|</span>
                <LinkButton>退出</LinkButton>
            </div>
        )
    }
}