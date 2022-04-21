import {GoPrimitiveDot} from 'react-icons/go';

import { Checkbox } from 'antd';


//Chọn Lọc lịch thi
function LocLichThi(e:any) {
    console.log(`checked = ${e.target.checked}`);
  }

export const LichThiRight = () =>{
    return(
        <div className="LichThiRight">
            
            <div className="top-LichThiRight">
                {/* Ngày Thi */}
                <div style={{width: '90%', height: '54px', marginLeft: 'auto', marginRight: 'auto', display: 'flex'}}>
                    <div style={{fontSize: '55px', fontWeight: '700', width: '55px', lineHeight: '50px', marginLeft: '18%'}}>
                        12
                    </div>
                    <div style={{wordBreak: 'break-word', width: '65px', fontSize: '12px', fontWeight: '600', marginLeft: '12px'}}>
                        Thứ 5 
                        Tháng 8
                        Năm 2020 
                    </div>
                </div>

                <div style={{height: '7px', width: '90%', marginLeft: 'auto', marginRight: 'auto', marginTop: '10px', background: '#FFA75E', borderRadius:'5px'}}/>

                {/* Thông tin môn thi */}
                <div className="thongTinMonThi">

                    {/* Khung chứa thong tin 1 */}
                    <div style={{marginBottom: '20px'}}>   
                        <div style={{display:'flex', fontSize: '15px', fontWeight: '600', color: '#2EACEE'}}>
                            <GoPrimitiveDot style={{marginTop: '5px', marginRight: '5px'}}/>
                            Toán đại số
                        </div>
                        <div>
                           <div style={{display: 'flex'}}>
                               <div style={{fontSize: '13px', fontWeight: '600', marginRight: '10px'}}>Đối tượng:</div>
                               <div style={{fontSize: '13px', fontWeight: '600', color: '#373839', opacity: '0.5'}}>Kiểm tra tập trung</div>
                           </div>
                           <div style={{display: 'flex'}}>
                               <div style={{fontSize: '13px', fontWeight: '600', marginRight: '5px'}}>Thời lượng:</div>
                               <div style={{fontSize: '13px', fontWeight: '600', color: '#373839', opacity: '0.5'}}>45 Phút</div>
                           </div>
                           <div style={{display: 'flex'}}>
                               <div style={{fontSize: '13px', fontWeight: '600', marginRight: '14px'}}>Nội dung:</div>
                               <div style={{fontSize: '13px', fontWeight: '600', color: '#373839', opacity: '0.5'}}>Ôn tập chương 5</div>
                           </div>
                           <div style={{display: 'flex'}}>
                               <div style={{fontSize: '13px', fontWeight: '600', marginRight: '14px'}}>Hình thức:</div>
                               <div style={{fontSize: '13px', fontWeight: '600', color: '#373839', opacity: '0.5'}}>Tự luận</div>
                           </div>
                        </div>
                    </div>

                    {/* Khung chứa thong tin 2 */}
                    <div style={{marginBottom: '20px'}}>   
                        <div style={{display:'flex', fontSize: '15px', fontWeight: '600', color: '#FFB923'}}>
                            <GoPrimitiveDot style={{marginTop: '5px', marginRight: '5px'}}/>
                            Tiếng Anh
                        </div>
                        <div>
                           <div style={{display: 'flex'}}>
                               <div style={{fontSize: '13px', fontWeight: '600', marginRight: '10px'}}>Đối tượng:</div>
                               <div style={{fontSize: '13px', fontWeight: '600', color: '#373839', opacity: '0.5'}}>10C1, 10C2</div>
                           </div>
                           <div style={{display: 'flex'}}>
                               <div style={{fontSize: '13px', fontWeight: '600', marginRight: '5px'}}>Thời lượng:</div>
                               <div style={{fontSize: '13px', fontWeight: '600', color: '#373839', opacity: '0.5'}}>15 Phút</div>
                           </div>
                           <div style={{display: 'flex'}}>
                               <div style={{fontSize: '13px', fontWeight: '600', marginRight: '14px'}}>Nội dung:</div>
                               <div style={{fontSize: '13px', fontWeight: '600', color: '#373839', opacity: '0.5',width: '105px'}}>
                                   Academic Vocabulary
                                </div>
                           </div>
                           <div style={{display: 'flex'}}>
                               <div style={{fontSize: '13px', fontWeight: '600', marginRight: '14px'}}>Hình thức:</div>
                               <div style={{fontSize: '13px', fontWeight: '600', color: '#373839', opacity: '0.5'}}>Trắc nghiệm</div>
                           </div>
                        </div>
                    </div>
                </div>

                {/* Lời nhắn nhủ */}
                <div className='loiNhanNhuThi'>
                        Cố gắng ôn tập cho các bài kiểm tra sắp tới nhé!
                </div>
            </div>




            <div className="bottom-LichThiRight">
                <div style={{fontSize: '17px', fontWeight: '700', marginBottom: '10px'}}>
                    Lọc Lịch Thi
                </div>
                <div className='checkbox1' style={{marginBottom: '2px'}}>
                    <Checkbox onChange={LocLichThi} defaultChecked style={{fontSize: '15px', fontWeight: '500', color: '#373839', opacity: '0.7'}}>
                        Kiểm tra 15 phút
                    </Checkbox>
                </div>
                <div className='checkbox2' style={{marginBottom: '2px'}}>
                    <Checkbox onChange={LocLichThi} defaultChecked style={{fontSize: '15px', fontWeight: '500', color: '#373839', opacity: '0.7'}}>
                        Kiểm tra 45 phút
                    </Checkbox>
                </div>
                <div className='checkbox3' style={{marginBottom: '2px'}}>
                    <Checkbox onChange={LocLichThi} defaultChecked style={{fontSize: '15px', fontWeight: '500', color: '#373839', opacity: '0.7'}}>
                        Thi giữa học kì
                    </Checkbox>
                </div>
                <div className='checkbox4' style={{marginBottom: '2px'}}>
                    <Checkbox onChange={LocLichThi} defaultChecked style={{fontSize: '15px', fontWeight: '500', color: '#373839', opacity: '0.7'}}>
                        Thi cuối học kì
                    </Checkbox>
                </div>
            </div>

        </div>
    )
}