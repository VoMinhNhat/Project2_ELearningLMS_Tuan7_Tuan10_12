import '../../../../assets/Css/LeaderShipCss/KhaiBaoDuLieuCss/LoaiDiemDuLieu.css';
import React, { useState } from 'react';

import { Select, Modal, Button, Table } from 'antd';

import { BsTrash, BsSearch, BsPencilSquare } from 'react-icons/bs';
import { AiOutlinePlus } from 'react-icons/ai';

//Select 
const { Option } = Select;
//Select Hệ số
function handleChangeHeSo(value: any) {
    console.log(`selected ${value}`);
}



//Modal thêm Mới môn học
const ThemLoaiDiemMoi = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return (
        <>
            <Button type="primary" onClick={showModal} style={{ width: '140px', float: 'right', display: 'flex', alignItems: 'center' }}>
                <AiOutlinePlus style={{ fontSize: '20px', marginRight: '5px' }} />
                <div style={{ fontSize: '16px' }}>
                    Thêm mới
                </div>
            </Button>
            <Modal title="Thêm Loại điểm mới" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} width={650} cancelText={'Hủy'} okText={'Xác nhận'}>
                <div style={{ borderBottom: '1px solid #C9C4C0', paddingBottom: '20px' }}>
                    <div style={{ display: 'flex' }}>
                        <div style={{ fontSize: '15px', fontWeight: '500' }}>
                            Tên loại điểm:*
                            <input style={{ background: '#F2F2F2', border: 'none', outline: 'none', height: '30px', marginLeft: '10px', width: '250px', borderRadius: '5px' }} />
                        </div>
                        <div style={{ marginLeft: '30px', fontSize: '15px', fontWeight: '500' }}>
                            Hệ số:
                            <Select style={{ marginLeft: '10px' }} onChange={handleChangeHeSo} className={'select-HeSo-LoaiDiem'}></Select>
                        </div>
                    </div>
                </div>
                <div style={{ marginTop: '10px' }}>
                    <div style={{ fontSize: '15px', fontWeight: '700', color: '#CC5C00' }}>Số cột điểm tối thiểu</div>
                    <div style={{ display: 'flex', marginTop: '20px' }}>
                        <div style={{ fontSize: '15px', fontWeight: '700' }}>
                            Học kì I:
                            <input style={{ background: '#F2F2F2', border: 'none', outline: 'none', height: '30px', marginLeft: '10px', width: '100px', borderRadius: '5px' }} />
                        </div>
                        <div style={{ fontSize: '15px', fontWeight: '700', marginLeft: '100px' }}>
                            Học kì II:
                            <input style={{ background: '#F2F2F2', border: 'none', outline: 'none', height: '30px', marginLeft: '10px', width: '100px', borderRadius: '5px' }} />
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    );
};
//Modal thiết lập môn học
const ThietLapLoaiDiem = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return (
        <>
            <BsPencilSquare style={{ color: '#FF5400', fontSize: '25px', marginLeft: '10px' }} type="primary" onClick={showModal} />
            <Modal title="Thêm Loại điểm mới" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} width={650} cancelText={'Hủy'} okText={'Xác nhận'}>
                <div style={{ borderBottom: '1px solid #C9C4C0', paddingBottom: '20px' }}>
                    <div style={{ display: 'flex' }}>
                        <div style={{ fontSize: '15px', fontWeight: '500' }}>
                            Tên loại điểm:*
                            <input style={{ background: '#F2F2F2', border: 'none', outline: 'none', height: '30px', marginLeft: '10px', width: '250px', borderRadius: '5px' }} />
                        </div>
                        <div style={{ marginLeft: '30px', fontSize: '15px', fontWeight: '500' }}>
                            Hệ số:
                            <Select style={{ marginLeft: '10px' }} onChange={handleChangeHeSo} className={'select-HeSo-LoaiDiem'}></Select>
                        </div>
                    </div>
                </div>
                <div style={{ marginTop: '10px' }}>
                    <div style={{ fontSize: '15px', fontWeight: '700', color: '#CC5C00' }}>Số cột điểm tối thiểu</div>
                    <div style={{ display: 'flex', marginTop: '20px' }}>
                        <div style={{ fontSize: '15px', fontWeight: '700' }}>
                            Học kì I:
                            <input style={{ background: '#F2F2F2', border: 'none', outline: 'none', height: '30px', marginLeft: '10px', width: '100px', borderRadius: '5px' }} />
                        </div>
                        <div style={{ fontSize: '15px', fontWeight: '700', marginLeft: '100px' }}>
                            Học kì II:
                            <input style={{ background: '#F2F2F2', border: 'none', outline: 'none', height: '30px', marginLeft: '10px', width: '100px', borderRadius: '5px' }} />
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    );
};
//Modal Xoa mon hoc
const XoaLoaiDiem = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return (
        <>
            <BsTrash style={{ color: '#FF5400', fontSize: '25px' }} type="primary" onClick={showModal} />
            <Modal title="Xóa Loại điểm" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} width={380} cancelText={'Hủy'} okText={'Xác nhận'}>
                Xác nhận muốn xóa Loại điểm này và toàn bộ thông tin bên trong? Sau khi xóa sẽ không thể hoàn tác
            </Modal>
        </>
    );
};



