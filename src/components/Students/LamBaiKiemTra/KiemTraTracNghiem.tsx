import '../../../assets/Css/StudentCss/LamBaiKiemTraCss/LamBaiKiemTra.css';
import '../../../assets/Css/StudentCss/LamBaiKiemTraCss/KiemTraTracNghiem.css';

import background from '../../../assets/image/background.png';

import { AiOutlineRight } from 'react-icons/ai';
import { InforThiSinhThi } from './InforThiSinh';

import { Tabs, Radio, Input, Space } from 'antd';

import React, { useState } from 'react';

import { Link } from 'react-router-dom';

//Tabs các câu hỏi
const { TabPane } = Tabs;

function listCauHoi(key: any) {
    console.log(key);
}

const CauHoiThi = () => {

    //Radio
    const [value, setValue] = React.useState();

    const onChangeRadio = (e: any) => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
    };

    return (
        <Tabs defaultActiveKey="1" onChange={listCauHoi} tabPosition={'left'}>

            <TabPane tab="Câu 1" key="1" >
                <div style={{ fontWeight: 700, fontSize: '15px', marginBottom: '40px' }}>
                    Câu 1: Cơ quan nào của liên hợp quốc có sự tham gia đầy đủ tất cả các thành viên, họp mỗi năm 1 lần để bàn bạc thảo luận các vấn đề liên quan đến Hiến chương của liên hợp quốc?
                </div>
                <div>
                    <Radio.Group onChange={onChangeRadio} value={value}>
                        <Space direction="vertical">
                            <Radio value={1}>A. Ban thư kí</Radio>
                            <Radio value={2}>B. Hội đồng bảo an</Radio>
                            <Radio value={3}>C. Hội đồng quản thác quốc tế</Radio>
                            <Radio value={4}>D. Đại hội đồng</Radio>
                        </Space>
                    </Radio.Group>
                </div>
            </TabPane>

            <TabPane tab="Câu 2" key="2">
                <div style={{ fontWeight: 700, fontSize: '15px', marginBottom: '40px' }}>
                    Câu 2: Nguyên nhân chung có tính chất quyết định đến sự khủng hoảng và sụp đổ của chủ nghĩa xã hội ở liên xô và Đông Âu:
                </div>
                <div>
                    <Radio.Group onChange={onChangeRadio} value={value}>
                        <Space direction="vertical">
                            <Radio value={1}>A. Xây dựng một mô hình về chủ nghĩa xã hội chưa đúng đắn.</Radio>
                            <Radio value={2}>B. Xây dựng một mô hình về chủ nghĩa xã hội chưa đúng đắn.</Radio>
                            <Radio value={3}>C. Sự tha hóa, biến chất của một số người lãnh đạo Đảng và nhà nước</Radio>
                            <Radio value={4}>D. Do hoạt động chống phá của các thế lực phản cách mạng.</Radio>
                        </Space>
                    </Radio.Group>
                </div>
            </TabPane>

        </Tabs>
    )
};


export const KiemTraTracNghiem = () => {
    return (
        <div className="LamBaiKiemTra" style={{ backgroundImage: `url(${background})` }}>
            {/* Title Kiểm tra */}
            <div className='title-LamBaiKT'>
                <div className='title-1-LamBaiKT'>
                    Bài kiểm tra
                </div>
                <AiOutlineRight className='title-icon-LamBaiKT' />
                <div className='title-1-LamBaiKT'>
                    Làm bài
                </div>
                <AiOutlineRight className='title-icon-LamBaiKT' />
                <div style={{ fontSize: '50px', fontWeight: '700', marginTop: '-25px' }}>
                    12A1
                </div>
            </div>

            {/* Infor Thí sinh thi */}
            <InforThiSinhThi />

            <div className='nopbai-LamBaiKT'>
                <div style={{ fontSize: '15px', fontWeight: '600', float: 'left', width: '250px' }}>
                    Phần trả lời của học sinh
                </div>
                <Link to={'/KetQuaKiemTra'}>
                <button className='btn-NopBai-LamBaiKT'>
                    Nộp bài
                </button>
                </Link>
            </div>



            {/* Vị trí làm bài */}
            <div className='TracNghiem-Position'>

                <div style={{ fontSize: '15px', fontWeight: '700', position: 'absolute', zIndex: '9', top: '220px', left: '80px' }}>
                    Phần câu hỏi:
                </div>
                <CauHoiThi />

                <button className='button-QuayLai'>Quay lại</button>

                <button className='button-TiepTheo'>Tiếp theo</button>

            </div>


        </div>
    )
}