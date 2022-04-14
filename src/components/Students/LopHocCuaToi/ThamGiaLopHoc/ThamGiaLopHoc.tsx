import React from 'react';

import '../../../../assets/Css/StudentCss/LopHocCuaToiCss/ThamGiaLopHoc.css';

import 'antd/dist/antd.css';

import { DanhSachHocSinhThamGia } from './DanhSachHocSinhThamGia';
import { StreamVid } from './SteamVid';
import { LinkThamGiaLop } from './LinkThamGiaLop';




export const ThamGiaLopHoc = () =>{
    return ( 
        <div className='ThamGiaLopHoc'>
            <DanhSachHocSinhThamGia/>
            <StreamVid/>
            <LinkThamGiaLop/>
        </div>
    )
}