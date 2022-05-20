import React from "react";
import { NavLink, Outlet } from "react-router-dom";


//リンク共通化
export const Layout = () => {
    return(
        <>
        <div>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/todo">Todo</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
            </ul>
            <Outlet />
        </div>
        </>
    );
}