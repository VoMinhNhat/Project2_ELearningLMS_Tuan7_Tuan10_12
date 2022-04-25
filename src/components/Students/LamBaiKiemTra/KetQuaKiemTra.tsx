import '../../../assets/Css/StudentCss/LamBaiKiemTraCss/LamBaiKiemTra.css';
import '../../../assets/Css/StudentCss/LamBaiKiemTraCss/KetQuaKiemTra.css';

import background from '../../../assets/image/background.png';

import { AiOutlineRight, AiFillCheckSquare } from 'react-icons/ai';
import { InforThiSinhThi } from './InforThiSinh';

import { Collapse, Tabs, Radio, Input, Space } from 'antd';

import React, { useState } from 'react';

import { Pie } from '@ant-design/plots';


//Donut chart

const DemoPie = () => {
    const data = [
        {
            type: 'Đã hoàn thành',
            value: 75,
        },
        {

            type: 'Chưa hoàn thành',
            value: 25,
        },
    ];
    const config = {
        appendPadding: 10,
        data,
        angleField: 'value',
        colorField: 'type',
        //@ts-ignore
        color: ({ type }) => {
            if (type === 'Đã hoàn thành') {
                return 'blue';
            }
            return 'orange';
        },
        legend: false,
        radius: 0.9,
        label: {
            type: 'inner',
            offset: '-30%',
            //@ts-ignore
            content: ({ percent }) => `${(percent * 100).toFixed(0)}%`,
            style: {
                fontSize: 18,
                textAlign: 'center',
                fontWeight: '700',
            },
        },
        interactions: [
            {
                type: 'element-active',
            },
        ],
    };
    //@ts-ignore
    return <Pie {...config} />;
};

//Colappse
const { Panel } = Collapse;

function Colappse(key: any) {
    console.log(key);
}


export const KetQuaKiemTra = () => {
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


            <InforThiSinhThi />

            <div className='Khung-Tonghop'>
                <div style={{ fontSize: '20px', fontWeight: '700', marginLeft: 'auto', marginRight: 'auto', width: '250px', marginBottom: '15px' }}>
                    Tổng điểm kiểm tra
                </div>

                <div style={{ display: 'flex' }}>

                    <div style={{ width: '200px', height: '200px', marginLeft: '50px' }}>
                        <DemoPie />
                    </div>

                    <div style={{ marginLeft: '100px', marginTop: '40px' }}>
                        <div style={{ fontSize: '50px', fontWeight: '700', color: '#FF7506' }}>
                            8.0/10
                        </div >
                        <div style={{ fontSize: '30px', fontWeight: '700', marginTop: '-20px' }}>
                            Tổng điểm
                        </div>
                    </div>

                    <div style={{ background: '#FF7506', height: '60px', width: '5px', marginTop: '70px', marginLeft: '150px', borderRadius: '2px' }} />

                    <div style={{ marginLeft: '25px', marginTop: '60px' }}>
                        <div style={{ fontSize: '35px', fontWeight: '700', color: '#FF7506' }}>
                            Tổng 20
                        </div >
                        <div style={{ fontSize: '20px', fontWeight: '700', marginTop: '-10px' }}>
                            Câu trắc nghiệm
                        </div>
                    </div>

                    <div style={{ background: '#2EACEE', height: '60px', width: '5px', marginTop: '70px', marginLeft: '50px', borderRadius: '2px' }} />

                    <div style={{ marginLeft: '25px', marginTop: '60px' }}>
                        <div style={{ fontSize: '35px', fontWeight: '700', color: '#2EACEE' }}>
                            16
                        </div >
                        <div style={{ fontSize: '20px', fontWeight: '700', marginTop: '-10px' }}>
                            Đáp án đúng
                        </div>
                    </div>

                    <div style={{ background: '#FF7506', height: '60px', width: '5px', marginTop: '70px', marginLeft: '50px', borderRadius: '2px' }} />

                    <div style={{ marginLeft: '25px', marginTop: '60px' }}>
                        <div style={{ fontSize: '35px', fontWeight: '700', color: '#FF7506' }}>
                            04
                        </div >
                        <div style={{ fontSize: '20px', fontWeight: '700', marginTop: '-10px' }}>
                            Đáp án sai
                        </div>
                    </div>

                </div>
            </div>

            <div className='khung-DapAn'>
                <Collapse defaultActiveKey={['1']} onChange={Colappse}>
                    <Panel header="Xem kết quả" key="1" style={{ width: '100%' }}>
                        <div className='cacCauTraLoi-KetQua'>
                            {/* các câu trả lời */}
                            <div style={{borderBottom: '1px solid #373839', marginBottom: '40px', width: '1020px', marginLeft: '20px'}}>
                                <div style={{ width: '95%', fontWeight: '700', marginBottom: '10px'}}>
                                    Câu 1: Cơ quan nào của liên hợp quốc có sự tham gia đầy đủ tất cả các thành viên, họp mỗi năm 1 lần để bàn bạc thảo luận các vấn đề liên quan đến Hiến chương của liên hợp quốc?
                                </div>
                                <div style={{marginBottom: '40px'}}>
                                    <Radio.Group>
                                        <Space direction="vertical">
                                            <Radio value={1} checked={true}>A. Ban thư kí</Radio>
                                            <Radio value={2}>B. Hội đồng bảo an</Radio>
                                            <Radio value={3}>C. Hội đồng quản thác quốc tế</Radio>
                                            <Radio value={4}>D. Đại hội đồng</Radio>
                                        </Space>
                                    </Radio.Group>
                                </div>
                            </div>

                        </div>
                    </Panel>
                </Collapse>
            </div>

            <div className='ghiChu-KetQua'>
                <div style={{fontSize: '18px', fontWeight: '700', marginBottom: '10px'}}>
                    Chú thích
                </div>
                <div style={{marginBottom: '10px', display: 'flex'}}>
                    <AiFillCheckSquare style={{fontSize: '25px', color: '#49C510', marginRight: '10px'}}/>
                    <div style={{fontSize: '15px', fontWeight: '500'}}>
                        Đáp án đúng
                    </div>
                </div>
                <div style={{marginBottom: '10px', display: 'flex'}}>
                    <AiFillCheckSquare style={{fontSize: '25px', color: '#ED2025', marginRight: '10px'}}/>
                    <div style={{fontSize: '15px', fontWeight: '500'}}>
                        Đáp án sai
                    </div>
                </div>
            </div>

        </div>
    )
}