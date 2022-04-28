import React from "react";
import '../../assets/Css/MenuCss/menu.css';

// import icon
import { AiOutlineEye, AiOutlineBell } from 'react-icons/ai';
import { BsBook, BsFileEarmarkText, BsChatDots } from 'react-icons/bs';
import { BiCalendar } from 'react-icons/bi';

import { Link, useLocation } from 'react-router-dom';
import {useEffect, useState} from "react";


export const SuppMenu = (props: any) => {

    const StudMenu = [
        {
            path: '/',
            section: '',
            name: 'Tổng quan',
            icon: <AiOutlineEye/>,
        },
        {
            path: '/Class',
            section: 'DanhSachLop',
            name: 'Lớp học của tôi',
            icon: <BsBook />,
            smallMenu: [
                {
              id: 1,
              path: '/Class/DanhSachLop',
              section: 'DanhSachLop',
              name: 'Danh Sách Lớp',
            },
            {
                id: 2,
                path: '/LoginThamGia',
                section: 'DanhSachLop',
                name: 'Tham gia lớp học',
              },
            ],
        },
        {
            path: '/Test',
            section: 'DanhSachBaiKiemTra',
            name: 'Bài kiểm tra',
            icon: <BsFileEarmarkText />,
            smallMenu: [
                {
              id: 3,
              path: '/Test/DanhSachBaiKiemTra',
              section: 'DanhSachBaiKiemTra',
              name: 'Danh sách bài kiểm tra',
            },
            {
                id: 4,
                path: '/Test/BangDiem',
                section: 'BangDiem',
                name: 'Bảng điểm',
              },
            ],
        },
        {
            path: '/LichThi',
            section: 'LichThi',
            name: 'Lịch thi',
            icon: <BiCalendar />,
        },
        {
            path: '/ThongBao',
            section: 'ThongBao',
            name: 'Thông báo',
            icon: <AiOutlineBell />,
        },
        {
            path: '/TroGiup',
            section: 'TroGiup',
            name: 'Trợ giúp',
            icon: <BsChatDots />,
        },
    ]

    console.log(props.activeIndex)
    const [activeMenuSmall, setActiveMenuSmall] = useState<number | null>(null)
    const handleActiveSub = (id:number) => {
        setActiveMenuSmall(id)
    }
    console.log(activeMenuSmall)
    return (
        <>
            {/* Menu Phụ */}
            <div className="suppMenu">
                <ul className="suppMenuUl">

                    {/* Danh mục Tổng Quan */}
                    {
                    StudMenu && StudMenu.map((item:any, index:number) => (
                        <>
                        <Link to={item.path} key={index} onClick={() => props.handleActiveMenu(index)}> 
                            <li className={`${props.activeIndex === index ? 'suppMenuLiActive ': 'suppMenuLi'}`}>
                                {item.icon}&nbsp;&nbsp;
                                {item.name}
                                <div className={`${props.activeIndex === index ? ' notImportActive ': 'notImport'}`}/>
                            </li>
                        </Link> 
                         
                    {
                        item.smallMenu && item.smallMenu.map((smallItem:any, index:number) => ( 
                            <Link to={smallItem.path} key={index} onClick={() => handleActiveSub(smallItem.id)}>
                                 <li className={`${activeMenuSmall === smallItem.id ? 'smallSuppMenuLiActive': 'smallSuppMenuLi'}`}>
                                    {smallItem.name}
                                </li>
                            </Link>
                        ))
                    }   
                    </> 
                    ))
                }
                
                
                </ul>
            </div>
        </>
    )
}