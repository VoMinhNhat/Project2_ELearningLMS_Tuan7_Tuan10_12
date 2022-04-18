
import {BsChevronDown} from 'react-icons/bs';
import {AiOutlineMinus} from 'react-icons/ai';


export const CloseChatBox =() =>{

    return (
        <>
        {/* Chat box đóng */}
        <div className='chatBox-Off'>
            <BsChevronDown style={{color: '#FF7506', fontSize: '25px', marginTop: '13px', marginRight: '5px'}}/>
                <div style={{fontSize: '16px', width :'100px', height: '30px', fontWeight: '700', marginTop: '12px'}}>
                    Chat với lớp
                </div>
            <AiOutlineMinus style={{color: '#FF7506', fontSize: '25px', marginTop: '13px', marginLeft: '80px'}} />
        </div>
        </>
    )
}