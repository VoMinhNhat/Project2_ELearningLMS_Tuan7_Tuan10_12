import '../../../../assets/Css/StudentCss/ThongTinLopHocCss/QuesAnsLopHoc.css';
import { Tabs } from 'antd';

//Import cho từng trang tabs
import { LeftAllCauHoi } from './QuesAnsLop/TatCaCauHoi/LeftAllCauHoi';
import { RightAllCauHoi } from './QuesAnsLop/TatCaCauHoi/RightAllCauHoi';
import { LeftGanDayNhat } from './QuesAnsLop/GanDayNhat/LeftGanDayNhat';
import { RightGanDayNhat } from './QuesAnsLop/GanDayNhat/RightGanDayNhat';
import { LeftDaTraLoi } from './QuesAnsLop/DaTraLoi/LeftDaTraLoi';
import { RightDaTraLoi } from './QuesAnsLop/DaTraLoi/RightDaTraLoi';
import { LeftTopics } from './QuesAnsLop/Topics/LeftTopics';
import { RightTopics } from './QuesAnsLop/Topics/RightTopics';



//tabs cho trang quesAnsLopHoc
const { TabPane } = Tabs;

function tabQuesAns(key:any) {
  console.log(key);
}

const QuesAns = () => (
  <Tabs defaultActiveKey="1" onChange={tabQuesAns} >

    <TabPane tab="Tất cả câu hỏi" key="1" >
       <LeftAllCauHoi/>
       <RightAllCauHoi/>
    </TabPane>

    <TabPane tab="Đã trả lời" key="2">
      <LeftDaTraLoi/>
      <RightDaTraLoi/>
    </TabPane>

    <TabPane tab="Gần đây nhất" key="3">
      <LeftGanDayNhat/>
      <RightGanDayNhat/>
    </TabPane>

    <TabPane tab="Topics" key="4">
      <LeftTopics/>
      <RightTopics/>
    </TabPane>

  </Tabs>
);


export const QuesAnsLopHoc =() =>{
    return(
        <div className='QuesAnsLopHoc'>
            <QuesAns/>     
        </div>
    )
}