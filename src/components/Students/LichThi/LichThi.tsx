import '../../../assets/Css/StudentCss/LichThiCss/LichThi.css';
import '../../../assets/Css/StudentCss/LichThiCss/LichThiLeft.css';
import '../../../assets/Css/StudentCss/LichThiCss/LichThiRight.css';

import background from '../../../assets/image/background.png';

import { LichThiLeft } from './CacChiTietLichThi/LichThiLeft';
import { LichThiRight } from './CacChiTietLichThi/LichThiRight';

export const LichThi = () =>{
    return(
        <div className='LichThi' style={{backgroundImage: `url(${background})`}}>
            <div className='top-LichThi'>
                Lịch thi
            </div>
            <LichThiLeft/>
            <LichThiRight/>
        </div>
    )
}