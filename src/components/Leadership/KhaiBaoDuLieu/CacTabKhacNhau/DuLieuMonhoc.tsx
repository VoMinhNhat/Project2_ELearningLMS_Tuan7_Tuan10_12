import '../../../../assets/Css/LeaderShipCss/KhaiBaoDuLieuCss/MonHocDuLieu.css';
import React, { useState } from 'react';

import { Select, Modal, Button, Table } from 'antd';

import { BsTrash, BsSearch, BsPencilSquare } from 'react-icons/bs';
import { AiOutlinePlus } from 'react-icons/ai';

//Select 
const { Option } = Select;
//Select Khoi
function handleChangeKhoi(value: any) {
  console.log(`selected ${value}`);
}
//Select Lop
function handleChangeLop(values: any) {
  console.log(`selected ${values}`);
}
//Select to bo mon
function handleChangeToBoMon(values: any) {
  console.log(`selected ${values}`);
}
//Select loai mon hoc
function handleChangeLoaiMonHoc(values: any) {
  console.log(`selected ${values}`);
}


//Modal thêm Mới môn học
const ThemMoiMonHoc = () => {
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
      <Button type="primary" onClick={showModal} style={{ width: '100%', display: 'flex', alignItems: 'center' }}>
        <AiOutlinePlus style={{ fontSize: '20px', marginRight: '5px' }} />
        <div style={{ fontSize: '16px' }}>
          Thêm mới
        </div>
      </Button>
      <Modal title="Thêm môn học mới" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} width={650} cancelText={'Hủy'} okText={'Xác nhận'}>
        <div style={{ display: 'flex', borderBottom: '1px solid #C9C4C0', paddingBottom: '20px' }}>
          <div style={{ fontWeight: '500' }}>
            <div>Tổ - Bộ môn:</div>
            <div style={{ marginTop: '20px' }}>Tên môn học:</div>
            <div style={{ marginTop: '20px' }}>Mã môn:</div>
            <div style={{ marginTop: '20px' }}>Loại môn học:</div>
          </div>
          <div style={{ marginLeft: '80px' }}>
            <div style={{ marginTop: '-6px' }}>
              <Select style={{ width: 400 }} onChange={handleChangeToBoMon} className={'select-ToBoMon-MonHoc'}>{/* Tổ Bộ môn */}</Select>
            </div>
            <div style={{ marginTop: '10px' }}>
              <input style={{ width: '400px', background: '#F2F2F2', border: 'none', outline: 'none', height: '30px', borderRadius: '5px' }} />
            </div>
            <div style={{ marginTop: '10px' }}>
              <input style={{ width: '200px', background: '#F2F2F2', border: 'none', outline: 'none', height: '30px', borderRadius: '5px' }} />
            </div>
            <div style={{ marginTop: '10px' }}>
              <Select style={{ width: 400 }} onChange={handleChangeLoaiMonHoc} className={'select-ToBoMon-LoaiMonHoc'}>{/* Loại môn hôc */}</Select>
            </div>
          </div>
        </div>
        <div style={{ marginTop: '10px' }}>
          <div style={{ fontWeight: 700, color: '#CC5C00' }}>
            Số tiết/Học kì
          </div>
          <div style={{ display: 'flex', marginTop: '25px' }}>
            <div style={{ fontWeight: '500' }}>
              Học kì I: <input style={{ background: '#F2F2F2', width: '150px', border: 'none', outline: 'none', height: '30px', marginLeft: '5px', borderRadius: '5px' }} />
            </div>
            <div style={{ fontWeight: '500', marginLeft: '25%' }}>
              Học kì II: <input style={{ background: '#F2F2F2', width: '150px', border: 'none', outline: 'none', height: '30px', marginLeft: '5px', borderRadius: '5px' }} />
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};
//Modal thiết lập môn học
const ThietLapMonHoc = () => {
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
      <Modal title="Thiết Lập học mới" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} width={650} cancelText={'Hủy'} okText={'Xác nhận'}>
        <div style={{ display: 'flex', borderBottom: '1px solid #C9C4C0', paddingBottom: '20px' }}>
          <div style={{ fontWeight: '500' }}>
            <div>Tổ - Bộ môn:</div>
            <div style={{ marginTop: '20px' }}>Tên môn học:</div>
            <div style={{ marginTop: '20px' }}>Mã môn:</div>
            <div style={{ marginTop: '20px' }}>Loại môn học:</div>
          </div>
          <div style={{ marginLeft: '80px' }}>
            <div style={{ marginTop: '-6px' }}>
              <Select style={{ width: 400 }} onChange={handleChangeToBoMon} className={'select-ToBoMon-MonHoc2'}>{/* Tổ Bộ môn */}</Select>
            </div>
            <div style={{ marginTop: '10px' }}>
              <input style={{ width: '400px', border: '1px solid rgba(55, 56, 57, 0.5)', outline: 'none', height: '30px', borderRadius: '5px' }} />
            </div>
            <div style={{ marginTop: '10px' }}>
              <input style={{ width: '200px', border: '1px solid rgba(55, 56, 57, 0.5)', outline: 'none', height: '30px', borderRadius: '5px' }} />
            </div>
            <div style={{ marginTop: '10px' }}>
              <Select style={{ width: 400 }} onChange={handleChangeLoaiMonHoc} className={'select-ToBoMon-LoaiMonHoc2'}>{/* Loại môn hôc */}</Select>
            </div>
          </div>
        </div>
        <div style={{ marginTop: '10px' }}>
          <div style={{ fontWeight: 700, color: '#CC5C00' }}>
            Số tiết/Học kì
          </div>
          <div style={{ display: 'flex', marginTop: '25px' }}>
            <div style={{ fontWeight: '500' }}>
              Học kì I: <input style={{ width: '150px', border: '1px solid rgba(55, 56, 57, 0.5)', outline: 'none', height: '30px', marginLeft: '5px', borderRadius: '5px' }} />
            </div>
            <div style={{ fontWeight: '500', marginLeft: '25%' }}>
              Học kì II: <input style={{ width: '150px', border: '1px solid rgba(55, 56, 57, 0.5)', outline: 'none', height: '30px', marginLeft: '5px', borderRadius: '5px' }} />
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};
//Modal Xoa mon hoc
const XoaMonHoc = () => {
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
      <Modal title="Xóa Môn học" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} width={380} cancelText={'Hủy'} okText={'Xác nhận'}>
        Xác nhận muốn xóa Môn học này và toàn bộ thông tin bên trong? Sau khi xóa sẽ không thể hoàn tác
      </Modal>
    </>
  );
};
//Modal Xoa Môn Học đc Chọn
const XoaThongTinChon = () => {
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
      <Modal title="Xóa Môn học được chọn" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} width={380} cancelText={'Hủy'} okText={'Xác nhận'}>
        Xác nhận muốn xóa Môn học được chọn và toàn bộ thông tin bên trong? Sau khi xóa sẽ không thể hoàn tác
      </Modal>
    </>
  );
};



