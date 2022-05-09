import '../../../../assets/Css/LeaderShipCss/KhaiBaoDuLieuCss/LopHocDuLieu.css';

import React, { useState } from 'react';

import { Select, Modal, Button, Table, Popover, Checkbox } from 'antd';

import { BsTrash, BsSearch, BsPencilSquare } from 'react-icons/bs';
import { AiOutlinePlus, AiOutlineDownload, AiOutlinePaperClip, AiFillPlusCircle, AiOutlineEye } from 'react-icons/ai';


//Select 
const { Option } = Select;
//Select Khoi
function handleChangeKhoi(value: any) {
    console.log(`selected ${value}`);
}
//Select năm học
function handleChangeNamHoc(value: any) {
    console.log(`selected ${value}`);
}
//Select Khoi
function handleChangeThemKhoi(value: any) {
    console.log(`selected ${value}`);
}


//Modal Xoa mon hoc
const XoaLopHoc = () => {
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
        <Modal title="Xóa Lớp học" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} width={380} cancelText={'Hủy'} okText={'Xác nhận'}>
          Xác nhận muốn xóa Lớp học này và toàn bộ thông tin bên trong? Sau khi xóa sẽ không thể hoàn tác
        </Modal>
      </>
    );
  };
//Modal Thêm lớp học mới
const ThemLopHocMoi = () => {
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
            {/*@ts-ignore*/}
            <button type="primary" onClick={showModal} style={{
                background: 'white', margin: '0 10px 0 10px', border: '2px solid #FF7506', height: '40px', width: '120px',
                fontSize: '15px', fontWeight: '700', color: '#FF7506', borderRadius: '5px'
            }}>
                Tải file lên
            </button>
            <Modal title="Tải file lên" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} width={660}>
                <div style={{ display: 'flex' }}>
                    <div style={{ fontSize: '14px', fontWeight: '500' }}>
                        <div>Tệp đính kèm:</div>
                        <div style={{ marginTop: '20px' }}>Tải file mẫu:</div>
                    </div>
                    <div style={{ marginLeft: '100px' }}>
                        <div>
                            <div style={{ position: 'absolute', top: '83px', left: '220px', borderRight: '1px solid #C9C4C0', paddingRight: '5px' }}>
                                <AiOutlinePaperClip style={{ fontSize: '14px', color: '#FF7506' }} />
                            </div>
                            <input style={{ background: '#EFEFEF', width: '260px', height: '30px', border: 'none', outline: 'none', borderRadius: '5px', marginRight: '10px', paddingLeft: '35px', paddingRight: '15px' }} />
                            <button style={{ background: '#FFD8B8', width: '150px', height: '30px', outline: 'none', borderRadius: '5px', border: '1px solid #FF7506' }}>
                                Chọn tệp tải lên...
                            </button>
                        </div>
                        <div style={{ marginTop: '10px', width: '250px', height: '30px', lineHeight: '30px', border: 'none', outline: 'none', borderRadius: '5px' }}>
                            <AiOutlineDownload style={{ fontSize: '14px', color: '#FF7506' }} /> [Tải xuống file mẫu]
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    );
};
//Modal Thêm lớp học mới thủ công
const ThemLopHocMoiThuCong = () => {
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
            {/*@ts-ignore*/}
            <button type="primary" onClick={showModal} style={{
                background: 'white', margin: '0 10px 0 10px', border: '2px solid #FF7506', height: '40px', width: '120px',
                fontSize: '13px', fontWeight: '700', color: '#FF7506', borderRadius: '5px', marginTop: '10px'
            }}>
                Nhập thủ công
            </button>
            <Modal title="Thêm lớp học mới" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} width={660}>
                <div style={{ padding: '0 10px 10px 10px', borderBottom: '1px solid #C9C4C0' }}>

                    <div style={{ fontSize: '15px', fontWeight: '500', color: '#CC5C00' }}>Thông tin chung</div>

                    <div style={{ display: 'flex' }}>

                        <div className='selectNamHoc-ThemDuLieuLopHoc' style={{ marginTop: '15px', fontSize: '15px', fontWeight: '500' }}>
                            Niên khóa:
                            <Select style={{ width: 120, marginLeft: '10px' }} onChange={handleChangeNamHoc}></Select>
                        </div>

                        <div className='selectKhoi-ThemDuLieuLopHoc' style={{ marginTop: '15px', marginLeft: '135px', fontSize: '15px', fontWeight: '500', display: 'flex' }}>
                            <div style={{ display: 'flex' }}>
                                Khoa - Khối: <div style={{ color: 'red', margin: '0 2px 0 2px' }}>*</div>
                            </div>
                            <Select style={{ marginLeft: '10px' }} onChange={handleChangeThemKhoi}></Select>
                        </div>

                    </div>

                    <div style={{ display: 'flex' }}>

                        <div style={{ fontSize: '15px', fontWeight: '500' }}>
                            <div style={{ marginTop: '15px' }}>Tên Lớp: *</div>
                            <div style={{ marginTop: '20px' }}>Số lượng học viên: *</div>
                            <div style={{ marginTop: '20px' }}>Phân loại lớp:*</div>
                            <div style={{ marginTop: '20px' }}>Giáo viên chủ nhiệm:</div>
                            <div style={{ marginTop: '20px' }}>Mô tả:</div>
                        </div>

                        <div style={{ marginLeft: '50px' }}>
                            <div style={{ marginTop: '15px' }}><input style={{ background: '#F2F2F2', height: '30px', border: 'none', outline: 'none', borderRadius: '5px', width: '397px' }} /></div>
                            <div style={{ marginTop: '15px' }}><input style={{ background: '#F2F2F2', height: '30px', border: 'none', outline: 'none', borderRadius: '5px', width: '150px' }} /></div>
                            <div style={{ marginTop: '15px' }} className='cacDuLieuDuocThem'><Select onChange={handleChangeThemKhoi}></Select></div>
                            <div style={{ marginTop: '15px' }} className='cacDuLieuDuocThem'><Select onChange={handleChangeThemKhoi}></Select></div>
                            <div style={{ marginTop: '15px' }}><textarea style={{ background: '#F2F2F2', height: '60px', border: 'none', outline: 'none', borderRadius: '5px', width: '397px', resize: 'none' }}></textarea></div>
                        </div>

                    </div>
                </div>
                <div>
                    <div style={{ fontSize: '15px', fontWeight: '500', color: '#CC5C00', marginTop: '10px' }}>Danh sách môn học</div>
                    <div style={{ fontSize: '15px', fontWeight: '500', marginTop: '5px', display: 'flex' }}>
                        <Checkbox style={{ marginRight: '10px' }} />
                        Kế thừa dữ liệu:
                        <div className='selectNienKhoa-DuLieuLopHoc'><Select style={{ width: 120, marginLeft: '10px' }} onChange={handleChangeNamHoc}></Select></div>
                    </div>
                    <div style={{ fontSize: '15px', fontWeight: '500', marginTop: '10px', color: '#0B80EC' }}>
                        <AiFillPlusCircle style={{ fontSize: '20px' }} /> Thêm môn học mới
                    </div>
                </div>
            </Modal>
        </>
    );
};
//Modal Thiết lập lốp học
const ThietLapLopHoc = () => {
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
            <BsPencilSquare type="primary" onClick={showModal} style={{ color: '#FF5400', fontSize: '25px', marginRight: '5px' }} />
            <Modal title="Thêm lớp học mới" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} width={660}>
                <div style={{ padding: '0 10px 10px 10px', borderBottom: '1px solid #C9C4C0' }}>

                    <div style={{ fontSize: '15px', fontWeight: '500', color: '#CC5C00' }}>Thông tin chung</div>

                    <div style={{ display: 'flex' }}>

                        <div className='selectNamHoc-ThemDuLieuLopHoc' style={{ marginTop: '15px', fontSize: '15px', fontWeight: '500' }}>
                            Niên khóa:
                            <Select style={{ width: 120, marginLeft: '10px' }} onChange={handleChangeNamHoc}></Select>
                        </div>

                        <div className='selectKhoi-ThemDuLieuLopHoc' style={{ marginTop: '15px', marginLeft: '135px', fontSize: '15px', fontWeight: '500', display: 'flex' }}>
                            <div style={{ display: 'flex' }}>
                                Khoa - Khối: <div style={{ color: 'red', margin: '0 2px 0 2px' }}>*</div>
                            </div>
                            <Select style={{ marginLeft: '10px' }} onChange={handleChangeThemKhoi}></Select>
                        </div>

                    </div>

                    <div style={{ display: 'flex' }}>

                        <div style={{ fontSize: '15px', fontWeight: '500' }}>
                            <div style={{ marginTop: '15px' }}>Tên Lớp: *</div>
                            <div style={{ marginTop: '20px' }}>Số lượng học viên: *</div>
                            <div style={{ marginTop: '20px' }}>Phân loại lớp:*</div>
                            <div style={{ marginTop: '20px' }}>Giáo viên chủ nhiệm:</div>
                            <div style={{ marginTop: '20px' }}>Mô tả:</div>
                        </div>

                        <div style={{ marginLeft: '50px' }}>
                            <div style={{ marginTop: '15px' }}><input style={{ background: '#F2F2F2', height: '30px', border: 'none', outline: 'none', borderRadius: '5px', width: '397px' }} /></div>
                            <div style={{ marginTop: '15px' }}><input style={{ background: '#F2F2F2', height: '30px', border: 'none', outline: 'none', borderRadius: '5px', width: '150px' }} /></div>
                            <div style={{ marginTop: '15px' }} className='cacDuLieuDuocThem'><Select onChange={handleChangeThemKhoi}></Select></div>
                            <div style={{ marginTop: '15px' }} className='cacDuLieuDuocThem'><Select onChange={handleChangeThemKhoi}></Select></div>
                            <div style={{ marginTop: '15px' }}><textarea style={{ background: '#F2F2F2', height: '60px', border: 'none', outline: 'none', borderRadius: '5px', width: '397px', resize: 'none' }}></textarea></div>
                        </div>

                    </div>
                </div>
                <div>
                    <div style={{ fontSize: '15px', fontWeight: '500', color: '#CC5C00', marginTop: '10px' }}>Danh sách môn học</div>
                    <div style={{ fontSize: '15px', fontWeight: '500', marginTop: '5px', display: 'flex' }}>
                        <Checkbox style={{ marginRight: '10px' }} />
                        Kế thừa dữ liệu:
                        <div className='selectNienKhoa-DuLieuLopHoc'><Select style={{ width: 120, marginLeft: '10px' }} onChange={handleChangeNamHoc}></Select></div>
                    </div>
                    <div style={{ fontSize: '15px', fontWeight: '500', marginTop: '10px', color: '#0B80EC' }}>
                        <AiFillPlusCircle style={{ fontSize: '20px' }} /> Thêm môn học mới
                    </div>
                </div>
            </Modal>
        </>
    );
};



