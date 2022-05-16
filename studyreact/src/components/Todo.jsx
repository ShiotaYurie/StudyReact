import React from "react";
import { Link } from "react-router-dom";

export const Todo = () => {

    return(

        <>
        <div>
          <p>Todoだよ</p>
          <ul>
            <li><Link to="/todo/1">Todo1</Link></li>
            <li><Link to="/todo/2">Todo2</Link></li>
            <li><Link to="/todo/3">Todo3</Link></li>
          </ul> 
        </div>
        </>
    );
}