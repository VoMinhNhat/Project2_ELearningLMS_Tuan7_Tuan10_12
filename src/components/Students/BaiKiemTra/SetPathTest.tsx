import { useLocation } from 'react-router-dom'
import { BangDiem } from './BangDiem';
import { DanhSachBaiKiemTra } from './DanhSachBaiKiemTra';

export const TrangBaiKiemTra = () =>{
    const { pathname } = useLocation()

    const components = ['/Test/DanhSachBaiKiemTra', '/Test/BangDiem'];

    const component = components.findIndex((item) => item === pathname);

    const ProfileKiemTra = () => {
        switch (component) {
          case 0:
            return <DanhSachBaiKiemTra />
          case 1:
            return <BangDiem />
    
          default:
            return <DanhSachBaiKiemTra />
        }
    
      };


    return(
    <>
        <ProfileKiemTra/>
    </>
    )
}