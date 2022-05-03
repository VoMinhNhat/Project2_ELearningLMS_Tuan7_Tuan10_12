import LeaderItem1 from '../../../assets/image/leaderitems/itemLeader1.png';
import LeaderItem2 from '../../../assets/image/leaderitems/itemLeader2.png';
import LeaderItem3 from '../../../assets/image/leaderitems/itemLeader3.png';

import { Select } from 'antd';

//Tong quan select
const { Option } = Select;

function nienKhoaLeaderChange(value: any) {
    console.log(`selected ${value}`);
}

export const HeaderTongQuan = () =>{
    return (
        <>
         {/* title */}
         <div style={{ fontSize: '40px', fontWeight: '700' }}>
                Tổng quan
            </div>

            {/* các khung thông tin tổng */}
            <div className='TongHop-Leader'>
                <div style={{ fontSize: '14px', fontWeight: '500' }} className='TongHop-NienKhoa-Leader'>
                    Niên khóa
                    <Select defaultValue="2020-2021" style={{ width: 120, marginLeft: '10px' }} onChange={nienKhoaLeaderChange}>
                        <Option value="2020-2021">2020-2021</Option>
                        <Option value="2019-2020">2019-2020</Option>
                        <Option value="2018-2019">2018-2019</Option>
                        <Option value="2017-2018">2017-2018</Option>
                    </Select>
                </div>

                <div className='leaderItem' style={{ backgroundImage: `url(${LeaderItem1})` }}>
                    <div className='soluong-leaderItem'>
                        5000
                    </div>
                    <div className='what-SoLuong-leaderItem'>
                        Học viên
                    </div>
                </div>

                <div className='leaderItem' style={{ backgroundImage: `url(${LeaderItem2})` }}>
                    <div className='soluong-leaderItem'>
                        1500
                    </div>
                    <div className='what-SoLuong-leaderItem'>
                        Giảng viên
                    </div>
                </div>

                <div className='leaderItem' style={{ backgroundImage: `url(${LeaderItem3})` }}>
                    <div className='soluong-leaderItem'>
                        55
                    </div>
                    <div className='what-SoLuong-leaderItem'>
                        Lớp học
                    </div>
                </div>
            </div>
        </>
    )
}