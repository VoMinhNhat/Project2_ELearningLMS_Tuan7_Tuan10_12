import '../../../../assets/Css/LeaderShipCss/KhaiBaoDuLieuCss/ToBoMonDuLieu.css';

import React, { useState } from 'react';
import { Modal, Button, Select, Table } from 'antd';

import {AiFillPlusCircle, AiOutlineUnorderedList, AiOutlinePlus} from 'react-icons/ai';
import {BiSearch} from 'react-icons/bi';
import {BsPencilSquare, BsTrash} from 'react-icons/bs';


// modal thêm mới dữ liệu
const ThemDuLieuToBoMon = () => {
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
        <Button type="primary" onClick={showModal} style={{width: '130px', fontSize: '15px', fontWeight: '500'}}>
          <AiOutlinePlus style={{ fontSize: '20px', marginRight: '5px', float: 'left' }} />
          Thêm mới
        </Button>
        <Modal title="Thêm Tổ - Bộ môn mới" width={650} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} okText={'Lưu'} cancelText={'Hủy'}>
            <div className='header-modal-ThemMoiToBoMon'>
                <div style={{display :'flex', lineHeight: '30px'}}>
                    <div className='title-modal-ThemMoiToBoMon'>
                        Tổ - Bộ môn:
                    </div>
                    <div className='dot-modal-ThemMoiToBoMon'>*</div>
                    <input className='input-modal-ThemMoiToBoMon'/>
                </div>
                <div style={{display :'flex', lineHeight: '30px', marginTop: '15px'}} className={'chonGiaoVienToBoMon'}>
                    <div className='title-modal-ThemMoiToBoMon'>
                        Trưởng tổ - Bộ môn:
                    </div>
                    <div className='dot-modal-ThemMoiToBoMon'>*</div>
                    <Select style={{ width: 420, height: '30px', marginLeft: '5px' }} onChange={handleChangeGiaoVien}>
                      <Option value="Giáo viên A">Giáo viên A</Option>
                      <Option value="Giáo viên B">Giáo viên B</Option>
                    </Select>
                </div>
            </div>
            <div className='body-modal-ThemMoiToBoMon'>
                <div style={{color: '#CC5C00', marginTop: '10px', fontWeight: '700'}}>
                  Danh sách môn học
                </div>
                <div style={{fontSize: '15px', fontWeight: '700', color: '#0B80EC', marginTop: '10px'}}>
                    <AiFillPlusCircle/> Thêm môn học mới
                </div>
            </div>
        </Modal>
      </>
    );
  };

//modal danh sách 
const SuaDuLieuToBoMon = () => {
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
      <BsPencilSquare type="primary" onClick={showModal} style={{color: '#FF5400', fontSize: '25px', marginRight: '10px'}}/>
      <Modal title="Thiết lập Tổ - Bộ môn" width={650} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} okText={'Lưu'} cancelText={'Hủy'}>
          <div className='header-modal-ThemMoiToBoMon'>
              <div style={{display :'flex', lineHeight: '30px'}}>
                  <div className='title-modal-ThemMoiToBoMon'>
                      Tổ - Bộ môn:
                  </div>
                  <div className='dot-modal-ThemMoiToBoMon'>*</div>
                  <input className='input-modal-ThemMoiToBoMon'/>
              </div>
              <div style={{display :'flex', lineHeight: '30px', marginTop: '15px'}} className={'chonGiaoVienToBoMon'}>
                  <div className='title-modal-ThemMoiToBoMon'>
                      Trưởng tổ - Bộ môn:
                  </div>
                  <div className='dot-modal-ThemMoiToBoMon'>*</div>
                  <Select style={{ width: 420, height: '30px', marginLeft: '5px' }} onChange={handleChangeGiaoVien}>
                    <Option value="Giáo viên A">Giáo viên A</Option>
                    <Option value="Giáo viên B">Giáo viên B</Option>
                  </Select>
              </div>
          </div>
          <div className='body-modal-ThemMoiToBoMon'>
              <div style={{color: '#CC5C00', marginTop: '10px', fontWeight: '700'}}>
                Danh sách môn học
              </div>
              <div style={{fontSize: '15px', fontWeight: '700', color: '#0B80EC', marginTop: '10px'}}>
                  <AiFillPlusCircle/> Thêm môn học mới
              </div>
          </div>
      </Modal>
    </>
  );
};
//modal list các lớp
const ListCacLopToBoMon = () => {
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
      <AiOutlineUnorderedList type="primary" onClick={showModal} style={{color: '#FF5400', fontSize: '25px', marginRight: '10px'}}/>
      <Modal title="Danh sách môn học" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} width={600}>
        <div style={{textAlign: 'right'}}>
          <BsTrash style={{fontSize: '18px', color: '#FF7506'}}/>
        </div>
        <div className='DanhSachMonHoc'>
          <Table columns={columnsSup} dataSource={dataSup} rowSelection={{type:'checkbox'}} style={{borderRadius: '10px 10px 0 0'}} pagination={{ pageSize: 8}} scroll={{ y: 240 }}/>
        </div>
      </Modal>
    </>
  );
};
//Table list các môn trong to bo mon do
const columnsSup= [
  {
    title: 'Mã môn học',
    dataIndex: 'MaMonHoc',
    key: 'MaMonHoc',  
  },
  {
      title: 'Tên môn học',
      dataIndex: 'TenMonHoc',
      key: 'TenMonHoc',
  },
];

