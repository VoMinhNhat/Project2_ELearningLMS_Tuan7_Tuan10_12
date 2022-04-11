import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';

//import các trang ui
import { Dangnhap } from './components/LogIn/Dangnhap';
import { Menu } from './components/Menu/Menu';
import { Logout } from './components/LogIn/Logout';
import { TongQuat } from './components/Students/TongQuan/TongQuat';
import { DanhSachLop } from './components/Students/LopHocCuaToi/DanhSachLopHoc/DanhSachLopHoc';
import { ThongTinLopHoc } from './components/Students/ThongTinLopHoc/ThongTinLopHoc';

function App() {
  return (
    <div style={{display: 'flex'}}>

      <Dangnhap/>

      <Menu/>

      <Logout/>

      {/* <TongQuat/> */}

      {/* <DanhSachLop/> */}

      <ThongTinLopHoc/>

    </div>
  );
}

export default App;
