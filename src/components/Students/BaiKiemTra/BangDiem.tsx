import '../../../assets/Css/StudentCss/BaiKiemTraCss/BangDiem.css';

import background from '../../../assets/image/background.png';
import studavatar from '../../../assets/image/studavatar.jpg';

import {AiOutlineRight} from 'react-icons/ai';
import { TableBangDiem } from './TableBangDiem/TableBangDiem';





export const BangDiem = () => {
    return (
        <div className="BangDiem" style={{ backgroundImage: `url(${background})` }}>

            <div className='titleBangDiem'>
                <div style={{ fontSize: '17px', fontWeight: '600', color: '#C9C4C0', marginRight: '10px' }}>
                    Bảng điểm
                </div>
                <AiOutlineRight style={{ fontSize: '20px', fontWeight: '700', color: '#FF7506', marginTop: '12px', marginRight: '10px' }} />
                <div style={{ fontSize: '40px', fontWeight: '700' }}>
                    10A1
                </div>
            </div>


            <div className='inforOfStud'>
                {/* Phần thông tin 1.1 */}
                <div style={{ backgroundImage: `url(${studavatar})`, backgroundSize: '100% 100%', height: '110px', width: '200px' }}/>

                <div style={{height: '110px', width: '75px', marginLeft: '50px'}}>
                    <div style={{height: '25px', lineHeight: '25px', fontWeight: '700', marginBottom: '3px'}}>
                        Họ và tên:
                    </div>
                    <div style={{height: '25px', lineHeight: '25px', fontWeight: '700', marginBottom: '3px'}}>
                        Giới tính:
                    </div>
                    <div style={{height: '25px', lineHeight: '25px', fontWeight: '700', marginBottom: '3px'}}>
                        Ngày sinh:
                    </div>
                    <div style={{height: '25px', lineHeight: '25px', fontWeight: '700', marginBottom: '3px'}}>
                        Email:
                    </div>
                </div>
                {/* Phần thông tin 1.2 */}
                <div style={{height: '110px', width: '200px', marginLeft: '10px'}}>
                    <div style={{height: '25px', lineHeight: '25px', fontWeight: '400', marginBottom: '3px'}}>
                        Trần Thị M
                    </div>
                    <div style={{height: '25px', lineHeight: '25px', fontWeight: '400', marginBottom: '3px'}}>
                        Nữ
                    </div>
                    <div style={{height: '25px', lineHeight: '25px', fontWeight: '400', marginBottom: '3px'}}>
                        10/12/2002
                    </div>
                    <div style={{height: '25px', lineHeight: '25px', fontWeight: '400', marginBottom: '3px'}}>
                        tran.tm@gmail.com
                    </div>
                </div>

                <div style={{height: '110px', width: '1px', background: '#C9C4C0', marginLeft: '2px'}} />

                {/* Phần thông tin 2.1 */}
                <div style={{height: '110px', width: '120px', marginLeft: '40px'}}>
                    <div style={{height: '25px', lineHeight: '25px', fontWeight: '700', marginBottom: '3px'}}>
                        Lớp:
                    </div>
                    <div style={{height: '25px', lineHeight: '25px', fontWeight: '700', marginBottom: '3px'}}>
                        GVCN:
                    </div>
                    <div style={{height: '25px', lineHeight: '25px', fontWeight: '700', marginBottom: '3px'}}>
                        Niên khóa:
                    </div>
                </div>
                {/* Phần thông tin 2.2 */}
                <div style={{height: '110px', width: '120px', marginLeft: '10px'}}>
                    <div style={{height: '25px', lineHeight: '25px', fontWeight: '400', marginBottom: '3px'}}>
                        10A1
                    </div>
                    <div style={{height: '25px', lineHeight: '25px', fontWeight: '400', marginBottom: '3px'}}>
                        Cô Nguyễn Thị A
                    </div>
                    <div style={{height: '25px', lineHeight: '25px', fontWeight: '400', marginBottom: '3px'}}>
                        2019-2020
                    </div>
                </div>
            </div>


            <TableBangDiem/>

        </div>
    )
}