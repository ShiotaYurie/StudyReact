import React from "react";
import { useParams } from "react-router";

export const Abouts = ()=>{
    const {aboutID} = useParams();

    return(
        <>
        <div>
        <p>About詳細</p>
         {aboutID} 
        </div>
        </>
    );
}