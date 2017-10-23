import {ROOT_URL} from './../constants/constants'
import { browserHistory } from 'react-router'

export const request = (path, method, body = null) => {
    let headers = {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
    }
    const token = window.localStorage.getItem('token')
    if(token){
        headers["auth-token"] = token
    }
    // else browserHistory.push('/');
    return fetch(`${ROOT_URL}${path}`, {
        method: method,  
        headers: headers,  
        body: body
    })
    .then(res => res.json())
    .then(result => {
        return result;
    })
}


export const login = body => {
    return request('login', 'post', body)
}

export const project = () => {
    return request('projects', 'post', null)
}