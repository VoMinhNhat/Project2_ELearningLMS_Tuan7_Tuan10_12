import React,{useState} from 'react';

import '../../../assets/Css/StudentCss/ThongBaoCss/ThongBaoChinh.css';

import background from '../../../assets/image/background.png';
import { TableNofiSys } from './TabThongBao/TableNofiSys';
import { TableNofiUser } from './TabThongBao/TableNofiUser';


export const ThongBao = () =>{

    //Cho Tabs
    const [nofiUser, setNofiUser] = useState('tab-ThongBao-User');
    const [nofiSys, setNofiSys] = useState('tab-ThongBao-Sys-Off');
    const [tblNofiUser, setTblNofiUser] = useState('tables-Nofi-User');
    const [tblNofiSys, setTblNofiSys] = useState('tables-Nofi-Sys-Off');

    const tabsNofiUser = () =>{
      setNofiUser('tab-ThongBao-User');
      setNofiSys('tab-ThongBao-Sys-Off');
      setTblNofiUser('tables-Nofi-User');
      setTblNofiSys('tables-Nofi-Sys-Off');
    }

    const tabsNofiSys = () =>{
      setNofiUser('tab-ThongBao-User-Off');
      setNofiSys('tab-ThongBao-Sys');
      setTblNofiUser('tables-Nofi-User-Off');
      setTblNofiSys('tables-Nofi-Sys');
    }


    return(
        <div className='thongBao' style={{backgroundImage: `url(${background})`,}}>
            {/* title thông báo */}
            <div className='title-ThongBao'>
                Thông báo
            </div>

            {/* Tabs Thông báo  */}
            <div className='tabsThongBao'>
                <div className={nofiUser} onClick={tabsNofiUser}> 
                    Thông báo người dùng
                </div>
                <div className={nofiSys} onClick={tabsNofiSys}>
                    Thông báo hệ thống
                </div>
            </div>

            {/* Tables */}
            {/* Table cho user*/}
            <div className={tblNofiUser}>
              <TableNofiUser/>
            </div>

            {/* Table cho Systems*/}
            <div className={tblNofiSys}>
                <TableNofiSys/>
            </div>


        </div>
    )
}