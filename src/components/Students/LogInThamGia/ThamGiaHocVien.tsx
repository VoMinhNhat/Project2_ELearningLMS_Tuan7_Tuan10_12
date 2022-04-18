import React,{useState} from 'react';

import '../../../assets/Css/StudentCss/LogInThamGiaCss/ThamGiaHocVien.css';

import {AiOutlineCamera, AiOutlineEyeInvisible} from 'react-icons/ai';


export const ThamGiaHocVien = () =>{

    const [checkType, setCheckType] = useState (''||'input-IDLop-ThamGiaHocVien')
    const checkTypeHocVien =(e:any) =>{
        const value = e.target.value;
        if(value !== ''){
            setCheckType('input-IDLop2-ThamGiaHocVien');
        }else{
            setCheckType('input-IDLop-ThamGiaHocVien')
        }
    }

    const [checkPass, setCheckPass] = useState(''||'input-PassLop-ThamGiaHocVien');
    const [checkIcon, setCheckIcon] = useState(''||'iconPass-ThamGiaHocVien');
    const checkPassWord =(e:any) =>{
        const value = e.target.value;
        if(value !== ''){
            setCheckPass('input-PassLop2-ThamGiaHocVien');
            setCheckIcon('iconPass-ThamGiaHocVien')
        }else{
            setCheckPass('input-PassLop-ThamGiaHocVien')
            setCheckIcon('iconPass2-ThamGiaHocVien')
        }
    }

    return(
        <div className='ThamGiaHocVien'>
            <div className='form-ThamGiaHocVien'>

                <div className='titleThamGiaHocVien'>Tham gia lớp học</div>
                <div className='vailoi-ThamGiaHocVien'>
                    Bạn có muốn trở thành học viên của chúng tôi? Hãy để lại thông tin để chúng tôi có thể hỗ trợ bạn tốt hơn.
                </div>
                
                <div className='Avatar-ThamGiaHocVien' />
                    
                <div className='camIcons'>
                    <AiOutlineCamera/>
                </div>

                <div className='latvat-ThamGiaHocVien'>Chọn ảnh đại diện</div>

                {/* các input */}

                <input className={checkType} placeholder='ID hoặc link lớp học *' onChange={checkTypeHocVien}/>

                <input className={checkPass} placeholder='Mật khẩu lớp học' onChange={checkPassWord}/>
                <AiOutlineEyeInvisible className={checkIcon}/>


                <input className='input-ThamGiaHocVien' placeholder='Tên học viên'/>

                <input className='input-ThamGiaHocVien' placeholder='Email'/>

                <input className='input-ThamGiaHocVien' placeholder='Số điện thoại'/>



                <div style={{fontSize: '12px', color: '#373839', opacity: '0.5', marginLeft: '20px', marginTop: '10px'}}>
                    * Lưu ý: Mã OTP sẽ được gửi đến số điện thoại này.
                </div>

                <div className='btn-ThamGiaHocVien'>
                    <button className='btn-Huy-ThamGiaHocVien'>Hủy</button>
                    <button className='btn-XacNhan-ThamGiaHocVien'>Xác nhận</button>
                </div>

            </div>
        </div>
    )
}