//Popover
const content = (
    <div style={{ marginTop: '-20px' }}>
        <div>
            <ThemLopHocMoi />
        </div>
        <div>
            <ThemLopHocMoiThuCong />
        </div>
    </div>
);


//Table dữ liệu Lớp học
const columns = [
    {
        title: 'Mã Lớp',
        dataIndex: 'idLop',
        key: 'idLop',
    },
    {
        title: 'Tên Lớp',
        dataIndex: 'nameLop',
        key: 'nameLop',
    },
    {
        title: 'Giáo viên chủ nhiệm',
        dataIndex: 'GVCN',
        key: 'GVCN',
    },
    {
        title: '',
        dataIndex: 'addAndDeleteAndFix',
        key: 'addAndDeleteAndFix',
        render: (AddDeleteFix: any) => {
            return (
                <div>
                    <AiOutlineEye style={{ color: '#FF5400', fontSize: '25px', marginRight: '10px' }}/>
                    <ThietLapLopHoc/>
                    <XoaLopHoc/>
                </div>
            )
        }
    },
];
const data = [
    {
        key: '1',
        idLop: '2020-6A',
        nameLop: '6A',
        GVCN: 'Nguyễn Văn A',
    },
    {
        key: '2',
        idLop: '2020-6A',
        nameLop: '6A',
        GVCN: 'Nguyễn Văn A',
    },
    {
        key: '3',
        idLop: '2020-6A',
        nameLop: '6A',
        GVCN: 'Nguyễn Văn A',
    },
    {
        key: '4',
        idLop: '2020-6A',
        nameLop: '6A',
        GVCN: 'Nguyễn Văn A',
    },
    {
        key: '5',
        idLop: '2020-6A',
        nameLop: '6A',
        GVCN: 'Nguyễn Văn A',
    },
    {
        key: '6',
        idLop: '2020-6A',
        nameLop: '6A',
        GVCN: 'Nguyễn Văn A',
    },
    {
        key: '7',
        idLop: '2020-6A',
        nameLop: '6A',
        GVCN: 'Nguyễn Văn A',
    },
    {
        key: '8',
        idLop: '2020-6A',
        nameLop: '6A',
        GVCN: 'Nguyễn Văn A',
    },
    {
        key: '9',
        idLop: '2020-6A',
        nameLop: '6A',
        GVCN: 'Nguyễn Văn A',
    },
    {
        key: '10',
        idLop: '2020-6A',
        nameLop: '6A',
        GVCN: 'Nguyễn Văn A',
    },
    {
        key: '11',
        idLop: '2020-6A',
        nameLop: '6A',
        GVCN: 'Nguyễn Văn A',
    },
    {
        key: '12',
        idLop: '2020-6A',
        nameLop: '6A',
        GVCN: 'Nguyễn Văn A',
    },
];









