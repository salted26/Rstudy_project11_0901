import axios from "axios";
import {useQuery} from "@tanstack/react-query";

const fetchPosts=()=>{
    // const id = queryData.queryKey[1]
    console.log("refetch");
    return axios.get("https://my-json-server.typicode.com/salted26/Rstudy_project11_0901/posts")
}

export const usePostQuery =()=>{
    return useQuery({
        queryKey:['posts'],
        queryFn:()=>fetchPosts(),
        retry : 1, // 재시도 횟수를 지정할 수 있다.
        select:(data)=>{
            return data.data;
        },
    });
}