//Table dữ liệu môn học
const columns = [
    {
        title: 'Loại điểm',
        dataIndex: 'LoaiDiem',
        key: 'LoaiDiem',
        width: 150,
    },
    {
        title: 'Hệ số',
        dataIndex: 'HeSo',
        key: 'HeSo',
        align: 'center' as 'center',
    },
    {
        title: 'Số cột điểm tối thiểu',
        children: [
            {
                title: 'Học kì 1',
                dataIndex: 'HK1',
                key: 'HK1',
                align: 'center' as 'center',
                width: 150,
            },
            {
                title: 'Học kì 2',
                dataIndex: 'HK2',
                key: 'HK2',
                align: 'center' as 'center',
                width: 150,
            },
        ]
    },
    {
        title: '',
        dataIndex: 'addAndDeleteAndFix',
        key: 'addAndDeleteAndFix',
        width: '250px',
        render: (AddDeleteFix: any) => {
            return (
                <div>
                    <ThietLapLoaiDiem />
                    <XoaLoaiDiem />
                </div>
            )
        }
    },
];
const data = [
    {
        key: '1',
        LoaiDiem: 'Kiểm tra miệng',
        HeSo: '1',
        HK1: '3',
        HK2: '3',
    },
    {
        key: '2',
        LoaiDiem: 'Kiểm tra 15 phút',
        HeSo: '1',
        HK1: '2',
        HK2: '2',
    },
    {
        key: '3',
        LoaiDiem: 'Kiểm tra 45 phút',
        HeSo: '2',
        HK1: '2',
        HK2: '2',
    },
    {
        key: '4',
        LoaiDiem: 'Kiểm tra giữa kỳ',
        HeSo: '2',
        HK1: '1',
        HK2: '1',
    },
    {
        key: '5',
        LoaiDiem: 'Kiểm tra giữa kỳ',
        HeSo: '3',
        HK1: '1',
        HK2: '1',
    },
];




export const DuLieuLoaiDiem = () => {
    return (
        <div className="DuLieuLoaiDiem">
            <div className="header-DuLieuLoaiDiem">
                <ThemLoaiDiemMoi />
            </div>
            <div className="table-DuLieuLoaiDiem">

                <div className='header-Table-DuLieuLoaiDiem'>
                    <div style={{ float: 'left', fontSize: '23px', fontWeight: 700 }}>
                        Loại điểm
                    </div>
                    <BsSearch style={{ position: 'absolute', top: '165px', left: '985px', fontSize: '15px' }} />
                    <input style={{
                        float: 'right', height: '100%', outline: 'none', border: 'none', background: '#F0F3F6', width: '350px', borderRadius: '15px',
                        paddingLeft: '30px', paddingRight: '20px'
                    }} />
                </div>

                <div className='HienThiDuLieuLoaiDiem'>
                    <Table columns={columns} dataSource={data} style={{ borderRadius: '10px 10px 0 0' }} pagination={{ pageSize: 8 }} />
                </div>

                <div style={{ fontWeight: '500', position: 'absolute', top: '730px' }}>
                    Hiển thị
                    <input style={{ margin: '0 10px 0 10px', width: '40px', border: '1px solid #FF5400', height: '30px', outline: 'none', padding: '0 10px 0 10px' }} />
                    hàng trong mỗi trang
                </div>

            </div>
        </div>
    )
}