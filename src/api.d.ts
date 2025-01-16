declare module 'note' {
    /*
    * 库 library / 文件夹 directory / 笔记 note 
    * 库 lib    /  文件夹 dir      / 笔记 note
    * 用户 ---> 库 ---> 文件夹 ---> 笔记
    */
    export type AddLib =  {
        name: number | string ,
        remark?: string,
    }
    export type AddDir = {
        libId : number | string,
        name : string,
        remark? : string,
    }
    export type AddNote = {
        dirId : number | string,
        name : string,
        remark? : string,
        ispublic? : boolean,
    }

    export type UpdateLib =  {
        libId : number | string,
        name? : string,
        remark? : string,
    }
    export type UpdateDir = {
        dirId : number | string,
        name? : string,
        remark? : string,
    }
    export type UpdateNote = {
        noteId : number | string,
        name? : string,
        remark? : string,
        content? : string,
        ispublic? : boolean,
    }

    export type Note = {
        libId? : number | string, // 库id
        dirId? : number | string, // 文件夹id
        id? : number | string, // 笔记id
        name? : string, // 笔记名称
        remark? : string, // 备注
        content? : string, // 内容
        ispublic? : boolean, // 是否公开
        createTime? : string, // 创建时间
        updateTime? : string, // 更新时间
        auth? : string[], // VIEW | EDIT 权限
        type? : 'favorite' | 'note' | 'recycle' // 收藏夹 | 笔记 | 回收站
    }
} 

declare  module 'user' {
    export type UserInfo = {
        id : number | string,
        name? : string,
        avatar? : string,
        email? : string,
        remark? : string,
        phone? : string,
        tag? : string[],
        personalTagline? : string,
        markdown? : string | number,
        password? : string,
    }
    export type AddProject = {
        name : string, //项目名称
        readme? : string, // 项目简介
        gitAddress? : { type : string , address : string }[], // gitee | github | coding
        present : string, // 演示地址
        techStack : string[], // 技术栈
        ispublic? : boolean,
    }
    export type Project = {
        name : string, //项目名称
        readme? : string, // 项目简介
        gitAddress? : { type : string , address : string }[], // gitee | github | coding
        present : string, // 演示地址
        techStack : string[], // 技术栈
        ispublic? : boolean,
    }
    export type UpdateProject = {
        id : number | string,
        name? : string,
        readme? : string,
        gitAddress? : { type : string , address : string }[], // gitee | github | coding
        present? : string,
        techStack? : string[],
        ispublic? : boolean,
    }
}
