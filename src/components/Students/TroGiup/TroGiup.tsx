import '../../../assets/Css/StudentCss/TroGiupCss/TroGiup.css';

import background from '../../../assets/image/background.png';

import { Radio } from 'antd';
import React from 'react';

import {Editor} from 'react-draft-wysiwyg';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";


import { GoLocation } from 'react-icons/go';
import { BsTelephone } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';



export const TroGiup = () => {

    //Radio
const ChonTroGiup = () => {
    const [value, setValue] = React.useState(1);

    const onChangeTroGiup = (e: any) => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
    };

    return (
        <Radio.Group onChange={onChangeTroGiup} value={value}>
            <Radio value={1} style={{ fontSize: '15px', fontWeight: '700', marginRight: '40px' }}>Đào tạo</Radio>
            <Radio value={2} style={{ fontSize: '15px', fontWeight: '700', marginRight: '40px' }}>Học vụ</Radio>
            <Radio value={3} style={{ fontSize: '15px', fontWeight: '700', marginRight: '40px' }}>Tiết học</Radio>
            <Radio value={4} style={{ fontSize: '15px', fontWeight: '700', marginRight: '40px' }}>Học phí</Radio>
        </Radio.Group>
    );
};

    return (
        <>
            {/* Trợ giúp vấn đề công ty */}
            <div className='khungTroGiupMain' style={{ backgroundImage: `url(${background})` }}>

                <div className='titleThacMac'>
                    Bạn có thắc mắc
                </div>

                <div style={{ fontSize: '15px', fontWeight: '500', color: '#373839', opacity: '0.5', marginLeft: '30px' }}>
                    Chúng tôi sẽ phản hồi lại bạn trong thời gian sớm nhất có thể
                </div>

                <div style={{ marginLeft: '30px', marginTop: '20px' }}>
                    <ChonTroGiup />
                </div>

                <input className='input-TroGiup' />

                {/* <textarea className='textarea-TroGiup'/> */}
                
                <div className='textarea-TroGiup'>
                    <Editor
                        wrapperClassName="wrapper-class"
                        toolbar={{
                            options: ['inline', 'fontSize', 'list', 'textAlign'],
                          }}
                    />
                </div>

                <button className='btn-Gui-TroGiup'>Gửi</button>
            </div>

            <div className='khung-Dummy' />


            {/* Thong tin địa chỉ công ty */}
            <div className='khung-ThongTin-TroGiup'>
                <div className='title-khung-ThongTin'>
                    Thông tin
                </div>
                <div className='vitri-khung-ThongTin'>
                    <GoLocation style={{ fontSize: '25px', marginRight: '10px', color: '#823B00' }} />
                    <div style={{ width: '1px', height: '100%', background: '#373839', opacity: '0.7', marginRight: '10px' }} />
                    <div style={{ fontSize: '15px', fontWeight: '500' }}>
                        <div style={{ marginBottom: '10px' }}><b>CN1:</b> 86/33 Âu cơ, phường 9, Quận Tân Bình</div>
                        <div style={{ marginBottom: '10px' }}><b>CN2:</b> 86/33 Âu cơ, phường 9, Quận Tân Bình</div>
                        <div style={{}}><b>CN3:</b> 86/33 Âu cơ, phường 9, Quận Tân Bình</div>
                    </div>
                </div>

                <div className='phone-khung-ThongTin'>
                    <BsTelephone style={{ fontSize: '25px', marginRight: '10px', color: '#823B00' }} />
                    <div style={{ width: '1px', height: '100%', background: '#373839', opacity: '0.7', marginRight: '10px' }} />
                    <div style={{ fontSize: '15px', fontWeight: '500' }}>
                        <div style={{ marginBottom: '10px' }}> (028) 2243 6888</div>
                        <div>(028) 6268 1426</div>
                    </div>
                </div>

                <div className='email-khung-ThongTin'>
                    <AiOutlineMail style={{ fontSize: '25px', marginRight: '10px', color: '#823B00' }} />
                    <div style={{ width: '1px', height: '100%', background: '#373839', opacity: '0.7', marginRight: '10px' }} />
                    <div style={{ fontSize: '15px', fontWeight: '500' }}>
                        <div>(028) 6268 1426</div>
                    </div>
                </div>
            </div>
        </>
    )
}
