import React from "react";
import '../../../assets/Css/LoginCss/Login.css';
import loginBackground from '../../../assets/image/yes.png';

import { Link } from "react-router-dom";

// Import icon
import {BiUserCircle, BiChevronLeft} from 'react-icons/bi';
import {BsShieldLock} from 'react-icons/bs';


export const ForgotPass = () => {
    return (
        <div className="logInCss" style={{ backgroundImage: `url(${loginBackground})` }}>

            <div  className="logInCha">

                <div className="titleLogin">Cấp lại mật khẩu</div>

                {/* Tên Đăng Nhập */}
                    <div className="titleTenDangNhap">Tên đăng nhập</div>
                    <i className="iconUser"><BiUserCircle/></i>
                    <input className="inputAccount"/>

                {/* Mã Xác Thực */}
                    <div className="titleMatKhau">Mã xác thực</div>
                    <input className="inputPass"/>

                {/* Button Quên Mật Khẩu */}
                    <Link to='/Login'>
                        <button className="btn-come-back"><BiChevronLeft/>Quay lại trang chủ</button>    
                    </Link>

                {/* Button Đăng Nhập */}
                    <button className="btn-new-pass">Cấp lại mật khẩu</button>    

            </div>

        </div>
    )
}