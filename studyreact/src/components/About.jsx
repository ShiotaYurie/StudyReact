import React from "react";
import { Link } from "react-router-dom";

export const About = () => {
    return(
        <>
          <div>
            {/* Link設定 */}
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/todo">Todo</Link></li>
              <li><Link to="/about">About</Link></li>
            </ul>
            <p>Aboutだよ</p>
               
          </div>
        </>
    );

}