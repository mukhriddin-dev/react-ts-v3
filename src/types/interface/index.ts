// --------- Authorization  -------------

import { ReactNode } from "react";


export interface Signin{
    username: string;
    password: string|number;
}

export interface Signup extends Signin{
    name: string;
    phone: string;
}

export interface ResetPassword{
    email?: string;
    phone?: string|number;
}


export interface Request{
    signin:(data:Signin)=>any,
    signup:(data:Signup)=>any,
    signout:()=>void,
    reset:(data:ResetPassword)=>void
}

//-------------------------------------

export interface RequestPosts{
    get:()=>any,
    getById:(id:number)=>any,
    create:(data:any)=>any,
    delete:(id:string|number)=>void,
    update:(data:any)=>any
}



export interface PostItem{
    id:number;
    title:string;
    body:string;
    userId:number;
}

export interface CardPropType{
    data:PostItem;
    key:number|string
}


export interface gridPropType{
    children:propType | ReactNode;
    cols:string|number,
    gap:string|number
}



// ------------------------------------



// ------------- React Tsx , JSX Elmenets -------------

export interface propType{
    children: string | any | null
}

export interface sectionPropType{
    children: string | any | null;
    title?: string;
    id?:string | number
}