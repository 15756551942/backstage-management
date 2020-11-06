import ajax from './ajax'

const BASE = 'api'

export const reqLogin = (name,pwd) => ajax(BASE + '/a/login','name='+name+'&pwd='+pwd,'POST')

export const reqArticleSearch = (page) => ajax(BASE + '/a/article/search',{page})

export const reqArticleBy = (page,type,status) => ajax(BASE + '/a/article/search',{page:page,type:type,status:status})

export const reqArticleByType = (page,type) => ajax(BASE + '/a/article/search',{page:page,type:type})

export const reqArticleByStatus = (page,status) => ajax(BASE + '/a/article/search',{page:page,status:status})

export const reqAddArticle = (title,type,status,img,skip) =>ajax(BASE + '/a/u/article',{title,type,status,img,skip},'POST')

export const reqDeleteArticleList = (currentId) => ajax(BASE + '/a/u/article/'+{currentId},'DELETE')