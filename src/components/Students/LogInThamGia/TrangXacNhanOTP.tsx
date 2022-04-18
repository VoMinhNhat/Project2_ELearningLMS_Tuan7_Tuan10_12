import '../../../assets/Css/StudentCss/LogInThamGiaCss/TrangXacNhanOTP.css';

export const TrangXacNhanOTP = () =>{
    return(
        <div className='TrangXacNhanOTP'>
            <div className='form-XacNhanOTP'>
                <div className='title-XacNhanOTP'>
                    Xác nhận OTP
                </div>

                <div className='khungchu-XacNhanOTP'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>

                <input className='input-XacNhanOTP' placeholder='Nhập mã OTP của bạn'/>

                <div style={{fontSize: '12px', color: '#373839', opacity: '0.5', textAlign: 'left', marginLeft: '20px', marginTop: '10px'}}>
                    * Lưu ý: chúng tôi sẽ gửi mã xác nhận cho bạn thông qua số điện thoại này.
                </div>

                <div className='CacBtn-XacNhanOTP'>
                    <button className='Btn-GuiLaiOTP'>Gửi lại OTP</button>
                    <button className='Btn-XacNhanOTP'>Xác nhận</button>
                </div>

            </div>
        </div>
    )
}