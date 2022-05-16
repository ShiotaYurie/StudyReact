import React from "react";
import { Link } from "react-router-dom";

export const About = () => {
    return(
        <>
          <div>
            <p>Aboutだよ</p>
            <ul>
            <li><Link to="/about/1">About1</Link></li>
            <li> <Link to="/about/2">About2</Link></li>
            <li><Link to="/about/3">About3</Link></li>
            </ul>
          </div>
        </>
    );

}