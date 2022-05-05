import '../../../../assets/Css/LeaderShipCss/KhaiBaoDuLieuCss/NienKhoaDuLieu.css';
import 'antd/dist/antd.css';

import { AiOutlinePlus, AiOutlineInfoCircle, AiFillPlusCircle, AiFillMinusCircle, AiOutlineSearch } from 'react-icons/ai';
import {BsPencilSquare, BsTrash} from 'react-icons/bs';

import React, { useState } from 'react';
import { Modal, Button, Select, Checkbox, DatePicker, Space, Table, Tag } from 'antd';
import { NONAME } from 'dns';

// Modal Niên khóa
const ModalThemNienKhoa = () => {
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

    const myAppendChild = () => {
        const node = document.createElement('li')
        // const testNode = document.createTextNode('.li-test')
        const element = document.querySelector('.ul-test')
        if (element && node ) {
            // node.appendChild(node)
            element.appendChild(node)
        }
    }


    return (
        <>
            <Button type="primary" onClick={showModal} style={{
                background: '#FF7506', border: 'none', width: '130px',
                height: '100%', borderRadius: '8px', textAlign: 'left',
            }}>
                <AiOutlinePlus style={{ fontSize: '20px', marginRight: '5px', float: 'left' }} />
                <div>Thêm mới</div>
            </Button>
            <Modal title="Thêm niên khóa mới" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} closable={false} width={730} cancelText={'Hủy'} okText={'Lưu'}>

                {/* Các dữ liệu trên */}
                <div className='upperThemNienKhoa'>
                    {/* Các dữ liệu trái */}
                    <div>
                        <div style={{ fontSize: '15px', fontWeight: '500' }}>
                            Niên khóa:
                        </div>
                        <div className='ChonNienKhoa'>
                            <Select defaultValue="Chọn năm" style={{ width: 120, marginTop: '10px', marginRight: '10px', fontSize: '14px' }} onChange={handleChangeNam}>
                                <Option value="2020">2020</Option>
                                <Option value="2021">2021</Option>
                            </Select>

                            đến

                            <Select defaultValue="Chọn năm" style={{ width: 120, marginTop: '10px', marginLeft: '10px', fontSize: '14px' }} onChange={handleChangeNam}>
                                <Option value="2020">2020</Option>
                                <Option value="2021">2021</Option>
                            </Select>
                        </div>
                    </div>

                    {/* Các dữ liệu phải */}
                    <div style={{ marginLeft: '20%' }}>
                        <div style={{ display: 'flex' }}>
                            <Checkbox onChange={onChange} style={{ marginRight: '5px' }} />
                            <div style={{ marginRight: '5px', fontSize: '15px', fontWeight: '500' }}>Kế thừa dữ liệu</div>
                            <div className='ChonNienKhoa' style={{ marginTop: '-10px' }}>
                                <Select defaultValue="Chọn năm" style={{ width: 120, marginTop: '10px', marginRight: '10px', fontSize: '14px' }} onChange={handleChangeNam}>
                                    <Option value="2020">2015-2016</Option>
                                </Select>
                            </div>
                        </div>
                        <div style={{ display: 'flex' }}>
                            <div style={{ fontSize: '15px', color: '#FF7506' }}><AiOutlineInfoCircle /></div>
                            <div style={{ fontSize: '10px', marginTop: '3px', marginLeft: '5px' }}>
                                Dữ liệu được kế thừa bao gồm các thông tin:<br />
                                -Thông tin học viên và Danh sách lớp học<br />
                                -Thông tin môn học<br />
                                -Phân công giảng dạy<br />
                            </div>
                        </div>
                    </div>
                </div>

                {/* append child  */}
                <h3 style={{ color: '#CC5C00', marginTop: '10px' }}>Cài đặt thời gian</h3>

                <ul className="ul-test">
                    <li className='li-test1' style={{ display: 'flex' }}>
                        <AiFillMinusCircle className='icon-li-test' />
                        <div className='tenHK-li-test'>Tên học kì: </div>
                        <input className='input-li-test' />
                        <div className='latvat-li-test'>Từ</div>
                        <Space direction="vertical"><DatePicker onChange={onChange} style={{ width: '125px', height: '30px', marginTop: '-3px', borderRadius: '5px', border: '1px solid #afb0b1' }} /></Space>
                        <div className='latvat-li-test'>đến</div>
                        <Space direction="vertical"><DatePicker onChange={onChange} style={{ width: '125px', height: '30px', marginTop: '-3px', borderRadius: '5px', border: '1px solid #afb0b1' }} /></Space>
                    </li>
                </ul>
                <button onClick={() => { myAppendChild() }} style={{ color: '#0B80EC', background: 'none', border: 'none', fontSize: '16px', display: 'flex' }}>
                    <AiFillPlusCircle style={{ marginTop: '2px', fontSize: '20px', marginRight: '5px' }} />
                    <div style={{ fontWeight: '500' }}>
                        Thêm dữ liệu
                    </div>
                </button>
            </Modal>
        </>
    );
};