//Table dữ liệu môn học
const columns = [
  {
    title: 'Mã Môn học',
    dataIndex: 'idMonHoc',
    key: 'idMonHoc',
  },
  {
    title: 'Tên Môn học',
    dataIndex: 'nameMonHoc',
    key: 'nameMonHoc',
  },
  {
    title: 'Loại môn',
    dataIndex: 'loaiMonHoc',
    key: 'loaiMonHoc',
  },
  {
    title: 'Số tiết HK1',
    dataIndex: 'SoTietHK1',
    key: 'SoTietHK1',
    align: 'center' as 'center',
    width: '120px',
  },
  {
    title: 'Số tiết HK2',
    dataIndex: 'SoTietHK2',
    key: 'SoTietHK2',
    align: 'center' as 'center',
    width: '120px',
  },
  {
    title: '',
    dataIndex: 'addAndDeleteAndFix',
    key: 'addAndDeleteAndFix',
    width: '150px',
    render: (AddDeleteFix: any) => {
      return (
        <div>
          <ThietLapMonHoc />
          <XoaMonHoc />
        </div>
      )
    }
  },
];
const data = [
  {
    key: '1',
    idMonHoc: 'KHTN',
    nameMonHoc: 'Ngữ Văn',
    loaiMonHoc: 'Môn bắt buộc',
    SoTietHK1: '4',
    SoTietHK2: '4',
  },
  {
    key: '2',
    idMonHoc: 'KHTN',
    nameMonHoc: 'Ngữ Văn',
    loaiMonHoc: 'Môn bắt buộc',
    SoTietHK1: '4',
    SoTietHK2: '4',
  },
  {
    key: '3',
    idMonHoc: 'KHTN',
    nameMonHoc: 'Ngữ Văn',
    loaiMonHoc: 'Môn bắt buộc',
    SoTietHK1: '4',
    SoTietHK2: '4',
  },
  {
    key: '4',
    idMonHoc: 'KHTN',
    nameMonHoc: 'Ngữ Văn',
    loaiMonHoc: 'Môn bắt buộc',
    SoTietHK1: '4',
    SoTietHK2: '4',
  },
  {
    key: '5',
    idMonHoc: 'KHTN',
    nameMonHoc: 'Ngữ Văn',
    loaiMonHoc: 'Môn bắt buộc',
    SoTietHK1: '4',
    SoTietHK2: '4',
  },
  {
    key: '6',
    idMonHoc: 'KHTN',
    nameMonHoc: 'Ngữ Văn',
    loaiMonHoc: 'Môn bắt buộc',
    SoTietHK1: '4',
    SoTietHK2: '4',
  },
  {
    key: '7',
    idMonHoc: 'KHTN',
    nameMonHoc: 'Ngữ Văn',
    loaiMonHoc: 'Môn bắt buộc',
    SoTietHK1: '4',
    SoTietHK2: '4',
  },
  {
    key: '8',
    idMonHoc: 'KHTN',
    nameMonHoc: 'Ngữ Văn',
    loaiMonHoc: 'Môn bắt buộc',
    SoTietHK1: '4',
    SoTietHK2: '4',
  },
  {
    key: '9',
    idMonHoc: 'KHTN',
    nameMonHoc: 'Ngữ Văn',
    loaiMonHoc: 'Môn bắt buộc',
    SoTietHK1: '4',
    SoTietHK2: '4',
  },
  {
    key: '10',
    idMonHoc: 'KHTN',
    nameMonHoc: 'Ngữ Văn',
    loaiMonHoc: 'Môn bắt buộc',
    SoTietHK1: '4',
    SoTietHK2: '4',
  },

];




