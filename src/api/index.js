import Base from 'antd/lib/typography/Base'
import ajax from './ajax'

const BASE = 'api'

export const reqLogin = (name,pwd) => ajax(BASE + '/a/login','name='+name+'&pwd='+pwd,'POST')

export const reqArticleSearch = () => ajax(BASE + '/a/article/search')

export const reqSearch = () => ajax(Base + '/a/article/search')