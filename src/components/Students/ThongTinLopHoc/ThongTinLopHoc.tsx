import React from 'react';

import backGround from '../../../assets/image/background.png';
import '../../../assets/Css/StudentCss/ThongTinLopHocCss/ThongTinLopHoc.css';
import 'antd/dist/antd.css';

import {MdArrowForwardIos} from 'react-icons/md';

import { Tabs, Radio } from 'antd';
import { InForLopHoc } from './InForAndAQ/InForLopHoc';
import { QuesAnsLopHoc } from './InForAndAQ/QuesAnsLopHoc';

// Các Tabs
const { TabPane } = Tabs;

function tabsLopHoc(key:any) {
  console.log(key);
}
const ThongTinLop = () => (
    <Tabs defaultActiveKey="1" onChange={tabsLopHoc}>

      <TabPane tab="Thông tin lớp học" key="1">
        <InForLopHoc/>
      </TabPane>

      <TabPane tab="Hỏi đáp Q & A" key="2">
        <QuesAnsLopHoc/>
      </TabPane>

    </Tabs>
  );

export const ThongTinLopHoc =() =>{
    return(
        <div className="thongTinLopHoc" style={{backgroundImage: `url(${backGround})`}}>

            {/* Dấu Trang */}
            <div className='dauTrang'>
                <div className='quanLyLop'>   
                    Quản lý lớp học 
                </div>

                <i className='iconDauTrang'><MdArrowForwardIos/></i>

                <div className='dauTrangThongTin'>   
                    Thông tin lớp học 
                </div>

                <i className='iconDauTrang'><MdArrowForwardIos/></i>

                <div className='tenLopHoc'>   
                    Lịch sử
                </div>
            </div>

            {/* Các Tabs Trong Thông Tin Lớp Học */}
            <div className='tabThongTinLopHoc'>
                <ThongTinLop />
            </div>

        </div>
    )
}