const dataSup = [
  {
    key: '1',
    MaMonHoc: 'vl009',
    TenMonHoc: 'Vật lý 09',
  },
  {
    key: '2',
    MaMonHoc: 'vl009',
    TenMonHoc: 'Vật lý 09',
  },
  {
    key: '3',
    MaMonHoc: 'vl009',
    TenMonHoc: 'Vật lý 09',
  },
  {
    key: '4',
    MaMonHoc: 'vl009',
    TenMonHoc: 'Vật lý 09',
  },
  {
    key: '5',
    MaMonHoc: 'vl009',
    TenMonHoc: 'Vật lý 09',
  },
  {
    key: '6',
    MaMonHoc: 'vl009',
    TenMonHoc: 'Vật lý 09',
  },
  {
    key: '7',
    MaMonHoc: 'vl009',
    TenMonHoc: 'Vật lý 09',
  },
  {
    key: '8',
    MaMonHoc: 'vl009',
    TenMonHoc: 'Vật lý 09',
  },
  {
    key: '9',
    MaMonHoc: 'vl009',
    TenMonHoc: 'Vật lý 09',
  },
  {
    key: '10',
    MaMonHoc: 'vl009',
    TenMonHoc: 'Vật lý 09',
  },

];
//Modal Xoa To Bo Mon
const XoaToBoMon = () => {
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
      <Modal title="Xóa Tổ - Bộ môn" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} width={380} cancelText={'Hủy'} okText={'Xác nhận'}>
        Xác nhận muốn xóa Tổ Bộ Môn này và toàn bộ thông tin bên trong? Sau khi xóa sẽ không thể hoàn tác
      </Modal>
    </>
  );
};
//Selct giao vien
const { Option } = Select;
function handleChangeGiaoVien(value:any) {
  console.log(`selected ${value}`);
}






//Table dữ liệu bộ môn
const columns = [
  {
    title: 'Tên tổ - bộ môn',
    dataIndex: 'nameToBoMon',
    key: 'nameToBoMon',  
    width: 260,
  },
  {
      title: 'Trưởng bộ môn',
      dataIndex: 'truongToBoMon',
      key: 'truongToBoMon',
      width: 450,
  },
  {
      title: '',
      dataIndex: 'addAndDeleteAndFix',
      key: 'addAndDeleteAndFix',
      render: (AddDeleteFix:any)=>{
        return(
          <div>
            <ListCacLopToBoMon/>
            <SuaDuLieuToBoMon/>
            <XoaToBoMon/>
          </div>
        )
      }
  },
];

const data = [
  {
    key: '1',
    nameToBoMon: 'Văn hóa xã hội',
    truongToBoMon: 'Nguyễn Văn A',
  },
  {
    key: '2',
    nameToBoMon: 'Khoa học tự nhiên',
    truongToBoMon: 'Nguyễn Thị B',
  },
  {
    key: '3',
    nameToBoMon: 'Anh Văn',
    truongToBoMon: 'Nguyễn Văn C',
  },
];


export const DuLieuToBoMon = () =>{
    return(
        <div className='DuLieuToBoMon'>
            <div className='header-DuLieuBoMon'>
                <ThemDuLieuToBoMon/>
            </div>

            <div className='table-DuLieuBoMon'>

                <div className='header-table-DulieuToBoMon'>
                  <div style={{fontSize:'23px', fontWeight: '700', width: '150px', float: 'left'}}>
                    Tổ - Bộ môn
                  </div>
                  <input className='input-table-DuLieuToBoMon'/>
                  <BiSearch style={{position: 'absolute', top: '165px', left: '985px', fontSize: '20px'}}/>
                </div>

                <div className='table-HienThiDuLieuBoMon'>
                  <Table columns={columns} dataSource={data} style={{borderRadius: '10px 10px 0 0'}} pagination={{ pageSize: 8}}/>
                </div>

                <div style={{fontWeight: '500', position: 'absolute', top: '730px'}}>
                  Hiển thị
                  <input  style={{margin: '0 10px 0 10px', width: '40px', border: '1px solid #FF5400', height: '30px', outline: 'none', padding: '0 10px 0 10px'}}/>
                  hàng trong mỗi trang
                </div>
            </div>
        </div>
    )
}