import '../../../../assets/Css/LeaderShipCss/KhaiBaoDuLieuCss/KhoaKhoiDuLieu.css';

import React, { useState } from 'react';
import { Modal, Button, Select, Table } from 'antd';

import {AiFillPlusCircle, AiOutlineUnorderedList, AiOutlinePlus} from 'react-icons/ai';
import {BiSearch} from 'react-icons/bi';
import {BsPencilSquare, BsTrash} from 'react-icons/bs';

// modal thêm mới dữ liệu
const ThemDuLieuKhoaKhoi= () => {
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
        <Modal title="Thêm Khoa- Khối mới" width={650} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} okText={'Lưu'} cancelText={'Hủy'}>
            <div style={{display: 'flex'}}>
                <div style={{fontSize: '15px', fontWeight: '700', color: '#373839'}}>
                    <div style={{marginTop: '10px'}}>Mã khoa - khối:</div>
                    <div style={{marginTop: '10px'}}>Khoa - Khối:</div>
                    <div style={{marginTop: '10px'}}>Trưởng khoa - khối:</div>
                </div>
                <div style={{marginLeft: '20px'}}>
                    <div style={{marginTop: '10px'}}>
                        <input type="text" style={{padding: '0 10px 0 10px',borderRadius: '5px',border: 'none', outline: 'none', background: '#F2F2F2', height: '30px', marginTop: '-5px', width: '200px'}}/>
                    </div>
                    <div style={{marginTop: '10px'}}>
                        <input type="text"  style={{padding: '0 10px 0 10px',borderRadius: '5px',border: 'none', outline: 'none', background: '#F2F2F2', height: '30px', marginTop: '-5px', width: '400px'}}/>
                    </div>
                    <div style={{marginTop: '10px'}}>
                        <Select  style={{width: '400px' }} onChange={handleChangeKhoaKhoi} className={'select-KhoaKhoi'}>

                        </Select>
                    </div>
                </div>
            </div>
        </Modal>
      </>
    );
  };

//modal danh sách 
const SuaDuLieuKhoaKhoi = () => {
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
      <Modal title="Thiết lập Khoa - Khối" width={650} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} okText={'Lưu'} cancelText={'Hủy'}>
      <div style={{display: 'flex'}}>
                <div style={{fontSize: '15px', fontWeight: '700', color: '#373839'}}>
                    <div style={{marginTop: '10px'}}>Mã khoa - khối:</div>
                    <div style={{marginTop: '10px'}}>Khoa - Khối:</div>
                    <div style={{marginTop: '10px'}}>Trưởng khoa - khối:</div>
                </div>
                <div style={{marginLeft: '20px', }}>
                    <div style={{marginTop: '10px', height: '30px', width: '200px'}}>
                            K11
                    </div>
                    <div style={{borderRadius: '5px', border: '1px solid rgba(55, 56, 57, 0.5)', height: '30px',lineHeight:'30px',width: '400px', padding: '0 10px 0 10px'}}>
                        Khối 11
                    </div>
                    <div style={{marginTop: '10px'}}>
                        <Select  style={{width: '400px' }} onChange={handleChangeKhoaKhoi} className={'select-KhoaKhoi-Sua'}>

                        </Select>
                    </div>
                </div>
            </div>
      </Modal>
    </>
  );
};
//modal list các lớp
const ListCacKhoaKhoi = () => {
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
          <Table columns={columnsSup} dataSource={dataSup} rowSelection={{type:'checkbox'}} style={{borderRadius: '10px 10px 0 0'}} pagination={false} scroll={{ y: 240 }}/>
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
const XoaKhoaKhoi = () => {
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
        Xác nhận muốn xóa Khoa Khối này và toàn bộ thông tin bên trong? Sau khi xóa sẽ không thể hoàn tác
      </Modal>
    </>
  );
};
//Selct Khoa Khối
const { Option } = Select;
function handleChangeKhoaKhoi(value:any) {
  console.log(`selected ${value}`);
}


//Table dữ liệu bộ môn
const columns = [
    {
      title: 'Mã Khoa khối',
      dataIndex: 'idKhoaKhoi',
      key: 'idKhoaKhoi',  
      width: 260,
    },
    {
        title: 'Tên Khoa Khối',
        dataIndex: 'nameKhoaKhoi',
        key: 'nameKhoaKhoi',
        width: 450,
    },
    {
        title: '',
        dataIndex: 'addAndDeleteAndFix',
        key: 'addAndDeleteAndFix',
        render: (AddDeleteFix:any)=>{
          return(
            <div>
              <ListCacKhoaKhoi/>
              <SuaDuLieuKhoaKhoi/>
              <XoaKhoaKhoi/>
            </div>
          )
        }
    },
  ];
  
  const data = [
    {
      key: '1',
      idKhoaKhoi: 'K09',
      nameKhoaKhoi: 'Khối 9',
    },
    {
      key: '2',
      idKhoaKhoi: 'K10',
      nameKhoaKhoi: 'Khối 10',
    },
    {
      key: '3',
      idKhoaKhoi: 'K11',
      nameKhoaKhoi: 'Khối 11',
    },
  ];

export const DuLieuKhoaKhoi = () =>{
    return(
        <div className="DuLieuKhoaKhoi">
            <div className='header-DuLieuKhoaKhoi'>
                <ThemDuLieuKhoaKhoi/>
            </div>

            <div className='table-DuLieuKhoaKhoi'>

                <div className='header-table-DulieuKhoaKhoi'>
                  <div style={{fontSize:'23px', fontWeight: '700', width: '150px', float: 'left'}}>
                    Khoa - Khối
                  </div>
                  <input className='input-table-DuLieuKhoaKhoi'/>
                  <BiSearch style={{position: 'absolute', top: '165px', left: '985px', fontSize: '20px'}}/>
                </div>

                <div className='table-HienThiDuLieuKhoaKhoi'>
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