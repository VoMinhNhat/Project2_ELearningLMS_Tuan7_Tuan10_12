import React, {useState, useEffect} from "react";
import '../../assets/Css/MenuCss/menu.css';

import { Link, useLocation, NavLink } from 'react-router-dom';

// import icon
import { AiOutlineEye, AiOutlineBell } from 'react-icons/ai';
import { BsBook, BsFileEarmarkText, BsChatDots } from 'react-icons/bs';
import { BiCalendar } from 'react-icons/bi';

import webSymbol from '../../assets/image/Logo.svg';
import { SuppMenu } from "./SuppMenu";
import { Student } from "../Students/Student";



export const Menu = (props:any) => {

    const StudMenu = [
        {
            path: '/',
            section: '',
            icon: <AiOutlineEye/>,
        },
        {
            path: '/Class',
            section: 'Class',
            icon: <BsBook />,
        },
        {
            path: '/Test',
            section: 'Test',
            icon: <BsFileEarmarkText />,
        },
        {
            path: '/LichThi',
            section: 'LichThi',
            icon: <BiCalendar />,
        },
        {
            path: '/ThongBao',
            section: 'ThongBao',
            icon: <AiOutlineBell />,
        },
        {
            path: '/TroGiup',
            section: 'TroGiup',
            icon: <BsChatDots />,
        },
    ]

    const { pathname } = useLocation()

    const [activeMenu, setActiveMenu] = useState<number>(0);
    const curPath = pathname.split("/")[1]


    const activeIndex = StudMenu.findIndex(item => item.section === curPath)
    
    console.log(activeIndex)
    useEffect(() => { 
        setActiveMenu(curPath.length === 0 ? 0 : activeIndex)
    },[] )

    const handleActiveMenu = (index:number) => {
        setActiveMenu(index)
    }
    return (
        <div className="mainMenu">

            {/* Biểu Tượng Của Trang Web */}
            <img className="webSymbol" style={{ backgroundImage: `url(${webSymbol})` }} />

            {/* Menu Chính */}
            <ul className="mainMenuUl">   
            {
                StudMenu && StudMenu.map((item:any, index:number) => (
                    <Link to ={item.path} key={index} onClick={() => handleActiveMenu(index)}>
                    <li className={`${activeIndex === index ? ' mainMenuLiActive': 'mainMenuLi'}`} >{item.icon}</li>
                </Link>    
                ))
            }
               
            </ul>

            {/* Menu Phụ */}
            <SuppMenu activeIndex={activeIndex} activeMenu={activeMenu}/>

        </div>
    )
}