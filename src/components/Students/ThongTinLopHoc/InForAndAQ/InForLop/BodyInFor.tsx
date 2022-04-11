import { DatePicker, Space, TimePicker } from 'antd';
import {AiOutlineLeft, AiOutlineRight} from 'react-icons/ai';

//Date picker
function ngayKetThuc(date:any, dateString:any) {
    console.log(date, dateString);
  }
// Time Picker
function chonGioKetThuc(time:any, timeString:any) {
    console.log(time, timeString);
  }

export const BodyInFor = () =>{
    return (
        <div className="BodyInFor">

            <div className="lichhoc-BodyInfor">
                <b>Lịch học:</b>
                <div style={{marginLeft:'100px'}}>Tổng số <b>7</b> buổi</div>
            </div>

            <div className="thoiluong-BodyInfor">
                <b>Thời lượng:</b>
                <div style={{marginLeft:'83px'}}>45 phút</div>
            </div>

            <div className="batdau-BodyInfor">
                <b>Ngày bắt đầu:</b>
                <div style={{marginLeft:'65px'}}>19/08/2020</div>
            </div>

            <div className="ketthuc-BodyInfor">
                <b>Ngày kết thúc:</b>
                <div style={{marginLeft:'62px'}}>
                    <Space direction="vertical">
                        <DatePicker onChange={ngayKetThuc} style={{width:'160px', height:'30px', borderRadius:'5px'}}/>
                    </Space>
                </div>
                <div style={{marginLeft:'20px'}}>
                 <TimePicker onChange={chonGioKetThuc} style={{width:'100px', height:'30px', borderRadius:'5px'}}/>
                </div>
            </div>

            <div className='buoihoc-BodyInFor'>

                <AiOutlineLeft style={{color: '#FF7506', fontSize:'15px', marginRight:'-10px'}}/>

                <div className='buoihocxam'>
                    <div className='buoihoc'>buổi 1</div>
                    <div className='ngayhoc'>19/8/2020</div>
                    <div className='giohoc'>14:00-14:45</div>
                </div>

                <div className='buoihoccam'>
                    <div className='buoihoc'>buổi 2</div>
                    <div className='ngayhoc'>19/8/2020</div>
                    <div className='giohoc'>14:00-14:45</div>
                </div>

                <div className='buoihocxanh'>
                    <div className='buoihoc'>buổi 3</div>
                    <div className='ngayhoc'>19/8/2020</div>
                    <div className='giohoc'>14:00-14:45</div>
                </div>

                <div className='buoihocxanh'>
                    <div className='buoihoc'>buổi 4</div>
                    <div className='ngayhoc'>19/8/2020</div>
                    <div className='giohoc'>14:00-14:45</div>
                </div>

                <div className='buoihocxanh'>
                    <div className='buoihoc'>buổi 5</div>
                    <div className='ngayhoc'>19/8/2020</div>
                    <div className='giohoc'>14:00-14:45</div>
                </div>

                <div className='buoihocxanh'>
                    <div className='buoihoc'>buổi 6</div>
                    <div className='ngayhoc'>19/8/2020</div>
                    <div className='giohoc'>14:00-14:45</div>
                </div>

                <div className='buoihocxanh'>
                    <div className='buoihoc'>buổi 7</div>
                    <div className='ngayhoc'>19/8/2020</div>
                    <div className='giohoc'>14:00-14:45</div>
                </div>

                <AiOutlineRight style={{color: '#FF7506', fontSize:'15px', marginLeft: '5px'}}/>

            </div>

        </div>
    )
}