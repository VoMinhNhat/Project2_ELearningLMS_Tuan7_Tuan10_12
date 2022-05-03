import { Select } from 'antd';

import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Column,  } from '@ant-design/plots';

import { Progress } from 'antd';

import {AiOutlineLeft, AiOutlineRight} from 'react-icons/ai';


//Tong quan select
const { Option } = Select;

function chonKhoiChange(value: any) {
    console.log(`selected ${value}`);
}

//Column chart
const data = [
    {
        class: "6A1",
        type: "Giỏi",
        value: 20,
    },
    {
        class: "6A1",
        type: "khá",
        value: 20,

    },
    {
        class: "6A1",
        type: "Trung bình",
        value: 20,

    },
    {
        class: "6A1",
        type: "yếu",
        value: 20,
    },

    {
        class: "6A8",
        type: "Giỏi",
        value: 20,
    },
    {
        class: "6A8",
        type: "khá",
        value: 20,

    },
    {
        class: "6A8",
        type: "Trung bình",
        value: 20,

    },
    {
        class: "6A8",
        type: "yếu",
        value: 20,
    },

    {
        class: "6A9",
        type: "Giỏi",
        value: 20,
    },
    {
        class: "6A9",
        type: "khá",
        value: 20,

    },
    {
        class: "6A9",
        type: "Trung bình",
        value: 20,

    },
    {
        class: "6A9",
        type: "yếu",
        value: 20,
    },

    {
        class: "6A2",
        type: "Giỏi",
        value: 30,
    },
    {
        class: "6A2",
        type: "khá",
        value: 20,

    },
    {
        class: "6A2",
        type: "Trung bình",
        value: 20,

    },
    {
        class: "6A2",
        type: "yếu",
        value: 20,
    },



    {
        class: "6A3",
        type: "Giỏi",
        value: 30,
    },
    {
        class: "6A3",
        type: "khá",
        value: 20,

    },
    {
        class: "6A3",
        type: "Trung bình",
        value: 20,

    },
    {
        class: "6A3",
        type: "yếu",
        value: 20,
    },



    {
        class: "6A4",
        type: "Trung bình",
        value: 20,

    },
    {
        class: "6A4",
        type: "yếu",
        value: 20,
    },

    {
        class: "6A4",
        type: "Giỏi",
        value: 30,
    },
    {
        class: "6A4",
        type: "khá",
        value: 20,

    },
    {
        class: "6A2",
        type: "Trung bình",
        value: 20,

    },
    {
        class: "6A3",
        type: "yếu",
        value: 20,
    },

    {
        class: "6A3",
        type: "Giỏi",
        value: 30,
    },
    {
        class: "6A3",
        type: "khá",
        value: 20,

    },
    {
        class: "6A3",
        type: "Trung bình",
        value: 20,

    },
    {
        class: "6A2",
        type: "yếu",
        value: 20,
    },

]

const config = {
    data,
    xField: 'class',
    yField: 'value',
    seriesField: 'type',
    isGroup: true,
    columnStyle: {
        radius: [20, 20, 0, 0],
    },
    color: ['#C83901', '#FF7506', '#FFA75E', '#FFD8B8']
};




export const BodyTongQuan = () => {
    return (
        <div className="BodyTongQuan">

            <div className="thongKeKetQuaHocTap">

                <div className="thongKetKQHT-header">
                    <div style={{ fontSize: '17px', fontWeight: '700', float:'left', paddingTop: '5px'}}>
                        Thống kê kết quả học tập
                    </div>
                    <div style={{float: 'right', paddingTop: '7px'}}>
                        <Select defaultValue="Chọn khối" style={{ width: 120}} onChange={chonKhoiChange}>
                            <Option value="6">Khối 6</Option>
                            <Option value="7">Khối 7</Option>
                            <Option value="8">Khối 8</Option>
                        </Select>
                    </div>
                </div>

                <div className='thongkeKQHT-body'>
                    <AiOutlineLeft style={{fontSize: '25px', color: '#FF7506', position: 'absolute', top: '350px', left: '100px'}}/>
                        <Column {...config}/>
                    <AiOutlineRight style={{fontSize: '25px', color: '#FF7506', position: 'absolute', top: '350px', left: '950px'}}/>
                </div>

                <div className='thongkeKQHT-footer'>
                    <div style={{display: 'flex', fontSize: '15px', fontWeight: '500', marginLeft: '30px'}}>
                        <div style={{background: '#C83901', width: '60px', height: '15px', borderRadius: '10px', marginTop: '4px', marginRight: '5px'}}/>
                        <div>
                            Giỏi
                        </div>
                    </div>
                    <div style={{display: 'flex', fontSize: '15px', fontWeight: '500', marginLeft: '30px'}}>
                        <div style={{background: '#FF7506', width: '60px', height: '15px', borderRadius: '10px', marginTop: '4px', marginRight: '5px'}}/>
                        <div>
                            Khá
                        </div>
                    </div>
                    <div style={{display: 'flex', fontSize: '15px', fontWeight: '500', marginLeft: '30px'}}>
                        <div style={{background: '#FFA75E', width: '60px', height: '15px', borderRadius: '10px', marginTop: '4px', marginRight: '5px'}}/>
                        <div>
                            Trung bình
                        </div>
                    </div>
                    <div style={{display: 'flex', fontSize: '15px', fontWeight: '500', marginLeft: '30px'}}>
                        <div style={{background: '#FFD8B8', width: '60px', height: '15px', borderRadius: '10px', marginTop: '4px', marginRight: '5px'}}/>
                        <div>
                            Yếu
                        </div>
                    </div>
                </div>

            </div>




            <div className="soLuongHocVien">

                <div className='soLuongHocVien-Header'>
                    <div style={{fontSize: '15px', fontWeight: '700', float: 'left'}}>
                        Số lượng học viên
                    </div>
                    <div style={{float: 'right', marginTop: '1px'}}>
                        <Select defaultValue="THCS" style={{ width: 120}} onChange={chonKhoiChange}>
                            <Option value="THPT">THPT</Option>
                            <Option value="THCS">THCS</Option>
                            <Option value="CH">CH</Option>
                        </Select>
                    </div>
                </div>

                <div style={{width: '310px', marginTop: '10px'}}>
                    <div style={{fontWeight: '500'}}>
                        Khối 6
                        <div style={{float :'right', opacity: '0.5'}}>2000</div>
                    </div>
                    <Progress strokeColor={'#FF7506'} percent={70} showInfo={false}/>
                </div>

                <div style={{width: '310px', marginTop: '10px'}}>
                    <div style={{fontWeight: '500'}}>
                        Khối 7
                        <div style={{float :'right', opacity: '0.5'}}>2000</div>
                    </div>
                    <Progress strokeColor={'#FF7506'} percent={50} showInfo={false}/>
                </div>

                <div style={{width: '310px', marginTop: '10px'}}>
                    <div style={{fontWeight: '500'}}>
                        Khối 8
                        <div style={{float :'right', opacity: '0.5'}}>2000</div>
                    </div>
                    <Progress strokeColor={'#FF7506'} percent={30} showInfo={false}/>
                </div>

                <div style={{width: '310px', marginTop: '10px'}}>
                    <div style={{fontWeight: '500'}}>
                        Khối 9
                        <div style={{float :'right', opacity: '0.5'}}>2000</div>
                    </div>
                    <Progress strokeColor={'#FF7506'} percent={40} showInfo={false}/>
                </div>

            </div>


        </div>
    )
}