import { request } from './../helpers/fetchHelpers';

export const login = body => {
    return request('login', 'post', body)
}

export const addNewUser = body => {
    return request('addUser', 'post', body)
}

export const getProjects = () => {
    return request('projects', 'post', null)
}

export const addNewProjects = (body) => {
    return request('addProjects', 'post', body)
}

export const removeProject = (body) => {
    return request('removeProject', 'post', body)
}

export const updateProjectDescription = (body) => {
    return request('editProjectDescription', 'post', body)
}

export const updateProjectBeginningDate = (body) => {
    return request('editProjectBeginningDate', 'post', body)
}

export const updateProjectDueDate = (body) => {
    return request('editProjectDueDate', 'post', body)
}