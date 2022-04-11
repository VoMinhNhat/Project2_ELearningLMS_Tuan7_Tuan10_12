import '../../../../assets/Css/StudentCss/ThongTinLopHocCss/InForLopHoc.css';
import { BodyInFor } from './InForLop/BodyInFor';
import { FooterInFor } from './InForLop/FooterInFor';
import { HeadInFor } from './InForLop/HeadInFor';

export const InForLopHoc =() =>{
    return(
        <div className='InForLopHoc'>
            <HeadInFor/>
            <BodyInFor/> 
            <FooterInFor/>
            <button className='btn-ThamGiaLopHoc'>Tham gia lớp học</button>
        </div>
    )
}