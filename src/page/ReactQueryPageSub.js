import React from 'react';
import axios from "axios";
import {useQueries} from "@tanstack/react-query";

const ReactQueryPageSub = () => {

    const idx = [1,2,3,4];

    const fetchPostDetail =(id)=> {
        return axios.get(`https://my-json-server.typicode.com/salted26/Rstudy_project11_0901/posts/${id}`)
    }

    const results = useQueries({
        queries: idx.map((id) =>{
            return {
                queryKey: ["posts", id],
                queryFn: ()=>fetchPostDetail(id),
                select:(data) =>{
                    return data.data;
                }
            }
        }),
        combine: (results) => {
            return {
                data: results.map((result)=> result.data)
            }
        }
    });

    console.log("ReactQuery-Sub", results);

    return (
        <div className="page">
            <h3>React Query Sub</h3>
        </div>
    );
};

export default ReactQueryPageSub;