import {BsPaperclip} from 'react-icons/bs';

export const InforThiSinhThi = () =>{
    return(
        <div className='infor-ThiSinh-KT'>
            
            <div style={{display: 'flex', marginRight: '50px', marginTop: '5px'}}>
                <div style={{fontSize: '16px', fontWeight: '700', marginRight: '30px'}}>
                    <div style={{marginBottom: '10px'}}>Môn học:</div>
                    <div>Lớp:</div>
                </div>
                <div style={{fontSize: '15px', fontWeight: '500', color:'#373839'}}>
                    <div style={{marginBottom: '10px'}}>
                        Lịch sử
                    </div>
                    <div>12A1</div>
                </div>
            </div>

            <div style={{height: '100%', width: '1px', background: '#C9C4C0', marginRight: '50px'}}/>

            <div style={{display: 'flex', marginRight: '50px', marginTop: '5px'}}>
                <div style={{fontSize: '16px', fontWeight: '700', marginRight: '30px'}}>
                    <div style={{marginBottom: '10px'}}>Ngày kiểm tra:</div>
                    <div>Thời lượng</div>
                </div>
                <div style={{fontSize: '15px', fontWeight: '500', color:'#373839'}}>
                    <div style={{marginBottom: '10px'}}>
                        Thứ 5-ngày 10 tháng 8, 2020
                    </div>
                    <div>45 phút</div>
                </div>
            </div>

            <div style={{height: '100%', width: '1px', background: '#C9C4C0', marginRight: '50px'}}/>

            <div style={{display: 'flex', marginRight: '50px', marginTop: '5px'}}>
                <div style={{fontSize: '16px', fontWeight: '700', marginRight: '30px'}}>
                    <div style={{marginBottom: '10px'}}>Đề bài:</div>
                    <div>Tệp đính kèm:</div>
                </div>
                <div style={{fontSize: '15px', fontWeight: '500', color:'#373839'}}>
                    <div style={{marginBottom: '10px'}}>
                        Đề A
                    </div>
                    <div style={{background: '#EFEFEF', borderRadius: '4px',
                                 height: '25px', width: '200px', display: 'flex'}}>
                        <div>
                            <BsPaperclip style={{transform: 'rotate(10deg)',color:'#FFA75E', marginTop: '5px', marginLeft: '5px'}}/>
                        </div>
                        <div style={{height: '70%', width: '1px', background: '#C9C4C0', marginLeft: '5px', marginTop: '4px'}}/>
                        <div style={{fontWeight: '500', fontSize: '13px', marginLeft: '5px', marginTop: '2px'}}>
                            DSTT_KT45P_12A1.doc
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}