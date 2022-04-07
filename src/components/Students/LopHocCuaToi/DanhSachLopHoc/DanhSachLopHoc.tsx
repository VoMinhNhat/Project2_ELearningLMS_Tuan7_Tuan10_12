import React from "react";
import { Tabs } from 'antd';

import '../../../../assets/Css/StudentCss/LopHocCuaToiCss/DanhSachLop.css';
import 'antd/dist/antd.css';


import backGround from '../../../../assets/image/background.png';
import { TatCaLopHoc } from "./AllDanhSach/TatCaLopHoc";
import { LopHocSapToi } from "./AllDanhSach/LopHocSapToi";
import { LopHocHoanThanh } from "./AllDanhSach/LopHocHoanThanh";
import { LopHocChuaHoanThanh } from "./AllDanhSach/LopHocChuaHoanThanh";



// Tabs 
const { TabPane } = Tabs;

function callback(key:any) {
  console.log(key);
}
const DanhSach = () => (
  <Tabs defaultActiveKey="1" onChange={callback} >

    <TabPane tab="Tất cả lớp học" key="1" >
          <TatCaLopHoc/>
    </TabPane>

    <TabPane tab="Lớp học sắp tới" key="2">
          <LopHocSapToi/>
    </TabPane>

    <TabPane tab="Lớp học đã hoàn thành" key="3">
            <LopHocHoanThanh/>
    </TabPane>

    <TabPane tab="Lớp học chưa hoàn thành" key="4">
            <LopHocChuaHoanThanh/>
    </TabPane>

  </Tabs>

);

//Render Ra Kết Quả
export const DanhSachLop = () => {
    return(
        <div className='danhSachLopHoc' style={{backgroundImage: `url(${backGround})`}}>
            <div className="titleDanhSachLop">Lớp học của tôi</div>

            <div className="cacDanhSach">
                <DanhSach/>
            </div>

        </div>
    )
}