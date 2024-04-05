import { request } from "../config";
import { RequestPosts } from "@interface";

const posts:RequestPosts={
    get: ()=> request.get("/posts"),
    getById: (id)=> request.get(`/posts/${id}`),
    create: (data)=> request.post("/create",data),
    delete: (id)=> request.delete(`/delete/${id}`),
    update: (data)=> request.put("/update", data),
}

export default posts;