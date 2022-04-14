import React,{useState} from 'react';

import '../../../../../../assets/Css/StudentCss/ThongTinLopHocCss/QuesNAnsTopics.css';

import NguoiTraLoi from '../../../../../../assets/image/nguoitraloi.jpg';

import { BsClock, BsCalendarWeek } from 'react-icons/bs';
import {FiPaperclip} from 'react-icons/fi';
import {HiOutlinePaperAirplane} from 'react-icons/hi';

export const RightTopics = () => {

    /* Xét usestate để thực hiện đổi nút hoặc gọi chạy phần khung trả lời */   
    const [topicButton, setTopicButton] = useState('btn-TraLoiTopic');
    const [textTopicButton, setTextTopicButton] = useState('Trả Lời');
    const [displayAnswer, setDisplayAnswer] = useState('khung1-MyAnswer')
    const changeCssTopic = () =>{
        if(topicButton==='btn-TraLoiTopic'){
            setTopicButton('btn-HuyTopic')
            setTextTopicButton('Hủy')
            setDisplayAnswer('khung2-MyAnswer')
        }else{
            setTopicButton('btn-TraLoiTopic')
            setTextTopicButton('Trả Lời')
            setDisplayAnswer('khung1-MyAnswer')
        }
    }

    return (
        <div className="RightTopics">

            {/* Câu hỏi, thời gian hỏi và nút chọn nhập câu trả lời */}
            <div className='top-RightTopics'>
                <div className='khung-InforTopic'>
                    <div style={{ fontWeight: '700', fontSize: '17px' }}>Topic: Tại sao nước biển lại mặn?</div>

                    {/* Thông tin thời gian đăng*/}
                    <div style={{ display: 'flex', color: '#373839', opacity: '0.7' }}>
                        <div style={{ display: 'flex', fontSize: '15px', fontWeight: '600', marginRight: '50px' }}>
                            <BsClock style={{ marginTop: '4px', marginRight: '5px' }} />
                            16:00
                        </div>
                        <div style={{ display: 'flex', fontSize: '15px', fontWeight: '600' }}>
                            <BsCalendarWeek style={{ marginTop: '4px', marginRight: '5px' }} />
                            22 tháng 10, 2020
                        </div>
                    </div>

                </div>

                {/* Button cho nhập câu trả lời */}
                <button className={topicButton} onClick={changeCssTopic}>
                    {textTopicButton}     
                </button>

            </div>


            {/* Các lời giải thích cho Các topic */}
            <div className='CauTraLoi-Topic'>
                <h4>Thảo luận xem vì sao? Thích thì mặn hong thích thì mặn, Hello how are you what your name</h4>

                {/* Các khung câu trả lời */}
                    {/* câu trả lời 1 */}
                    <div className='khung-TraLoiTopic'>
                        {/* thông tin vặt trả lời */}
                        <div className='top-KhungTraLoiTopic'>
                            <div className='avatar-Topic' style={{ backgroundImage: `url(${NguoiTraLoi})` }} />
                            <div className='hotenNguoiTraLoi-Topic'>
                                {/* Tên người trả lời */}
                                <div style={{ fontSize: '15px', fontWeight: '700', color: '#CC5C00' }}> Lor </div>
                                {/* Ngày trả lời */}
                                <div style={{ fontSize: '13px', fontWeight: '600', color: '#373839', opacity: '0.7' }}>20 tháng 10, 2020</div>
                            </div>
                            {/* Giờ trả lời */}
                            <div className='giotraloi-Topic'>
                                17:53
                            </div>
                        </div>
                        {/* Khung để trả lời */}
                        <div className='Answer-Topic'>
                            Lorem ipsum is sample text that is used in designing print items or websites. The lorem ipsum text is nonsense Latin that serves to demonstrate the layout of text, without distracting the observer with a discernible story or information.
                        </div>
                    </div>
                

                {/* câu trả lời 2 */}
                <div className='khung-TraLoiTopic'>
                    {/* thông tin vặt trả lời */}
                    <div className='top-KhungTraLoiTopic'>
                        <div className='avatar-Topic' style={{ backgroundImage: `url(${NguoiTraLoi})` }} />
                        <div className='hotenNguoiTraLoi-Topic'>
                            {/* Tên người trả lời */}
                            <div style={{ fontSize: '15px', fontWeight: '700', color: '#CC5C00' }}> Lor </div>
                            {/* Ngày trả lời */}
                            <div style={{ fontSize: '13px', fontWeight: '600', color: '#373839', opacity: '0.7' }}>20 tháng 10, 2020</div>
                        </div>
                        {/* Giờ trả lời */}
                        <div className='giotraloi-Topic'>
                            17:53
                        </div>
                    </div>
                    {/* Khung để trả lời */}
                    <div className='Answer-Topic'>
                        Lorem ipsum is sample text that is used in designing print items or websites. The lorem ipsum text is nonsense Latin that serves to demonstrate the layout of text, without distracting the observer with a discernible story or information.
                    </div>
                    {/* hình comment */}
                    <div className='hinhanh-cmmt' style={{ backgroundImage: `url(${NguoiTraLoi})` }}/>
                </div>

            </div>



            {/* Khung trả lời của bạn  */}
            <div className={displayAnswer}>

                <FiPaperclip style={{fontSize: '25px', color: '#C9C4C0', position: 'absolute', top: '20px', left: '20px'}}/>

                <textarea className='nhapCauTraLoi-MyAnswer'/>

                <HiOutlinePaperAirplane style={{fontSize: '25px', color: '#FF7506', position: 'absolute', top: '20px', left: '880px', transform: 'rotate(90deg)'}}/>

            </div>

        </div>
    )
}