// 库 library / 文件夹 directory / 笔记 note

import request from '../request'
import type { AddLib , AddDir , AddNote, UpdateLib , UpdateDir , UpdateNote } from 'note';



/*
*  新建库 / 新建文件夹 / 新建笔记
*/
export const addLib = ( data : AddLib ) => { 
    return request.post('/add/lib', data)
} 

export const addDir = ( data : AddDir ) => { 
    return request.post('/add/dir', data)
}

export const addNote = ( data : AddNote ) => { 
    return request.post('/add/note', data)
}


/*
*  更新库 / 更新文件夹 / 更新笔记
*/
export const updateLib = ( data : UpdateLib ) => { 
    return request.post('/update/lib', data )
}

export const updateDir = ( data : UpdateDir ) => { 
    return request.post( '/update/dir' , data )
}

export const updateNote = ( data : UpdateNote ) => { 
    return request.post( '/update/note' , data )
}


/*
*  获取库下所有文件详情 / 获取当前文件夹下所有笔记详情  / 获取笔记详情
*/
export const getLib = ( id : string | number ) => { 
    return request.get(`/lib${id}`)
}

export const getDir = ( id : string | number ) => { 
    return request.get(`/dir${id}`)
}

export const getNote = ( id : string | number) => { 
    return request.get(`/note${id}`)
}



/*
*  删除库/ 删除文件夹 / 删除笔记
*/
export const deleteLib = ( id : string ) => { 
    return request.get(`/delete/lib${id}`)
}

export const deleteDir = ( id : string ) => { 
    return request.get(`/delete/dir${id}`)
}

export const deleteNote = ( id : string ) => { 
    return request.get(`/delete/note${id}`)
}


/*
*  获取文件结构树
*/
export const getLibTree = () => {
   return request.get('/file/treeData')
}

/* 
* 获取回收站信息 
*/
export const getRecycle = ()=>{
    return request.get('/recycle')
}
/*
*  恢复文件
*/ 
export const restore = ( id : string | number )=>{
    return request.get(`/recycle/restore${id}`)
}
/*
*  彻底删除文件
*/ 
export const rmfile = ( id : string | number )=>{
    return request.get(`/recycle/rmfile${id}`)
}