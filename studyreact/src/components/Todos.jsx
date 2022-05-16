import React from "react";
import { useParams } from "react-router";

export const Todos = () => {
    const { todoId } = useParams()

    return(
        <>
        <div>
          <p>Todo詳細</p>
          <p>ID: {todoId}</p>
        </div>
        </>
    );
}