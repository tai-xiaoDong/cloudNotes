import request from '../request'
import type { UserInfo, AddProject ,UpdateProject} from 'user'


export const userInfo = () => {
    return request.get(`/userInfo`)
}

export const updateUserInfo = ( data : UserInfo ) => {
    return request.post('/update/userInfo', data)
}

export const heatmap = () =>{
    return request.get('/heatmap/data')
}

export const addProject = ( data : AddProject[]) => {
    return request.post('/add/project', data)
}

export const updateProject = ( data : UpdateProject[]) => {
    return request.post('/update/project', data)
}
