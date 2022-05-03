import '../../../../assets/Css/LeaderShipCss/KhaiBaoDuLieuCss/NienKhoaDuLieu.css';

import {AiOutlinePlus} from 'react-icons/ai';

import React, { useState } from 'react';
import { Modal, Button } from 'antd';

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
  
    return (
      <>
        <Button type="primary" onClick={showModal} style={{background: '#FF7506', border: 'none', width: '130px', 
                                                            height: '100%', borderRadius: '8px', textAlign: 'left',
                                                            }}>
            <AiOutlinePlus style={{fontSize: '20px',marginRight: '5px', float: 'left'}}/> 
            <div>Thêm mới</div>
        </Button>
        <Modal title="Thêm niên khóa mới" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} closable={false} width={620}>

            <div className='upperThemNienKhoa'>
                <div>
                    <div style={{fontSize: '15px', fontWeight: '500'}}>
                        Niên khóa:
                    </div>
                    <div>
                        
                    </div>                                        
                </div>
            </div>


        </Modal>
      </>
    );
  };


  //

export const DuLieuNienKhoa = () =>{
    return(
        <div className='DuLieuNienKhoa'>
            <div className='header-DuLieuNienKhoa'>
                <ModalThemNienKhoa/>
            </div>
            <div className='HienDuLieuNienKhoa'>

            </div>
        </div>
    )
}