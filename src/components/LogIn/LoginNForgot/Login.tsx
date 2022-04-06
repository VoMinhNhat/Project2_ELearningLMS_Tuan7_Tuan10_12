import React from "react";
import '../../../assets/Css/LoginCss/Login.css';
import loginBackground from '../../../assets/image/yes.png';

import { Link } from "react-router-dom";

// Import icon
import {BiUserCircle} from 'react-icons/bi';
import {BsShieldLock} from 'react-icons/bs';


export const Login = () => {
    return (
        <div className="logInCss" style={{ backgroundImage: `url(${loginBackground})` }}>

            <div  className="logInCha">

                <div className="titleLogin">Đăng nhập</div>

                {/* Tên Đăng Nhập */}
                    <div className="titleTenDangNhap">Tên đăng nhập</div>
                    <i className="iconUser"><BiUserCircle/></i>
                    <input className="inputAccount"/>

                {/* Mật Khẩu */}
                    <div className="titleMatKhau">Mật khẩu</div>
                    <i className="iconPass"><BsShieldLock/></i>
                    <input className="inputPass" type={'password'}/>

                {/* Button Quên Mật Khẩu */}
                    <Link to='/ForgotPass'>
                        <button className="btn-forgot-pass">Quên mật khẩu</button>    
                    </Link>

                {/* Button Đăng Nhập */}
                    <button className="btn-login">Đăng nhập</button>    

            </div>

        </div>
    )
}