export const DuLieuMonHoc = () => {
  return (
    <div className='DuLieuMonHoc'>

      <div className='header-DuLieuMonHoc'>
        <div style={{ display: 'flex', float: 'left' }} className="select-MonHoc-Khoi">
          <div style={{ fontSize: '15px', fontWeight: '400' }}>Khối:</div>
          <Select style={{ width: 120, marginLeft: '10px' }} onChange={handleChangeLop}></Select>
        </div>
        <div style={{ display: 'flex', float: 'left', marginLeft: '50px' }} className="select-MonHoc-Lop">
          <div style={{ fontSize: '15px', fontWeight: '400' }}>Lớp:</div>
          <Select style={{ width: 120, marginLeft: '10px' }} onChange={handleChangeLop}></Select>
        </div>
        <div style={{ height: '100%', width: '130px', float: 'right', marginLeft: '10px' }}>
          <ThemMoiMonHoc />
        </div>
        <div style={{ float: 'right', borderRight: '2px solid #373839', fontSize: '24px', paddingRight: '10px', paddingTop: '5px' }}>
          <XoaThongTinChon />
        </div>
      </div>

      <div className='table-DuLieuMonHoc'>

        <div className='header-Table-DuLieuMonHoc'>
          <div style={{ float: 'left', fontSize: '23px', fontWeight: 700 }}>
            Môn học
          </div>
          <BsSearch style={{ position: 'absolute', top: '165px', left: '985px', fontSize: '15px' }} />
          <input style={{
            float: 'right', height: '100%', outline: 'none', border: 'none', background: '#F0F3F6', width: '350px', borderRadius: '15px',
            paddingLeft: '30px', paddingRight: '20px'
          }} />
        </div>

        <div className='HienThiDuLieuMonHoc'>
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