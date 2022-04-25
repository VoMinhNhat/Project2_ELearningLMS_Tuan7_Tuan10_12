import React from "react";
import '../../assets/Css/MenuCss/menu.css';

import { Link } from 'react-router-dom';

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
                <Link to={'/'}> 
                    <li className="mainMenuLi"><AiOutlineEye /></li>
                </Link>
                <Link to ={'/DanhSachLop'}>
                    <li className="mainMenuLi"><BsBook /></li>
                </Link>
                <Link to ={'/DanhSachBaiKiemTra'}>
                    <li className="mainMenuLi"><BsFileEarmarkText /></li>
                </Link>
                <Link to ={'/LichThi'}>
                    <li className="mainMenuLi"><BiCalendar /></li>
                </Link>    
                <Link to ={'/ThongBao'}>
                    <li className="mainMenuLi"><AiOutlineBell /></li>
                </Link>    
                <Link to ={'/TroGiup'}>
                    <li className="mainMenuLi"><BsChatDots /></li>
                </Link>    
            </ul>

            {/* Menu Phụ */}
            <SuppMenu/>

        </div>
    )
}