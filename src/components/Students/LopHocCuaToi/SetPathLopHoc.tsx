import { useLocation } from 'react-router-dom';

import { DanhSachLop as LopDanhSach } from './DanhSachLopHoc/DanhSachLopHoc';
import {ThongTinLopHoc} from '../ThongTinLopHoc/ThongTinLopHoc';
import { ThamGiaLopHoc } from './ThamGiaLopHoc/ThamGiaLopHoc';

export const TrangChoLopHoc = () =>{

    const { pathname } = useLocation();

    const classComponents = ['/Class/DanhSachLop', '/Class/ThongTinLop', '/Class/ThamGiaLopHoc'];

    const classComponent = classComponents.findIndex((items) => items === pathname);

    const ProfileLopHoc = () =>{
        switch (classComponent) {
            case 0: 
                return <LopDanhSach/>;
            case 1: 
                return <ThongTinLopHoc/>;
            case 2:
                return <ThamGiaLopHoc/>;
            default:
                return <LopDanhSach/>;

        }
    }

    return(
       <>
      
       
       <ProfileLopHoc />
       </>
    )
}