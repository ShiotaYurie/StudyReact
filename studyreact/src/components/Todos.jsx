import React from "react";
import { useParams } from "react-router";

export const Todos = () => {
    const {todoID} = useParams();

    return(
        <>
          <p>Todo詳細</p>
           {todoID}
        </>
    );
}