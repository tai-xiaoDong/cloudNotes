declare module 'note' {
    /*
    * 库 library / 文件夹 directory / 笔记 note  
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
    export  type resNote = {
        dirId : number | string,
        name : string,
        remark? : string,
        ispublic? : boolean,
        auth : string[] , // VIEW | EDIT
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
    }
    export type UpdateProject = {
        id : number | string,
        name? : string,
        readme? : string,
        gitAddress? : { type : string , address : string }[], // gitee | github | coding
        present? : string,
        techStack? : string[],
    }

    
}
