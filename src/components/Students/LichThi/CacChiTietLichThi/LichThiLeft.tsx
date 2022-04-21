import { Select } from 'antd';

import { AiOutlineDown, AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

import React, { useState } from 'react';

//Select khối
const { Option } = Select;

function chonKhoiLichThi(value: any) {
    console.log(`selected ${value}`);
}

export const LichThiLeft = () => {

    const [lichThang, setLichThang] = useState('LichTheoThangOff');
    const [lichTuan, setLichTuan] = useState('LichTheoTuan');
    const [tblLichThang, setTblLichThang] = useState('bottom2-LichThiLeft-2');
    const [tblLichTuan, setTblLichTuan] = useState('bottom1-LichThiLeft');

    const DoiLichThang = () => {
        setLichThang('LichTheoThang');
        setLichTuan('LichTheoTuanOff');
        setTblLichThang('bottom2-LichThiLeft');
        setTblLichTuan('bottom1-LichThiLeft-2');
    }

    const DoiLichTuan = () => {
        setLichThang('LichTheoThangOff');
        setLichTuan('LichTheoTuan');
        setTblLichThang('bottom2-LichThiLeft-2');
        setTblLichTuan('bottom1-LichThiLeft');
    }


    return (
        <div className="LichThiLeft">

            <div className="top-LichThiLeft">
                <div style={{ fontSize: '15px', fontWeight: '700' }}>
                    Chọn khối
                </div>
                <Select defaultValue="Khối 10" style={{ width: 100 }} onChange={chonKhoiLichThi}>
                    <Option value="Khối 10">Khối 10</Option>
                    <Option value="Khối 11">Khối 11</Option>
                </Select>
            </div>

            <div className='switch-LichTheo'>
                <div className={lichTuan} onClick={DoiLichTuan}>
                    Tuần
                </div>
                <div className={lichThang} onClick={DoiLichThang}>
                    Tháng
                </div>
            </div>

            {/* Hiện lịch theo tuần */}
            <div className={tblLichTuan}>
                <div className='header-bottom1-LichThiLeft'>
                    <div className='transition-tuan'>
                        <div className='btn-header-bottom1'>
                            Hôm nay
                        </div>
                        <div className='date-header-bottom1'>
                            8 - 4 Tháng 8
                        </div>
                        <AiOutlineDown style={{ color: '#FF7506', fontSize: '30px' }} />
                    </div>
                </div>
                <div className="content-bottom1">

                    
                </div>
            </div>

            {/* Hiện lịch theo tháng */}
            <div className={tblLichThang}>
                <div className='header-bottom2-LichThiLeft'>
                    <div className='transition-thang'>
                        <AiOutlineLeft style={{ color: '#FF7506', fontSize: '30px' }} />
                        <div className='month-header-bottom2'>
                            8 - 4 Tháng 8
                        </div>
                        <AiOutlineRight style={{ color: '#FF7506', fontSize: '30px' }} />
                    </div>
                </div>
                <div className="content-bottom2">

                    
                </div>
            </div>

        </div>
    )
}