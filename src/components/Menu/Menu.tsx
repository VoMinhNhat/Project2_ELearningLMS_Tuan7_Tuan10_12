import React from "react";
import '../../assets/Css/MenuCss/menu.css';

// import icon
import { AiOutlineEye, AiOutlineBell } from 'react-icons/ai';
import { BsBook, BsFileEarmarkText, BsChatDots } from 'react-icons/bs';
import { BiCalendar } from 'react-icons/bi';

import webSymbol from '../../assets/image/Logo.svg';
import { SuppMenu } from "./SuppMenu";

export const Menu = () => {
    return (
        <div className="mainMenu">

            {/* Biểu Tượng Của Trang Web */}
            <img className="webSymbol" style={{ backgroundImage: `url(${webSymbol})` }} />

            {/* Menu Chính */}
            <ul className="mainMenuUl">
                <li className="mainMenuLi"><AiOutlineEye /></li>
                <li className="mainMenuLi"><BsBook /></li>
                <li className="mainMenuLi"><BsFileEarmarkText /></li>
                <li className="mainMenuLi"><BiCalendar /></li>
                <li className="mainMenuLi"><AiOutlineBell /></li>
                <li className="mainMenuLi"><BsChatDots /></li>
            </ul>

            {/* Menu Phụ */}
            <SuppMenu/>

        </div>
    )
}