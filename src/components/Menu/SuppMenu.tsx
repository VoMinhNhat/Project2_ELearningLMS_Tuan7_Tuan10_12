import React from "react";
import '../../assets/Css/MenuCss/menu.css';

// import icon
import { AiOutlineEye, AiOutlineBell } from 'react-icons/ai';
import { BsBook, BsFileEarmarkText, BsChatDots } from 'react-icons/bs';
import { BiCalendar } from 'react-icons/bi';

import { Link } from 'react-router-dom';


export const SuppMenu = () => {
    return (
        <>
            {/* Menu Phụ */}
            <div className="suppMenu">
                <ul className="suppMenuUl">

                    {/* Danh mục Tổng Quan */}
                    <Link to={'/'}> 
                        <li className="suppMenuLi">
                            <AiOutlineEye />&nbsp;
                            Tổng quan
                            <div className="notImport" />
                        </li>
                    </Link>

                     {/* Danh mục Lớp Học */}
                    <li className="suppMenuLi">
                        <BsBook />&nbsp;
                        Lớp học của tôi
                        <div className="notImport" />
                    </li>
                    
                        {/* Danh mục Nhỏ Cho Phần Lớp Học Của Tôi */}
                        <Link to ={'/DanhSachLop'}>
                            <li className="smallMenuLi">
                                Danh sách lớp học
                            </li>
                        </Link>
                        <Link to={'/LogInThamGia'}>
                            <li className="smallMenuLi">
                                Tham gia lớp học
                            </li>
                        </Link>

                     {/* Danh mục Test */}
                    <li className="suppMenuLi">
                        <BsFileEarmarkText />&nbsp;
                        Bài kiểm tra
                        <div className="notImport" />
                    </li>

                        {/* Danh mục Nhỏ Cho Phần Bài Kiểm Tra */}
                        <Link to ={'/DanhSachBaiKiemTra'}>
                            <li className="smallMenuLi">
                                Danh sách bài kiểm tra
                            </li>
                        </Link>
                        <Link to={'/BangDiem'}>
                            <li className="smallMenuLi">
                                Bảng điểm
                            </li>                    
                        </Link>

                     {/* Danh mục Lịch Thi */}
                     <Link to ={'/LichThi'}>
                        <li className="suppMenuLi">
                            <BiCalendar />&nbsp;
                            Lịch thi
                            <div className="notImport" />
                        </li>
                    </Link>
                    
                     {/* Danh mục Thông Báo */}
                     <Link to ={'/ThongBao'}>
                        <li className="suppMenuLi">
                            <AiOutlineBell />&nbsp;
                            Thông báo
                            <div className="notImport" />
                        </li>
                    </Link>

                     {/* Danh mục Trợ Giúp */}
                     <Link to ={'/TroGiup'}>
                        <li className="suppMenuLi">
                            <BsChatDots />&nbsp;
                            Trợ giúp
                            <div className="notImport" />
                        </li>
                    </Link>

                </ul>
            </div>
        </>
    )
}