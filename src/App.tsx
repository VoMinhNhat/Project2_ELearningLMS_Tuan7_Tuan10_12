import React from 'react';
import { Counter } from './features/counter/Counter';
import 'antd/dist/antd.css';
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
import { DanhSachBaiKiemTra } from './components/Students/BaiKiemTra/DanhSachBaiKiemTra';
import { BangDiem } from './components/Students/BaiKiemTra/BangDiem';
import { LichThi } from './components/Students/LichThi/LichThi';
import { ThongBao } from './components/Students/ThongBao/ThongBao';
import { TroGiup } from './components/Students/TroGiup/TroGiup';
import { KiemTraTracNghiem } from './components/Students/LamBaiKiemTra/KiemTraTracNghiem';
import { KiemTraTuLuan } from './components/Students/LamBaiKiemTra/KiemTraTuLuan';
import { KetQuaKiemTra } from './components/Students/LamBaiKiemTra/KetQuaKiemTra';
import { Student } from './components/Students/Student';


function App() {
  return (
    <div style={{display: 'flex'}}>

      <Dangnhap/>

      <Menu/>

      <Logout/>
      
      <Student/>

    </div>
  );
}

export default App;
