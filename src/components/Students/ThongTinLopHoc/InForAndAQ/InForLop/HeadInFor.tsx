import avatar from '../../../../../assets/image/avatar.jpg';
import '../../../../../assets/Css/StudentCss/ThongTinLopHocCss/InForLopHoc.css';

export const HeadInFor =()=>{
    return(
        <div className="HeadInFor">

            <div className="avatar-HeadInFor" style={{backgroundImage: `url(${avatar})`}} />

            <div className='straingLine'/>
            
            <div className='TeacherAndSubject'>
                <div style={{display: 'flex'}}>
                    <h4>Giáo viên:</h4>&nbsp;&nbsp;Nguyễn Võ Văn A
                </div>
                <div style={{display: 'flex'}}>
                    <h4>Bộ môn:</h4>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lịch sử
                </div>
            </div>  

            <div className='straingLine'/>

            <div className='MoTaAndClass'>
            <div style={{display: 'flex'}}>
                    <h4>Mô tả:</h4>&nbsp;&nbsp;Nguyễn Võ Văn Adadsdahdgadajgdajgdhagdgadghajgdjhasgdhasgdhgadgagagasdgajdgashgdashgdjhasgdjhagdgajgd
                </div>
                <div style={{display: 'flex'}}>
                    <h4>Lớp:</h4>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;10A1
                </div>
            </div>

        </div>
    )
}