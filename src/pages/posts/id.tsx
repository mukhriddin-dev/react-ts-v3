import { useState, useEffect } from "react";
import { postAPI } from "@service";
import { useParams , useNavigate } from "react-router-dom";
import "./style.scss"
import { Section , Container } from '@containers';


const id = () => {

    const [data, setData]=useState<any>();
    const [loading, setLoading]=useState<boolean>(true);
    const [error, setError]=useState<string | boolean>("");


    const {id}=useParams() as {id:string};
    const navigate = useNavigate();



    async function getById(id: number |string): Promise<any> {
        try {
            const response = await postAPI.getById(id);
             console.log(response)
            if (response.status !== 200) {
                setError(response.statusText);
                setLoading(false);
            }
            setData(response.data);
            setLoading(false);
        } catch (err: any) {
            setError(err.message);
            setLoading(false);
        }
    }

useEffect(()=>{
    getById(id);
},[])

    return (
        <Section title="Post item">
            <Container>

               <div className="flex justify-between">
                <span></span>
               <button onClick={()=>navigate(-1)} className="bg-red-600 text-white px-3 py-2 rounded-xl active:bg-red-700 m-2">
                    go back
                </button>
               </div>

            <h1 className="py-4 border my-3 px-2">{data?.title}</h1>
            <p className="py-4 border my-3 px-2">{data?.body}</p>
            </Container>
        </Section>
    );
};

export default id;