import React from 'react';
import {usePostQuery} from "../hooks/usePosts";


const ReactQueryPage = () => {

    const {data, isLoading,isError, error, refetch} = usePostQuery()

    if(isLoading){
        return (
            <div className="page">
                <h3>Loading....</h3>
            </div>
        )
    }
    if(isError){
        return <h3>{error.message}</h3>
    }
    return (
        <div className="page">
            ReactQueryPage
            {data?.map((item, index) => (
                <div key={index}>{item.id} : {item.title} | {item.views}</div>
            ))}
            <button onClick={refetch}>Post Reload</button>
        </div>
    );
};

export default ReactQueryPage;