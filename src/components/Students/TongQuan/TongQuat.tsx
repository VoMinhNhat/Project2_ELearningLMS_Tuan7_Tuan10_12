import React from "react";

import backGround from '../../../assets/image/background.png';

import '../../../assets/Css/StudentCss/TongQuatCss/TongQuat.css';

import { TongQuan } from "./CacChiTiet/TongQuan";
import { ThongKe } from "./CacChiTiet/ThongKe";
import { CacKhoaHoc } from "./CacChiTiet/TatCaKhoaHoc";

export const TongQuat =() =>{
    return(
        <div className='mainTongQuat' style={{backgroundImage: `url(${backGround})`}}>
            <TongQuan/>
            <ThongKe/>
            <CacKhoaHoc/>
        </div>
    )
}