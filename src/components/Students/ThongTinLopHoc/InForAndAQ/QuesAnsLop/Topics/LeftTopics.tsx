import '../../../../../../assets/Css/StudentCss/ThongTinLopHocCss/QuesNAnsTopics.css';

import { BsSearch } from 'react-icons/bs';
import { BsEye, BsChatSquare } from 'react-icons/bs';

export const LeftTopics = () => {
    return (
        <div className="leftTopics">
            <BsSearch style={{ position: 'absolute', left: '47px', top: '127', color: '#9a9999' }} />
            <input className='timKiemTheoTopics'></input>

            {/* Các topics */}
            <div className='listCacTopic'>
                {/* Các Topics */}

                <div className='Topic1'>
                    <div className='Topic-name'>
                        <div style={{ float: 'left', marginLeft: '20px', fontSize: '15px', fontWeight: '500', color: '#373839' }}>
                            Tại sao nước biển lại mặn
                        </div>
                        <div style={{ float: 'right', marginRight: '10px', fontSize: '13px', fontWeight: '500', color: '#373839', opacity: '0.7' }}>
                            15 th10
                        </div>
                    </div>
                    <div className='Topic-noidung'>
                        dddddddddddddddddddddddd dddddddddddddddddddddddddddddddd ddddddddddddddddddddddddddd dddddddddddddddddd ddddddddddddd
                    </div>
                    <div className='Topic-icon'>
                        <div style={{ height: '30px', width: '50px', lineHeight: '30px', fontWeight: '500', color: '#373839', opacity: '0.7', marginRight: '20px' }}>
                            <BsEye style={{ marginRight: '5px', marginTop: '5', fontSize: '20px' }} />
                            22
                        </div>
                        <div style={{ height: '30px', width: '50px', lineHeight: '30px', fontWeight: '500', color: '#373839', opacity: '0.7' }}>
                            <BsChatSquare style={{ marginRight: '5px', marginTop: '5', fontSize: '20px' }} />
                            10
                        </div>
                    </div>
                </div>

                <div className='Topic2'>
                    <div className='Topic-name'>
                        <div style={{ float: 'left', marginLeft: '20px', fontSize: '15px', fontWeight: '500', color: '#373839' }}>
                            Tại sao nước biển lại mặn
                        </div>
                        <div style={{ float: 'right', marginRight: '10px', fontSize: '13px', fontWeight: '500', color: '#373839', opacity: '0.7' }}>
                            15 th10
                        </div>
                    </div>
                    <div className='Topic-noidung'>
                        dddddddddddddddddddddddd dddddddddddddddddddddddddddddddd ddddddddddddddddddddddddddd dddddddddddddddddd ddddddddddddd
                    </div>
                    <div className='Topic-icon'>
                        <div style={{ height: '30px', width: '50px', lineHeight: '30px', fontWeight: '500', color: '#373839', opacity: '0.7', marginRight: '20px' }}>
                            <BsEye style={{ marginRight: '5px', marginTop: '5', fontSize: '20px' }} />
                            22
                        </div>
                        <div style={{ height: '30px', width: '50px', lineHeight: '30px', fontWeight: '500', color: '#373839', opacity: '0.7' }}>
                            <BsChatSquare style={{ marginRight: '5px', marginTop: '5', fontSize: '20px' }} />
                            10
                        </div>
                    </div>

                </div>


            </div>
        </div>
    )
}