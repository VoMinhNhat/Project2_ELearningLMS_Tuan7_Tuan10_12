import {AiOutlineEye, AiOutlineLineChart, AiOutlineSetting} from 'react-icons/ai';
import {BsPeople,BsBriefcase, BsBook} from 'react-icons/bs';

export const SuppLeaderMenu = () =>{
    return(
        <div className="SuppMenuLeader">
            <ul className="SuppMenuLeaderUl">
                
                {/* tổng quan */}
                <li className='SuppMenuLeaderLi'>
                    <div style={{float: 'left', display: 'flex'}}>
                        <AiOutlineEye className='iconSuppLeaderMenu'/>
                        <div>Tổng quan</div>
                    </div>
                    <div className='dummyLine'/>
                </li>

                {/* Khai báo dữ liệu */}
                <li className='SuppMenuLeaderLi'>
                    <div style={{float: 'left', display: 'flex'}}>
                        <AiOutlineLineChart className='iconSuppLeaderMenu'/>
                        <div>Khai báo dữ liệu</div>
                    </div>
                    <div className='dummyLine'/>
                </li>

                {/* Hồ sơ học viên */}
                <li className='SuppMenuLeaderLi'>
                    <div style={{float: 'left', display: 'flex'}}>
                        <BsPeople className='iconSuppLeaderMenu'/>
                        <div>Hồ sơ học viên</div>
                    </div>
                    <div className='dummyLine'/>
                </li>
                    {/* Danh mục cho các Hồ sơ học viên */}
                    <li className='smallMenuLeaderLi'>
                        Tất cả hồ sơ
                    </li>
                    <li className='smallMenuLeaderLi'>
                        Tiếp nhận chuyển trường
                    </li>
                    <li className='smallMenuLeaderLi'>
                        Bảo lưu
                    </li>

                {/* Hồ sơ giảng viên */}
                <li className='SuppMenuLeaderLi'>
                    <div style={{float: 'left', display: 'flex'}}>
                        <BsBriefcase className='iconSuppLeaderMenu'/>
                        <div>Hồ sơ giảng viên</div>
                    </div>
                    <div className='dummyLine'/>
                </li>
                    {/* Danh mục cho các Hồ sơ học viên */}
                    <li className='smallMenuLeaderLi'>
                        Tất cả hồ sơ
                    </li>
                    <li className='smallMenuLeaderLi'>
                        Phân công giảng dạy
                    </li>

                {/* Thi cử */}
                <li className='SuppMenuLeaderLi'>
                    <div style={{float: 'left', display: 'flex'}}>
                        <BsBook className='iconSuppLeaderMenu'/>
                        <div>Thi cử</div>
                    </div>
                    <div className='dummyLine'/>
                </li>

                {/* Cài đặt hệ thống*/}
                <li className='SuppMenuLeaderLi'>
                    <div style={{float: 'left', display: 'flex'}}>
                        <AiOutlineSetting className='iconSuppLeaderMenu'/>
                        <div>Cài đặt hệ thống</div>
                    </div>
                    <div className='dummyLine'/>
                </li>

            </ul>
        </div>
    )
}