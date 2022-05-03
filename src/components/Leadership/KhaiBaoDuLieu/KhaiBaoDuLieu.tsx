import '../../../assets/Css/LeaderShipCss/KhaiBaoDuLieuCss/KhaiBaoDuLieu.css';
import background from '../../../assets/image/background.png';

import { Select, Tabs } from 'antd';

import React, { useState } from 'react';
import { DuLieuNienKhoa } from './CacTabKhacNhau/DuLieuNienKhoa';


// Select chọn cấp
const { Option } = Select;

function handleChangeTruong(value: any) {
    console.log(`selected ${value}`);
}

//Select chọn Niên khóa'
function handleChangeNienKhoa(value: any) {
    console.log(`selected ${value}`);
}


//Select tabs cho các dữ liệu
const { TabPane } = Tabs;

function callTabDuLieu(key: any) {
    console.log(key);
}

const TabsDuLieu = () => (
    <Tabs defaultActiveKey="1" onChange={callTabDuLieu} tabPosition='left'>
        <TabPane tab="Niên khóa" key="1">
            <DuLieuNienKhoa/>
        </TabPane>
        <TabPane tab="Tổ - Bộ môn" key="2">
            Tổ - Bộ môn
        </TabPane>
        <TabPane tab="Khoa - Khối" key="3">
            Khoa - Khối
        </TabPane>
        <TabPane tab="Môn học" key="4">
            Môn học
        </TabPane>
        <TabPane tab="Lớp học" key="5">
            Lớp học
        </TabPane>
        <TabPane tab="Loại điểm" key="6">
            Loại điểm
        </TabPane>
    </Tabs>
);

export const KhaiBaoDuLieu = () => {

    return (
        <div className='KhaiBaoDuLieu' style={{ backgroundImage: `url(${background})` }}>

            <div style={{ fontSize: '40px', fontWeight: '700', marginLeft: '70px' }}>
                Khai báo dữ liệu
            </div>
            
            <div style={{marginTop: '0px', width: '90%', marginLeft: '50px'}} className='ChonDuLieuXem'>
                <div className='chon-Truong-Nam-DuLieu'>
                    <div style={{fontSize: '13px', fontWeight: '400', color: 'white'}}>
                        Đang chọn xem:
                    </div>
                    <div className='chonChiTietDuLieu'>
                        Trường: 
                        <Select defaultValue="Chọn trường" style={{ width: 100, marginTop: '10px', marginLeft: '30px', fontSize: '12px' }} onChange={handleChangeTruong}>
                            <Option value="THCS">THCS</Option>
                            <Option value="THPT">THPT</Option>
                        </Select>
                    </div>
                    <div className='chonChiTietDuLieu'>
                        Niên khóa: 
                        <Select defaultValue="Chọn năm" style={{ width: 100, marginTop: '10px', marginLeft: '12px', fontSize: '12px', fontWeight: '500' }} onChange={handleChangeTruong}>
                            <Option value="2020-2021">2020-2021</Option>
                            <Option value="2015-2016">2015-2016</Option>
                            <Option value="2018-2019">2018-2019</Option>
                        </Select>
                    </div>
                </div>

                <TabsDuLieu/>

            </div>

        </div>
    )
}