import React,{useState, useEffect} from 'react';

import ThamGiaAvatar from '../../../../assets/image/hsthamgia.jpg';

import {BsAlarm, BsMic, BsMicMute} from 'react-icons/bs'; 


export const DanhSachHocSinhThamGia =() =>{

    /* Chức năng mute/on mic*/
    const [micMute, setMicMute] = useState(<BsMicMute/>);
    function MicMute(){
        if(micMute===<BsMicMute/>){
            setMicMute(<BsMic/>)
            
        }else{
            setMicMute(<BsMicMute/>)
        }
    }


    return(
        <div className="DanhSachHSThamGia">

            <div className="titleDanhSachHs">
                Danh sách học viên
            </div>

            {/* Danh sách các học sinh tham gia */}

            <div className="box-CacHsThamGia">

                {/* Your self */}

                <div className="HsThamGia" style={{backgroundImage: `url(${ThamGiaAvatar})`}}>
                    <div className='Ten-HSThamGia2'>
                        Trần Thanh B 
                        <button className='btn-mic2' onClick={MicMute}>
                            {micMute}
                        </button>
                    </div>
                </div>

                {/* Các học sinh khác */}
                <div className="HsThamGia" style={{backgroundImage: `url(${ThamGiaAvatar})`}}>
                    <div className='Ten-HSThamGia'>
                        Trần Thanh B 
                        <button className='btn-mic' onClick={MicMute}>
                            {micMute}
                        </button>
                    </div>
                </div>

                
                <div className="HsThamGia" style={{backgroundImage: `url(${ThamGiaAvatar})`}}>
                    <div className='Ten-HSThamGia'>
                        Trần Thanh B 
                        <button className='btn-mic' onClick={MicMute}>
                            {micMute}
                        </button>
                    </div>
                </div>
                <div className="HsThamGia" style={{backgroundImage: `url(${ThamGiaAvatar})`}}>
                    <div className='Ten-HSThamGia'>
                        Trần Thanh B 
                        <button className='btn-mic' onClick={MicMute}>
                            {micMute}
                        </button>
                    </div>
                </div>
                <div className="HsThamGia" style={{backgroundImage: `url(${ThamGiaAvatar})`}}>
                    <div className='Ten-HSThamGia'>
                        Trần Thanh B 
                        <button className='btn-mic' onClick={MicMute}>
                            {micMute}
                        </button>
                    </div>
                </div>
                <div className="HsThamGia" style={{backgroundImage: `url(${ThamGiaAvatar})`}}>
                    <div className='Ten-HSThamGia'>
                        Trần Thanh B 
                        <button className='btn-mic' onClick={MicMute}>
                            {micMute}
                        </button>
                    </div>
                </div>
                <div className="HsThamGia" style={{backgroundImage: `url(${ThamGiaAvatar})`}}>
                    <div className='Ten-HSThamGia'>
                        Trần Thanh B 
                        <button className='btn-mic' onClick={MicMute}>
                            {micMute}
                        </button>
                    </div>
                </div>
                <div className="HsThamGia" style={{backgroundImage: `url(${ThamGiaAvatar})`}}>
                    <div className='Ten-HSThamGia'>
                        Trần Thanh B 
                        <button className='btn-mic' onClick={MicMute}>
                            {micMute}
                        </button>
                    </div>
                </div>
                <div className="HsThamGia" style={{backgroundImage: `url(${ThamGiaAvatar})`}}>
                    <div className='Ten-HSThamGia'>
                        Trần Thanh B 
                        <button className='btn-mic' onClick={MicMute}>
                            {micMute}
                        </button>
                    </div>
                </div>
                <div className="HsThamGia" style={{backgroundImage: `url(${ThamGiaAvatar})`}}>
                    <div className='Ten-HSThamGia'>
                        Trần Thanh B 
                        <button className='btn-mic' onClick={MicMute}>
                            {micMute}
                        </button>
                    </div>
                </div>
                <div className="HsThamGia" style={{backgroundImage: `url(${ThamGiaAvatar})`}}>
                    <div className='Ten-HSThamGia'>
                        Trần Thanh B 
                        <button className='btn-mic' onClick={MicMute}>
                            {micMute}
                        </button>
                    </div>
                </div>
                <div className="HsThamGia" style={{backgroundImage: `url(${ThamGiaAvatar})`}}>
                    <div className='Ten-HSThamGia'>
                        Trần Thanh B 
                        <button className='btn-mic' onClick={MicMute}>
                            {micMute}
                        </button>
                    </div>
                </div>
                <div className="HsThamGia" style={{backgroundImage: `url(${ThamGiaAvatar})`}}>
                    <div className='Ten-HSThamGia'>
                        Trần Thanh B 
                        <button className='btn-mic' onClick={MicMute}>
                            {micMute}
                        </button>
                    </div>
                </div>
                <div className="HsThamGia" style={{backgroundImage: `url(${ThamGiaAvatar})`}}>
                    <div className='Ten-HSThamGia'>
                        Trần Thanh B 
                        <button className='btn-mic' onClick={MicMute}>
                            {micMute}
                        </button>
                    </div>
                </div>
                <div className="HsThamGia" style={{backgroundImage: `url(${ThamGiaAvatar})`}}>
                    <div className='Ten-HSThamGia'>
                        Trần Thanh B 
                        <button className='btn-mic' onClick={MicMute}>
                            {micMute}
                        </button>
                    </div>
                </div>
                <div className="HsThamGia" style={{backgroundImage: `url(${ThamGiaAvatar})`}}>
                    <div className='Ten-HSThamGia'>
                        Trần Thanh B 
                        <button className='btn-mic' onClick={MicMute}>
                            {micMute}
                        </button>
                    </div>
                </div>
                <div className="HsThamGia" style={{backgroundImage: `url(${ThamGiaAvatar})`}}>
                    <div className='Ten-HSThamGia'>
                        Trần Thanh B 
                        <button className='btn-mic' onClick={MicMute}>
                            {micMute}
                        </button>
                    </div>
                </div>


            </div>

        </div>
    )
}