import '../../../assets/Css/StudentCss/LamBaiKiemTraCss/LamBaiKiemTra.css';
import '../../../assets/Css/StudentCss/LamBaiKiemTraCss/KiemTraTuLuan.css';

import { AiOutlineRight } from 'react-icons/ai';
import {BsFillCheckCircleFill} from 'react-icons/bs';

import { InforThiSinhThi } from './InforThiSinh';

import background from '../../../assets/image/background.png';
import docIcons from '../../../assets/image/icons/doc.png';
import jpgIcons from '../../../assets/image/icons/jpg.png';

import {Editor} from 'react-draft-wysiwyg';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

export const KiemTraTuLuan = () => {
    return (
        <div className="LamBaiKiemTra" style={{ backgroundImage: `url(${background})` }}>
            {/* Title Kiểm tra */}
            <div className='title-LamBaiKT'>
                <div className='title-1-LamBaiKT'>
                    Bài kiểm tra
                </div>
                <AiOutlineRight className='title-icon-LamBaiKT' />
                <div className='title-1-LamBaiKT'>
                    Làm bài
                </div>
                <AiOutlineRight className='title-icon-LamBaiKT' />
                <div style={{ fontSize: '50px', fontWeight: '700', marginTop: '-25px' }}>
                    12A1
                </div>
            </div>

            {/* Infor Thí sinh thi */}
            <InforThiSinhThi />

            <div className='nopbai-LamBaiKT'>
                <div style={{ fontSize: '15px', fontWeight: '600', float: 'left', width: '250px' }}>
                    Phần trả lời của học sinh
                </div>
                <button className='btn-NopBai-LamBaiKT'>
                    Lưu bài
                </button>
            </div>

            {/* Vị trí làm bài */}
            <div className='TuLuan-Position'>
                <div className='cauHoi-Position'>
                    
                    <div style={{fontSize: '15px', fontWeight: '700', marginBottom: '20px'}}>
                        Tệp đính kèm của học sinh:
                    </div>
                    <div>
                        <div className='file-BaiThi'>
                            <div style={{backgroundImage: `url(${docIcons})`, backgroundSize: '100% 100%', width: '50px', height: '50px'}}/>
                            <div>
                                <div style={{fontSize: '14px', fontWeight: '500'}}>
                                    DSTT_KT45P_10A1_Nguyen A.docx
                                </div>
                                <div style={{fontSize: '14px', fontWeight: '400', color: '#C9C4C0'}}>20MB</div>
                            </div>
                            <BsFillCheckCircleFill style={{fontSize: '20px', fontWeight: '400', color: '#49C510', marginTop: '6%', marginLeft: '5%'}}/>
                        </div>

                        <div className='file-BaiThi'>
                            <div style={{backgroundImage: `url(${jpgIcons})`, backgroundSize: '100% 100%', width: '50px', height: '50px'}}/>
                            <div>
                                <div style={{fontSize: '14px', fontWeight: '500'}}>
                                    DSTT_KT45P_10A1_Nguyen A.docx
                                </div>
                                <div style={{fontSize: '14px', fontWeight: '400', color: '#C9C4C0'}}>20MB</div>
                            </div>
                            <BsFillCheckCircleFill style={{fontSize: '20px', fontWeight: '400', color: '#49C510', marginTop: '6%', marginLeft: '5%'}}/>
                        </div> 
                    </div>

                    <div>
                        <div style={{fontSize: '15px', fontWeight: '700', marginBottom: '10px'}}>
                            *Qui định nộp bài:
                        </div>
                        <div style={{ width: '310px', height: '200px',}}>
                        - Mỗi học viên chỉ được gửi tối đa 1 file word (.doc, .docx) và 1 file ảnh (.png,.jpg,.jpeg). Dung lượng tối đa là 50MB<br/>Khi tải lên 1 File tương ứng, File cũ sẽ bị xóa.
                        <br/><br/>
                        - Học viên có thể lưu bài nhiều lần. Khi hết thời lượng làm bài, hệ thống sẽ tự động đóng bài kiểm tra. Kết quả được tính dựa theo lần lưu sau cùng.
                        </div>
                    </div>

                    <button style={{background: '#FFD8B8', border: '1px solid #FF7506', fontSize: '15px', fontWeight: '500',
                                    width: '100px', height: '35px', borderRadius: '5px', marginLeft: '25%', marginTop: '60px'}}>
                        Chọn file
                    </button>
                </div>



                <div className='cauTraloi-Position'>
                    <Editor
                        wrapperClassName="wrapper-class"
                        toolbar={{
                            options: ['inline', 'fontSize', 'list', 'textAlign'],
                          }}
                    />
                </div>
            </div>

        </div>
    )
}