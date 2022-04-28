import React from "react";

//import cho css
import '../../assets/Css/LoginCss/Logout.css';

import {BiUserCircle} from 'react-icons/bi';

import { Link } from "react-router-dom";

export const Logout = () => {
    return(
        <div className="Logout">
            <i className="iconUserLogOut"><BiUserCircle/></i>
            <div className="userName">Hiền mai</div>
            <Link to={'/Login'}>
                <button className="btnLogOut">Đăng xuất</button>
            </Link>
        </div>
    )
}