import { request } from "../config";
import { Request } from "@interface";

const auth:Request={
    signin: (data)=> request.post("/login",data),
    signup: (data)=> request.post("/signup",data),
    signout: ()=> request.post("/signout"),
    reset: (data)=> request.post("/reset", data),
}

export default auth