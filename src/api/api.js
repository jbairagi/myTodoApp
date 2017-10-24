import {ROOT_URL} from './../constants/constants'

export const request = (path, method, body = null) => {
    let headers = {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
    }
    const token = window.localStorage.getItem('token')
    if(token){
        headers["auth-token"] = token
    }
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

export const getProjects = () => {
    return request('projects', 'post', null)
}

export const addNewProjects = (body) => {
    return request('addProjects', 'post', body)
}