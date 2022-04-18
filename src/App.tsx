import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';

//import các trang ui
import { Dangnhap } from './components/LogIn/Dangnhap';
import { Menu } from './components/Menu/Menu';
import { Logout } from './components/LogIn/Logout';

//import các trang web của Student
import { TongQuat } from './components/Students/TongQuan/TongQuat';
import { DanhSachLop } from './components/Students/LopHocCuaToi/DanhSachLopHoc/DanhSachLopHoc';
import { ThongTinLopHoc } from './components/Students/ThongTinLopHoc/ThongTinLopHoc';
import { ThamGiaLopHoc } from './components/Students/LopHocCuaToi/ThamGiaLopHoc/ThamGiaLopHoc';
import { LogInThamGia } from './components/Students/LogInThamGia/LogInThamGia';
import { ThamGiaHocVien } from './components/Students/LogInThamGia/ThamGiaHocVien';
import { TrangXacNhanOTP } from './components/Students/LogInThamGia/TrangXacNhanOTP';


function App() {
  return (
    <div style={{display: 'flex'}}>

      <Dangnhap/>

      <Menu/>

      <Logout/>

      {/* <TongQuat/> */}

      {/* <DanhSachLop/> */}

      {/* <ThongTinLopHoc/> */}

      {/* <ThamGiaLopHoc/> */}

      {/* <LogInThamGia/> */}

      {/* <ThamGiaHocVien/> */}

      <TrangXacNhanOTP/>
      
    </div>
  );
}

export default App;
