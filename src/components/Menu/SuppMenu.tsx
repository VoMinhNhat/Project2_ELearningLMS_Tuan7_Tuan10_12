import React from "react";
import '../../assets/Css/MenuCss/menu.css';

// import icon
import { AiOutlineEye, AiOutlineBell } from 'react-icons/ai';
import { BsBook, BsFileEarmarkText, BsChatDots } from 'react-icons/bs';
import { BiCalendar } from 'react-icons/bi';


export const SuppMenu = () => {
    return (
        <>
            {/* Menu Phụ */}
            <div className="suppMenu">
                <ul className="suppMenuUl">

                    {/* Danh mục Tổng Quan */}
                    <li className="suppMenuLi">
                        <AiOutlineEye />&nbsp;
                        Tổng quan
                        <div className="notImport" />
                    </li>

                     {/* Danh mục Lớp Học */}
                    <li className="suppMenuLi">
                        <BsBook />&nbsp;
                        Lớp học của tôi
                        <div className="notImport" />
                    </li>
                    
                        {/* Danh mục Nhỏ Cho Phần Lớp Học Của Tôi */}
                        <li className="smallMenuLi">
                            Danh sách lớp học
                        </li>
                        <li className="smallMenuLi">
                            Tham gia lớp học
                        </li>

                     {/* Danh mục Test */}
                    <li className="suppMenuLi">
                        <BsFileEarmarkText />&nbsp;
                        Bài kiểm tra
                        <div className="notImport" />
                    </li>

                        {/* Danh mục Nhỏ Cho Phần Bài Kiểm Tra */}
                        <li className="smallMenuLi">
                            Danh sách bài kiểm tra
                        </li>
                        <li className="smallMenuLi">
                            Bảng điểm
                        </li>                    

                     {/* Danh mục Lịch Thi */}
                    <li className="suppMenuLi">
                        <BiCalendar />&nbsp;
                        Lịch thi
                        <div className="notImport" />
                    </li>
                    
                     {/* Danh mục Thông Báo */}
                    <li className="suppMenuLi">
                        <AiOutlineBell />&nbsp;
                        Thông báo
                        <div className="notImport" />
                    </li>

                     {/* Danh mục Trợ Giúp */}
                    <li className="suppMenuLi">
                        <BsChatDots />&nbsp;
                        Trợ giúp
                        <div className="notImport" />
                    </li>

                </ul>
            </div>
        </>
    )
}