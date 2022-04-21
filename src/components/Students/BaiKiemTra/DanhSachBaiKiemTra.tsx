import { Tabs } from 'antd';

import '../../../assets/Css/StudentCss/BaiKiemTraCss/DanhSachBaiKiemTra.css';

import {AiOutlineRight} from 'react-icons/ai';
import { TatCaBaiKiemTra } from './TabsDanhSachBaiTest/TatCaBaiKiemTra';
import { BaiKiemTraSapToi } from './TabsDanhSachBaiTest/BaiKiemTraSapToi';
import { BaiKiemChuaXong } from './TabsDanhSachBaiTest/BaiKiemTraChuaXong';

//Tabs
const { TabPane } = Tabs;

function TabsListBaiThi(key:any) {
  console.log(key);
}

const DanhSachKiemTra = () => (
    <Tabs defaultActiveKey="1" onChange={TabsListBaiThi}>
      <TabPane tab="Tất cả bài kiểm tra" key="1">
        <TatCaBaiKiemTra/>
      </TabPane>
      <TabPane tab="Bài kiểm tra sắp tới" key="2">
        <BaiKiemTraSapToi/>
      </TabPane>
      <TabPane tab="Bài kiểm tra chưa hoàn thành" key="3" style={{wordBreak: 'break-word'}}>
        <BaiKiemChuaXong/>
      </TabPane>
    </Tabs>
  );

export const DanhSachBaiKiemTra = () =>{
    return(
        <div className="DanhSachBaiKiemTra">

            <div className='titleDanhSachBaiKiemTra'>
                <div style={{fontSize: '18px', fontWeight: '700', color: '#C9C4C0', marginRight: '10px'}}>
                    Bài kiểm tra
                </div>
                <AiOutlineRight style={{fontSize: '18px', fontWeight: '700', color: '#FF7506',marginTop: '14px', marginRight: '10px'}}/>
                <div style={{fontSize: '30px', fontWeight: '700'}}>
                    Danh sách bài kiểm tra
                </div>
            </div>

            <DanhSachKiemTra/>
        </div>
    )
}