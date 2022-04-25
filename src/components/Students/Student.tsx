import { Routes, Route} from 'react-router-dom'

//Các route
import { BangDiem } from './BaiKiemTra/BangDiem'
import { DanhSachBaiKiemTra } from './BaiKiemTra/DanhSachBaiKiemTra'
import { KetQuaKiemTra } from './LamBaiKiemTra/KetQuaKiemTra'
import { KiemTraTracNghiem } from './LamBaiKiemTra/KiemTraTracNghiem'
import { KiemTraTuLuan } from './LamBaiKiemTra/KiemTraTuLuan'
import { LichThi } from './LichThi/LichThi'
import { LogInThamGia } from './LogInThamGia/LogInThamGia'
import { ThamGiaHocVien } from './LogInThamGia/ThamGiaHocVien'
import { TrangXacNhanOTP } from './LogInThamGia/TrangXacNhanOTP'
import { DanhSachLop } from './LopHocCuaToi/DanhSachLopHoc/DanhSachLopHoc'
import { ThamGiaLopHoc } from './LopHocCuaToi/ThamGiaLopHoc/ThamGiaLopHoc'
import { ThongBao } from './ThongBao/ThongBao'
import { ThongTinLopHoc } from './ThongTinLopHoc/ThongTinLopHoc'
import { TongQuat } from './TongQuan/TongQuat'
import { TroGiup } from './TroGiup/TroGiup'


export const Student = () =>{
    return(
        <Routes>

            {/* Các trang chính */}
            <Route path='/' element={<TongQuat/>}/>
            <Route path='/DanhSachLop' element={<DanhSachLop/>}/>
            <Route path='/ThongTinLop' element={<ThongTinLopHoc/>}/>
            <Route path='/ThamGiaLopHoc' element={<ThamGiaLopHoc/>}/>
            <Route path='/DanhSachBaiKiemTra' element={<DanhSachBaiKiemTra/>}/>
            <Route path='/BangDiem' element={<BangDiem/>}/>
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