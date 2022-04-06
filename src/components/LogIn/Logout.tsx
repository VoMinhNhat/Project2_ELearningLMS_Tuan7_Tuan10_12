import React from "react";

//import cho css
import '../../assets/Css/LoginCss/Logout.css';

import {BiUserCircle} from 'react-icons/bi';

export const Logout = () => {
    return(
        <div className="Logout">
            <i className="iconUserLogOut"><BiUserCircle/></i>
            <div className="userName">Hiền mai</div>
            <button className="btnLogOut">Đăng xuất</button>
        </div>
    )
}