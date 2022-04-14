import React from 'react';
import { DatePicker, Space, TimePicker } from 'antd';
import {MdChevronLeft, MdChevronRight} from 'react-icons/md';

//Date picker
function ngayKetThuc(date:any, dateString:any) {
    console.log(date, dateString);
  }
// Time Picker
function chonGioKetThuc(time:any, timeString:any) {
    console.log(time, timeString);
  }

// Slider


export const BodyInFor = (props: any) =>{

    // const slideLeft =()=>{
    //     var slider = document.getElementById("slider")
    //     slider?.scrollLeft = slider?.scrollLeft + 500;
    // }

    // const slideRight =()=>{
    //     var slider = document.getElementById("slider")
    //     slider?.scrollLeft = slider?.scrollLeft - 500;
    // }

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

            {/*Card slider*/}

            <div id='main-sliders-buoihoc'>

                <MdChevronLeft size={25} color={'#FF7506'} className='slider-icon left'/>
                
                <div id='slider'>

                    <div className='slider-card-grey'>
                        <div className='buoihoc'> Buổi 1 </div>
                        <div className='ngayhoc'>19/08/2020</div>
                        <div className='giohoc'>14:00-14:45</div>
                    </div>

                    <div className='slider-card-orange'>
                        <div className='buoihoc'> Buổi 2 </div>
                        <div className='ngayhoc'>19/08/2020</div>
                        <div className='giohoc'>14:00-14:45</div>
                    </div>

                    <div className='slider-card-blue'>
                        <div className='buoihoc'> Buổi 3 </div>
                        <div className='ngayhoc'>19/08/2020</div>
                        <div className='giohoc'>14:00-14:45</div>
                    </div>

                    <div className='slider-card-blue'>
                        <div className='buoihoc'> Buổi 4 </div>
                        <div className='ngayhoc'>19/08/2020</div>
                        <div className='giohoc'>14:00-14:45</div>
                    </div>

                    <div className='slider-card-blue'>
                        <div className='buoihoc'> Buổi 5 </div>
                        <div className='ngayhoc'>19/08/2020</div>
                        <div className='giohoc'>14:00-14:45</div>
                    </div>

                    <div className='slider-card-blue'>
                        <div className='buoihoc'> Buổi 6 </div>
                        <div className='ngayhoc'>19/08/2020</div>
                        <div className='giohoc'>14:00-14:45</div>
                    </div>

                    <div className='slider-card-blue'>
                        <div className='buoihoc'> Buổi 7 </div>
                        <div className='ngayhoc'>19/08/2020</div>
                        <div className='giohoc'>14:00-14:45</div>
                    </div>

                </div>

                <MdChevronRight size={25} color={'#FF7506'} className='slider-icon right'/>
                
            </div>

            

        </div>
    )
}