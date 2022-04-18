import chatAvatar from '../../../../../assets/image/chatavatar.jpg';

import { BsChevronDown } from 'react-icons/bs';
import { AiOutlineMinus } from 'react-icons/ai';
import { FiPaperclip } from 'react-icons/fi';
import { HiOutlinePaperAirplane } from 'react-icons/hi';


export const OpenChatBox = () => {

    return (
        <>
            {/* Chat box mở */}
            <div className='chatBox'>

                <div className="openChatBox">
                    <BsChevronDown style={{ color: '#FF7506', fontSize: '25px', marginTop: '13px', marginRight: '5px' }} />
                    <div style={{ fontSize: '16px', width: '100px', height: '30px', fontWeight: '700', marginTop: '12px' }}>
                        Chat với lớp
                    </div>
                    <AiOutlineMinus style={{ color: '#FF7506', fontSize: '25px', marginTop: '13px', marginLeft: '80px' }} />
                </div>

                <div className='Chat'>

                    <div className='Chat-Line'>
                        <div className='StuChat-Avat' style={{ backgroundImage: `url(${chatAvatar})` }} />
                        <div className='StuChat-Name'>Thanh Tâm:</div>
                        <div className='StuChat-Chat'>hello! how are you? i fine, thanh you and you?</div>
                    </div>

                    <div className='Chat-Line'>
                        <div className='TeaChat-Avat' style={{ backgroundImage: `url(${chatAvatar})` }} />
                        <div className='TeaChat-Name'>Thanh Tâm:</div>
                        <div className='TeaChat-Chat'>hello! how are you? i fine, thanh you and you?</div>
                    </div>

                </div>

                <div className='Your-Chat'>
                    <FiPaperclip style={{ position: 'absolute', top: '15', left: '10', fontSize: '20px', color: '#ff7300' }} />
                    <textarea className='Your-Chat-Box'></textarea>
                    <HiOutlinePaperAirplane style={{ position: 'absolute', top: '15', left: '333', fontSize: '20px', color: '#ff7300', transform: 'rotate(90deg)' }} />
                </div>

            </div>
        </>
    )
}