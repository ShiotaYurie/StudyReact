import React from "react";
import { useParams } from "react-router";

export const Abouts = ()=>{
    const {aboutID} = useParams

    return(
        <>
        <p>About詳細</p>
         <p>ID: {aboutID}</p> 
        </>
    );
}