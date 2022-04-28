import React from "react";
import { Collapse, Table, Tag, Space } from 'antd';

import '../../../../assets/Css/StudentCss/TongQuatCss/PartTqCss/CacKhoaHoc.css';
import 'antd/dist/antd.css';

import { BiInfoCircle } from 'react-icons/bi';

import { Link } from "react-router-dom";

// Collapse
const { Panel } = Collapse;

function callback(key: any) {
    console.log(key);
}

// Table Cho Các Khóa Học 
const columns = [
    {
        title: 'Môn Học',
        dataIndex: 'subject',
        key: 'subject',
        render: (text:any) => <h4>{text}</h4>
    },
    {
        title: 'Lớp',
        dataIndex: 'class',
        key: 'class',
    },
    {
        title: 'Tiết Học',
        dataIndex: 'lesson',
        key: 'lesson',
    },
    {
        title: 'Thời Hạn Học',
        dataIndex: 'period',
        key: 'period',
    },
    {
        title: 'Tình Trạng Học',
        key: 'status',
        dataIndex: 'status',
        render: (status: any) => {
            if (status === 'chưa hoàn thành') {
                return (
                    <div className='chuaHoanThanh'>
                        Chưa hoàn thành
                    </div>
                )
            } else if (status === 'đã hoàn thành') {
                return (
                    < div className='daHoanThanh' >
                        Đã hoàn thành
                    </div >
                )
            }
        },
    },
    {
        title: 'Thông tin lớp học',
        key: 'infor',
        dataIndex: 'infor',
        render: (infor: any) => {
            return (
                <Link to={'/ThongTinLop'}>
                    <div className="iconThongTin">
                        <BiInfoCircle />
                    </div>
                </Link>
            )
        }
    },
];

const data = [
    {
        key: '1',
        subject: 'Lịch sử',
        class: '10A1',
        lesson: 'Thứ 2-8:00',
        period: '12/05-30/07',
        status: 'chưa hoàn thành',
    },
    {
        key: '2',
        subject: 'Ngữ văn',
        class: '10A1',
        lesson: 'Thứ 5-10:00',
        period: '12/02-28/04',
        status: 'chưa hoàn thành',
    },
    {
        key: '3',
        subject: 'Toán đại số',
        class: '10A1',
        lesson: 'Thứ 3-14:00',
        period: '15/02-06/04',
        status: 'chưa hoàn thành',
    },
    {
        key: '4',
        subject: 'Tiếng anh',
        class: '10A1',
        lesson: 'Thứ 5-10:00',
        period: '12/02-28/04',
        status: 'đã hoàn thành',
    },
    {
        key: '5',
        subject: 'Toán hình học',
        class: '10A1',
        lesson: 'Thứ 3-14:00',
        period: '15/02-06/04',
        status: 'đã hoàn thành',
    },
    {
        key: '6',
        subject: 'Địa lý',
        class: '10A1',
        lesson: 'Thứ 5-10:00',
        period: '12/02-28/04',
        status: 'đã hoàn thành',
    },
    {
        key: '7',
        subject: 'Vật lý',
        class: '10A1',
        lesson: 'Thứ 3-14:00',
        period: '15/02-06/04',
        status: 'đã hoàn thành',
    },
    {
        key: '8',
        subject: 'Hóa học',
        class: '10A1',
        lesson: 'Thứ 3-14:00',
        period: '15/02-06/04',
        status: 'đã hoàn thành',
    },
];




//Render Ra Kết Quả
export const CacKhoaHoc = () => {
    return (
        <div className="cacKhoaHoc">

            <div className="titleTatCaKhoaHoc">Tất cả các khóa học</div>

            {/* Table Collapse Cho Học Kỳ I và II */}

            <div className="inforHocKy">

            <Collapse onChange={callback} style={{ background: 'none', border: 'none' }}>

                {/* Học Kỳ II */}
                <Panel header="Học kỳ II - 2020" key="1"
                    style={{
                        fontWeight: '400', background: 'white', borderRadius: '5px', marginBottom: '20px',
                        boxShadow: '4px 4px 25px 4px rgba(154, 202, 245, 0.25)'
                    }} >

                    {/* Table Các Khóa Của Học Kỳ II */}
                    <Table columns={columns} dataSource={data} style={{fontSize: '15px'}}/>

                </Panel>

                {/* Học Kỳ I */}
                <Panel header="Học kỳ I - 2020" key="2" 
                    style={{
                        fontWeight: '400', background: 'white', borderRadius: '5px', marginBottom: '20px',
                        boxShadow: '4px 4px 25px 4px rgba(154, 202, 245, 0.25)',
                    }} >

                    {/* Table Các Khóa Của Học Kỳ I */}
                    <Table columns={columns} dataSource={data} />

                </Panel>

            </Collapse>
        
            </div>
        </div>
    )
}