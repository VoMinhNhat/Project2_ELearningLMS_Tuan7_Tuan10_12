import backGround from '../../../assets/image/background.png';


import '../../../assets/Css/LeaderShipCss/TongQuanCss/TongQuanLeader.css';

import { Select } from 'antd';
import { HeaderTongQuan } from './HeaderTongQuan';
import { BodyTongQuan } from './BodyTongQuan';
import { FooterTongQuan } from './FooterTongQuan';


//Tong quan select
const { Option } = Select;

function nienKhoaLeaderChange(value: any) {
    console.log(`selected ${value}`);
}



export const TongQuanLeader = () => {
    return (
        <div style={{
            backgroundImage: `url(${backGround})`, backgroundSize: '100% 100%',
            height: '800px', width: '1429px', position: 'absolute', top: '50px', left: '90px', paddingLeft: '70px'
        }}>


            <HeaderTongQuan/> 

            <BodyTongQuan/>

            <FooterTongQuan/>

        </div>
    )
}