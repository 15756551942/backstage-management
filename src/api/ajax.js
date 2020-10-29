import axios from 'axios'

// var params = new URLSearchParams()
// params.append('key','value')

export default function ajax(url,data={},type='GET'){
    if(type==='GET'){
        return axios.get(url,{
            params:data
        })
    }else{
        return axios.post(url,data)
    }
}