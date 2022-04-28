import { Input } from "antd";
import React, {useState} from "react";

import { Link } from 'react-router-dom';

import '../../../assets/Css/StudentCss/LogInThamGiaCss/LogInThamGia.css';

import {AiOutlineEyeInvisible} from 'react-icons/ai';


export const LogInThamGia = () =>{

    const [checkText, setCheckText] = useState(''||'inputIdLop-LogInThamGia');
    const checkTextId =(e:any) =>{
        const value = e.target.value;
        if(value !== ''){
            setCheckText('inputIdLop2-LogInThamGia');
        }else{
            setCheckText('inputIdLop-LogInThamGia')
        }
    } 

    const [checkPass, setCheckPass] = useState(''||'inputPassLop-LogInThamGia');
    const [checkIcon, setCheckIcon] = useState(''||'iconPassThamGia2');
    const checkPassWord =(e:any) =>{
        const value = e.target.value;
        if(value !== ''){
            setCheckPass('inputPassLop2-LogInThamGia');
            setCheckIcon('iconPassThamGia')
        }else{
            setCheckPass('inputPassLop-LogInThamGia')
            setCheckIcon('iconPassThamGia2')
        }
    }

    const [checkBtnXacNhan, setCheckBtnXacNhan] = useState (''||'btn-XacNhanLogIn')
    
    const checkBtnThamGia =(e:any) =>{
        const value = e.target.value;
        if(value !==''){
            setCheckBtnXacNhan('btn-XacNhanLogIn2')
        }else{
            setCheckBtnXacNhan('btn-XacNhanLogIn')
        }
    }



    return(
        <>
        <div className='LogInThamGia'>
            <div className='form-LogInThamGia'>

                <div className='title-LogInThamGia'>Tham gia lớp học</div>

                <input className={checkText}  placeholder='ID hoặc link lớp học *' onChange={checkTextId} onChangeCapture={checkBtnThamGia}/>

                <input className={checkPass} key='PassLop' placeholder='Mật khẩu lớp học' type={'password'} onChange={checkPassWord} onChangeCapture={checkBtnThamGia}/>

                <AiOutlineEyeInvisible className={checkIcon} onChange={checkPassWord} />

                <input className='inputHoTen-LogInThamGia' key='HotenHs'/>

                <div className='btn-LogInThamGia'>
                    <Link to={'/Class/ThongTinLop'} style={{textDecoration: 'none'}}>
                        <button className='btn-HuyLogIn'>Hủy</button>
                    </Link>
                    <Link to={'/Class/ThamGiaLopHoc'}>
                        <button className={checkBtnXacNhan}>Tham Gia</button>
                    </Link>
                </div>

            </div>
        </div>
        </>
    )
}