export const DuLieuLopHoc = () => {
    return (
        <div className='DuLieuLopHoc'>

            <div className='header-DuLieuLopHoc'>
                <div style={{ display: 'flex', float: 'left' }} className="select-LopHoc-Khoi">
                    <div style={{ fontSize: '15px', fontWeight: '400' }}>Khối:</div>
                    <Select style={{ width: 120, marginLeft: '10px' }} onChange={handleChangeKhoi}></Select>
                </div>
                <div style={{ display: 'flex', float: 'right' }}>
                    <div style={{ fontSize: '23px', color: '#FF5400', borderRight: '1px solid #C9C4C0', height: '40px', lineHeight: '40px', paddingRight: '10px' }}>
                        <BsTrash />
                    </div>
                    <button style={{
                        background: 'white', margin: '0 10px 0 10px', border: '2px solid #FF7506', height: '40px', width: '120px',
                        fontSize: '15px', fontWeight: '700', color: '#FF7506', borderRadius: '5px'
                    }}>
                        Xuất file
                    </button>

                    <Popover content={content} trigger={'click'} placement="bottom">
                        <Button className='buttonPopover-LopHoc'>
                            <AiOutlinePlus style={{ marginRight: '8px', marginTop: '8px' }} /><div>Thêm mới</div>
                        </Button>
                    </Popover>
                </div>
            </div>

            <div className='table-DuLieuLopHoc'>

                <div className='header-HienThiDuLieuLopHoc'>
                    <div style={{ float: 'left', fontSize: '23px', fontWeight: 700 }}>
                        Lớp học
                    </div>
                    <BsSearch style={{ position: 'absolute', top: '165px', left: '985px', fontSize: '15px' }} />
                    <input style={{
                        float: 'right', height: '100%', outline: 'none', border: 'none', background: '#F0F3F6', width: '350px', borderRadius: '15px',
                        paddingLeft: '30px', paddingRight: '20px'
                    }} />
                </div>

                <div className='table-LopHocInfor'>
                    <Table columns={columns} dataSource={data} style={{ borderRadius: '10px 10px 0 0' }} pagination={{ pageSize: 8 }} rowSelection={{ type: 'checkbox' }} />
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