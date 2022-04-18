import React, {useState} from 'react';
import { Slider, Switch, Modal, Button } from 'antd';

import 'antd/dist/antd.css';

import khungStream from '../../../../assets/image/khungstream.jpg';

import {AiOutlineSound, AiOutlineFundProjectionScreen, AiOutlineZoomIn} from 'react-icons/ai';
import {BsFullscreen, BsCameraVideo,BsCameraVideoOff , BsMic, BsMicMute} from 'react-icons/bs';
import {FiLogOut} from 'react-icons/fi';



//Slide
class Sound extends React.Component { 
    render() {
      return (
        <>
          <Slider defaultValue={30}/>
        </>
      );
    }
  }

//Modal

const ModalLogOut = () => {
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
        <Button type="primary" onClick={showModal} style={{background: 'none', border: 'none', fontSize: '20px', marginBottom: '2px'}}>
            <FiLogOut/>
        </Button>
        <Modal title="Rời khỏi lớp học" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} 
                                   centered={true} cancelText={'Hủy'} okText={'Xác nhận'}
                                    style={{textAlign: 'center'}} width={700}
        >
          Học viên vẫn có thể vào lại lớp học bằng cách nhấn vào <b>Bắt đầu lớp học.</b> Xác nhận rời lớp học?
        </Modal>
      </>
    );
  };


export const StreamVid = () =>{

    //Đổi icon mic
    const [mute,setMute] = useState(<BsMic/>)
    const MuteMic = () =>{
        if(mute===(<BsMicMute/>)){
            setMute(<BsMic/>)
        }
        else if(mute===(<BsMic/>)){
            setMute(<BsMicMute/>)
        }
    }

    //Đổi icon cam
    const [cam,setCam] = useState(<BsCameraVideoOff/>)
    const MuteCam = () =>{
        if(cam===(<BsCameraVideo/>)){
            setCam(<BsCameraVideoOff/>)
        }
        else if(cam===(<BsCameraVideoOff/>)){
            setCam(<BsCameraVideo/>)
        }
    }


    return( 
        <div className="StreamVid" style={{backgroundImage: `url(${khungStream})`}}>

            <div className='top-StreamVid'>

                {/* Âm thanh */}
                <div className='sound-StreamVid'>
                    <AiOutlineSound style={{fontSize: '22px', marginRight: '10px'}}/>
                    <div className='slide-Andt'>
                        <Sound/>
                    </div>
                </div>

                {/* Số slide */}
                <div className='slides-StreamVid'>
                    <AiOutlineFundProjectionScreen style={{fontSize: '22px', marginRight: '10px'}}/>
                    09/45 slides
                </div>

                {/*Phóng to thu nhỏ màn hình*/}
                <div className='zoom-StreamVid'>
                    <div className='sizeZoom-StreamVid'>
                        90%
                    </div>
                    <AiOutlineZoomIn style={{fontSize: '22px', marginRight: '10px'}}/>
                    <BsFullscreen  style={{fontSize: '18px', marginRight: '10px', marginTop: '2px'}}/>
                </div>

                {/* Thoát ra khỏi lớp */}
                <div className='outclass-StreamVid'>
                    <ModalLogOut />
                </div>
            </div>

            <div className='camera-StreamVid'  onClick={MuteCam}>
                {cam}
            </div> 
            <div className='mic-StreamVid' onClick={MuteMic}>
                {mute}
            </div>     

            <div className='bottom-StreamVid'>
                12A1 - Lịch sử tiết 5: Tìm hiểu văn hóa Hy Lạp - GV: Trần Thanh Tâm
            </div>

        </div>
    )
}