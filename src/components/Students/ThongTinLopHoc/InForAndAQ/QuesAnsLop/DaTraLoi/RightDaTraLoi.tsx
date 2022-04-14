import React,{useState} from 'react';

import NguoiHoi from '../../../../../../assets/image/nguoihoiavatar.jpg';
import NguoiTraLoi from '../../../../../../assets/image/nguoitraloi.jpg';

import {AiOutlineMinus} from 'react-icons/ai';
import {FiPaperclip} from 'react-icons/fi';
import {HiOutlinePaperAirplane} from 'react-icons/hi';


export const RightDaTraLoi =() =>{

     /* Xét usestate để thực hiện đổi nút hoặc gọi chạy phần khung trả lời */   
     const [Button, setButton] = useState('btn-TraLoi');
     const [textButton, setTextButton] = useState('Trả lời');
     const [displayTraLoi, setDisplayTraLoi] =useState('bottom1-RightForEveryThing')
     const changeCss = () =>{
         if(Button==='btn-TraLoi'){
             setButton('btn-Huy')
             setTextButton('Hủy')
             setDisplayTraLoi('bottom2-RightForEveryThing')
         }else {
             setButton('btn-TraLoi')
             setTextButton('Trả Lời')
             setDisplayTraLoi('bottom1-RightForEveryThing')
         }
     }


    return(
        <div className="RightForEveryThing">
            
            {/* Phần chứa thông tin người dùng */}
            <div className="top-RightForEveryThing">
                {/* Phần chứa thông tin */}
                <div className="infor-NguoiHoi">
                    {/* Avatar người hỏi */}
                    <div className="avatar-NguoiHoi" style={{background: `url(${NguoiHoi})`}}/>

                    {/* Thông tin người hỏi cũng như thời gian hỏi */}
                    <div className='thongtin-NguoiHoi'>
                        <div className='ten-NguoiHoi'>Hiền Mai</div>
                        <div className='time-NguoiHoi'>
                            <div>
                                29 tháng 10,2020
                            </div>  
                            <div style={{marginLeft: '32%'}}>
                                10:14
                            </div>
                        </div>
                    </div>

                    {/* Nút bấm để thực hiện trả lời câu hỏi */} 

                    <button className={Button} onClick={changeCss}>
                        {textButton}     
                    </button>


                </div>

                {/* Phần chứa câu hỏi */}
                <div className='khung-CauHoi'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
                    <br/>
                    <br/>    
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                </div>
            </div>



            {/* Phần chứa các câu trả lời */}
            <div className="body-RightForEveryThing">
                <div className='AllTheAnswer'>
                    
                    <div className='khung-CauTraLoi'>
                        {/* Thong tin của ng trả lời câu hỏi*/}
                        <div className='infor-NguoiTraLoi'>
                            {/* Avatar của người hỏi */}
                            <div className="avatar-NguoiTraLoi" style={{background: `url(${NguoiTraLoi})`}}/>

                            {/* Thông tin của người hỏi */}
                            <div className='NguoiTraLoi-CacChiTiet'>

                                {/* Họ tên chức vụ */}
                                <div style={{display: 'flex', marginTop: '2px'}}>
                                    <div style={{marginRight: '10px', fontWeight: '700', color: '#CC5C00'}}>
                                        Trần Thanh Tâm
                                    </div>
                                    <AiOutlineMinus style={{marginTop: '5px', color: '#C9C4C0'}}/>
                                    <div style={{marginLeft: '10px', fontWeight: '600', color: '#C9C4C0'}}>
                                        Giáo viên
                                    </div>
                                </div>

                                {/* Thời gian trả lời */}
                                <div style={{display: 'flex'}}>
                                    <div style={{fontWeight: '600', color: '#C9C4C0', fontSize: '13px'}}>
                                        22 tháng 10, 2020
                                    </div>
                                    <div style={{fontWeight: '600', color: '#C9C4C0', fontSize: '13px', marginLeft: '40px'}}>
                                        10:14
                                    </div>
                                </div>

                            </div>   
                        </div>

                        {/* Câu trả lời */}
                        <div className='CauTraLoi-NguoiTraLoi'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                        </div>
                    </div>

                    

                </div>
            </div>



            {/* Phần chứa vị trí để viết câu trả lời */}
            <div className={displayTraLoi}>

                <FiPaperclip style={{position: 'absolute', top: '625', left: '470', fontSize: '25px', color: '#C9C4C0'}}/>

                <textarea className='khung-DeTraLoi'>
                </textarea>

                <HiOutlinePaperAirplane style={{position: 'absolute', top: '620', left: '1290', fontSize: '25px', color: '#FF7506', transform: 'rotate(90deg)'}}/>

            </div>


        </div>
    )
}