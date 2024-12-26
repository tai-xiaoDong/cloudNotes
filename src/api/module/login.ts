import request from '../request'

export const login = ( data : { username : string, password : string } ) => {
    return request.post('/login', data)
}

export const logout = () => {
    return request.get('/logout')
}

export const register = ( data : { username : string, password : string } ) =>{
    return request.post('/register',data)
}

export const authCode = () => {
    return request.get('/authCode')
}
