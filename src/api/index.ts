import request from './request'
type Request = {
    [key:string]:any
}

export const  getTableList = (params:Request) => {
    return request.get('', params)
}


 