//Modal Niên Khóa chỉnh sửa
const ModalChinhSuaNienKhoa = () => {
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

    const myAppendChild = () => {
        const node = document.createElement('li')
        // const testNode = document.createTextNode('.li-test')
        const element = document.querySelector('.ul-test')
        if (element && node ) {
            // node.appendChild(node)
            element.appendChild(node)
        }
    }


    return (
        <>
            <BsPencilSquare style={{color: '#FF5400', fontSize: '25px', marginRight: '10px', cursor: 'pointer'}} type="primary" onClick={showModal}/>
            <Modal title="Thiết lập niên khóa" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} closable={false} width={730} cancelText={'Hủy'} okText={'Lưu'}>

                {/* Các dữ liệu trên */}
                <div className='upperThemNienKhoa'>
                    {/* Các dữ liệu trái */}
                    <div>
                        <div style={{ fontSize: '15px', fontWeight: '500' }}>
                            Niên khóa:
                        </div>
                        <div className='ChonNienKhoa'>
                            <Select defaultValue="Chọn năm" style={{ width: 120, marginTop: '10px', marginRight: '10px', fontSize: '14px' }} onChange={handleChangeNam}>
                                <Option value="2020">2020</Option>
                                <Option value="2021">2021</Option>
                            </Select>

                            đến

                            <Select defaultValue="Chọn năm" style={{ width: 120, marginTop: '10px', marginLeft: '10px', fontSize: '14px' }} onChange={handleChangeNam}>
                                <Option value="2020">2020</Option>
                                <Option value="2021">2021</Option>
                            </Select>
                        </div>
                    </div>

                    {/* Các dữ liệu phải */}
                    <div style={{ marginLeft: '20%' }}>
                        <div style={{ display: 'flex' }}>
                            <Checkbox onChange={onChange} style={{ marginRight: '5px' }} />
                            <div style={{ marginRight: '5px', fontSize: '15px', fontWeight: '500' }}>Kế thừa dữ liệu</div>
                            <div className='ChonNienKhoa' style={{ marginTop: '-10px' }}>
                                <Select defaultValue="Chọn năm" style={{ width: 120, marginTop: '10px', marginRight: '10px', fontSize: '14px' }} onChange={handleChangeNam}>
                                    <Option value="2020">2015-2016</Option>
                                </Select>
                            </div>
                        </div>
                        <div style={{ display: 'flex' }}>
                            <div style={{ fontSize: '15px', color: '#FF7506' }}><AiOutlineInfoCircle /></div>
                            <div style={{ fontSize: '10px', marginTop: '3px', marginLeft: '5px' }}>
                                Dữ liệu được kế thừa bao gồm các thông tin:<br />
                                -Thông tin học viên và Danh sách lớp học<br />
                                -Thông tin môn học<br />
                                -Phân công giảng dạy<br />
                            </div>
                        </div>
                    </div>
                </div>

                {/* append child  */}
                <h3 style={{ color: '#CC5C00', marginTop: '10px' }}>Cài đặt thời gian</h3>

                <ul className="ul-test">
                    <li className='li-test1' style={{ display: 'flex' }}>
                        <AiFillMinusCircle className='icon-li-test' />
                        <div className='tenHK-li-test'>Tên học kì: </div>
                        <input className='input-li-test' />
                        <div className='latvat-li-test'>Từ</div>
                        <Space direction="vertical"><DatePicker onChange={onChange} style={{ width: '125px', height: '30px', marginTop: '-3px', borderRadius: '5px', border: '1px solid #afb0b1' }} /></Space>
                        <div className='latvat-li-test'>đến</div>
                        <Space direction="vertical"><DatePicker onChange={onChange} style={{ width: '125px', height: '30px', marginTop: '-3px', borderRadius: '5px', border: '1px solid #afb0b1' }} /></Space>
                    </li>
                </ul>
                <button onClick={() => { myAppendChild() }} style={{ color: '#0B80EC', background: 'none', border: 'none', fontSize: '16px', display: 'flex' }}>
                    <AiFillPlusCircle style={{ marginTop: '2px', fontSize: '20px', marginRight: '5px' }} />
                    <div style={{ fontWeight: '500' }}>
                        Thêm dữ liệu
                    </div>
                </button>
            </Modal>
        </>
    );
};

