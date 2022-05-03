import React, {useState} from 'react';
import { Counter } from './features/counter/Counter';
import 'antd/dist/antd.css';
import './App.css';

//import các trang ui
import { Dangnhap } from './components/LogIn/Dangnhap';
import { Logout } from './components/LogIn/Logout';

//import các trang web của Student
import { Menu } from './components/Menu/Menu';
import { Student } from './components/Students/Student';
import { OutPutStudent } from './components/Students/OutPutStudent';

//import các trang leader ship
import { LeaderMenu } from './components/Menu/LeaderMenu';
import { TongQuanLeader } from './components/Leadership/TongQuanLeader/TongQuan';
import { KhaiBaoDuLieu } from './components/Leadership/KhaiBaoDuLieu/KhaiBaoDuLieu';


function App() {

  return (
    <div style={{display: 'flex'}}>

      <Dangnhap/>

      <LeaderMenu/>

      <Logout/>

      {/* <OutPutStudent/> */}

      {/* <TongQuanLeader/> */}

      <KhaiBaoDuLieu/>
      

    </div>
  );
}

export default App;
