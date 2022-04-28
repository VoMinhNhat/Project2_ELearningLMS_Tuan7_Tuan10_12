import { Components } from 'antd/lib/date-picker/generatePicker'
import { Routes, Route, useLocation} from 'react-router-dom'

//Trang LogOut và Menu
import { Logout } from '../LogIn/Logout'
import { Menu } from '../Menu/Menu'

//Các route
import { BangDiem } from './BaiKiemTra/BangDiem'
import { DanhSachBaiKiemTra } from './BaiKiemTra/DanhSachBaiKiemTra'
import { TrangBaiKiemTra } from './BaiKiemTra/SetPathTest'
import { KetQuaKiemTra } from './LamBaiKiemTra/KetQuaKiemTra'
import { KiemTraTracNghiem } from './LamBaiKiemTra/KiemTraTracNghiem'
import { KiemTraTuLuan } from './LamBaiKiemTra/KiemTraTuLuan'
import { LichThi } from './LichThi/LichThi'
import { LogInThamGia } from './LogInThamGia/LogInThamGia'
import { ThamGiaHocVien } from './LogInThamGia/ThamGiaHocVien'
import { TrangXacNhanOTP } from './LogInThamGia/TrangXacNhanOTP'
import { DanhSachLop } from './LopHocCuaToi/DanhSachLopHoc/DanhSachLopHoc'
import { TrangChoLopHoc } from './LopHocCuaToi/SetPathLopHoc'
import { ThamGiaLopHoc } from './LopHocCuaToi/ThamGiaLopHoc/ThamGiaLopHoc'
import { ThongBao } from './ThongBao/ThongBao'
import { ThongTinLopHoc } from './ThongTinLopHoc/ThongTinLopHoc'
import { TongQuat } from './TongQuan/TongQuat'
import { TroGiup } from './TroGiup/TroGiup'


export const Student = () =>{
    return(

        <Routes>
                {/* Các trang chính */}
                <Route path='/*' element={<TongQuat/>}/>
                <Route path='/Class' element={<TrangChoLopHoc/>}>
                    <Route path='/Class/DanhSachLop' element={<DanhSachLop/>}/>
                    <Route path='/Class/ThongTinLop' element={<ThongTinLopHoc/>}/>
                    <Route path='/Class/ThamGiaLopHoc' element={<ThamGiaLopHoc/>}/>
                </Route>
                <Route path='/Test' element={<TrangBaiKiemTra/>}>
                    <Route path='/Test/DanhSachBaiKiemTra' element={<DanhSachBaiKiemTra/>}/>
                    <Route path='/Test/BangDiem' element={<BangDiem/>}/>
                </Route>
                <Route path='/LichThi' element={<LichThi/>}/>
                <Route path='/ThongBao' element={<ThongBao/>}/>
                <Route path='/TroGiup' element={<TroGiup/>}/>

                {/* Các trang phụ */}
                <Route path='/LoginThamGia' element={<LogInThamGia/>}/>
                <Route path='/ThamGiaHocVien' element={<ThamGiaHocVien/>}/>
                <Route path='/TrangXacNhanOTP' element={<TrangXacNhanOTP/>}/>
                <Route path='/KiemTraTracNghiem' element={<KiemTraTracNghiem/>}/>
                <Route path='/KiemTraTuLuan' element={<KiemTraTuLuan/>}/>
                <Route path='/KetQuaKiemTra' element={<KetQuaKiemTra/>}/>

        </Routes>
    )
}