//Modal xóa niên khoá
const XoaNienKhoa = () => {
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
        <BsTrash style={{color: '#FF5400', fontSize: '25px'}} type="primary" onClick={showModal}/>
        <Modal title="Xóa niên khóa" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} width={380} cancelText={'Hủy'} okText={'Xác nhận'}>
          Xác nhận muốn xóa niên khóa này và toàn bộ thông tin bên trong? Sau khi xóa sẽ không thể hoàn tác
        </Modal>
      </>
    );
  };

//Select chọn năm
const { Option } = Select;

function handleChangeNam(value: any) {
    console.log(`selected ${value}`);
}

//Check box
function onChange(e: any) {
    console.log(`checked = ${e.target.checked}`);
}

//Chọn ngày
function onChangeDate(date: any, dateString: any) {
    console.log(date, dateString);
}

//table
const columns = [
    {
      title: 'STT',
      dataIndex: 'stt',
      key: 'stt',  
      width: 90,
    },
    {
        title: 'Niên Khóa',
        dataIndex: 'nienKhoa',
        key: 'nienKhoa',
        width: 180,
    },
    {
        title: 'Thời gian bắt đầu',
        dataIndex: 'startDate',
        key: 'startDate',
        width: 240,
    },
    {
        title: 'Thời gian kết thúc',
        dataIndex: 'endDate',
        key: 'endDate',
        width: 240,
    },
    {
        title: '',
        dataIndex: 'addAndDelete',
        key: 'addAndDelete',
        render: (addAndDelete:any) => {
            return(
                <>
                    <ModalChinhSuaNienKhoa/>
                    <XoaNienKhoa/>
                </>
            )
        }
    },
  ];
  
  const data = [
    {
      key: '1',
      stt: '1',
      nienKhoa: '2020-2021',
      startDate: '05/10/2020',
      endDate: '05/10/2021',
    },
    {
        key: '2',
        stt: '2',
        nienKhoa: '2020-2021',
        startDate: '05/10/2020',
        endDate: '05/10/2021',
    },
    {
        key: '3',
        stt: '3',
        nienKhoa: '2020-2021',
        startDate: '05/10/2020',
        endDate: '05/10/2021',
    },
    {
        key: '4',
        stt: '4',
        nienKhoa: '2020-2021',
        startDate: '05/10/2020',
        endDate: '05/10/2021',
      },
      {
        key: '5',
        stt: '5',
        nienKhoa: '2020-2021',
        startDate: '05/10/2020',
        endDate: '05/10/2021',
      },
      {
        key: '6',
        stt: '6',
        nienKhoa: '2020-2021',
        startDate: '05/10/2020',
        endDate: '05/10/2021',
      },
      {
        key: '7',
        stt: '7',
        nienKhoa: '2020-2021',
        startDate: '05/10/2020',
        endDate: '05/10/2021',
      },
      {
        key: '8',
        stt: '8',
        nienKhoa: '2020-2021',
        startDate: '05/10/2020',
        endDate: '05/10/2021',
      },
      {
        key: '9',
        stt: '9',
        nienKhoa: '2020-2021',
        startDate: '05/10/2020',
        endDate: '05/10/2021',
      },
  ];





export const DuLieuNienKhoa = () => {
    return (

        <div className='DuLieuNienKhoa'>

            <div className='header-DuLieuNienKhoa'>
                <ModalThemNienKhoa />
            </div>

            <div className='HienDuLieuNienKhoa'>
                <div className='header-HienNienKhoa'>
                    <div style={{fontSize: '22px', fontWeight: '700', width: '200px', float: 'left'}}>
                        Niên khóa
                    </div>
                    <input className='input-HienNienKhoa' placeholder='tìm kiếm'/>
                    <AiOutlineSearch style={{position: 'absolute', top: '158px', left: '1008px', fontSize: '20px'}}/>
                </div>
                <div className='table-HienDuLieuNienKhoa'>
                    <Table columns={columns} dataSource={data} style={{borderRadius: '10px 10px 0 0'}} pagination={{ pageSize: 8}}/>
                </div>
                <div className='pageSize-HienThiNienKhoa'>
                    Hiển thị <input className='input-pageSize'/> hàng trong mỗi trang
                </div>
            </div>

        </div>
    )
}