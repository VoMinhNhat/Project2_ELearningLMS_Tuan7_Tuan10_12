import { Checkbox, Row, Col } from 'antd';
import {AiOutlineEyeInvisible} from 'react-icons/ai';


//Check box
function caiDat(e:any) {
    console.log(`checked = ${e.target.checked}`);
  }

export const FooterInFor = () =>{
    return(
        <div className="FooterInFor">

            <div className="malop-Footerinfor">
                <b>Mã lớp:</b>
                <div style={{marginLeft: '120px'}}>
                    78545126325
                </div>
            </div>

            <div className="baomat-Footerinfor">
                <b>Bảo mật:</b>
                <i className='iconbaomat'><AiOutlineEyeInvisible/></i>
                <input className="inputBaoMat-Footer" type={'password'}/>
            </div>

            <div className="linkchise-Footerinfor">
                <b>Link chia sẻ:</b>
                <input className="inputLinkShare-Footer"/>
                <button className='btn-LinkShare'>Copy link</button>
            </div>

            <div className="caidatkhac-Footerinfor">
                <b>Cài đặt khác:</b>
                <div style={{marginLeft: '88px'}}>
                    <div>
                        <Checkbox onChange={caiDat}>
                            Tự động kích hoạt buổi học khi đến thời gian bắt đầu
                        </Checkbox>
                    </div>
                    <div>
                        <Checkbox onChange={caiDat}>
                            Bật tính năng lưu lại buổi học
                        </Checkbox>
                    </div>
                </div>
            </div>

        </div>
    )
}