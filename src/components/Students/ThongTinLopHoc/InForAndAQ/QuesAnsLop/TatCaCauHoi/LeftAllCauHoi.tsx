import studentAvatar from '../../../../../../assets/image/studavatar.jpg';
import {BiSearch} from 'react-icons/bi';
import {BsEye} from 'react-icons/bs';
import {GoPrimitiveDot} from 'react-icons/go';

export const LeftAllCauHoi = () =>{
    return(
        <div className="lefForEveryThing">

            <BiSearch style={{position: 'absolute', top: '132px', left: '40px'}}/>
            <input className="findTheoIdAndTen"/>

            <div className='ListTenvaCauhoi'>

                {/* Danh sách tên các học viên hỏi bài */}
                <div className='StudentAsk'>
                    <GoPrimitiveDot style={{color: '#FF7506', fontSize: '15px', width: '10px', marginTop: '30px', marginRight: '10px'}}/>
                    <div className='studentAvatar' style={{backgroundImage: `url(${studentAvatar})`}}/>
                    <div className='studentName'>
                        <div className='name'>Nguyễn Ngọc ngạn</div>
                        <div className='ask'>Alo alo 1234 nghe hong???</div>
                    </div>
                    <div className='viewAndTime'>
                        <div className='view'><BsEye/> 13</div>
                        <div className='time'>13:00</div>
                    </div>
                </div>
                
                {/* Danh sách hỏi bài cũ */}
                <div className='StudentAsk'>
                    <div className='studentAvatar' style={{backgroundImage: `url(${studentAvatar})`}}/>
                    <div className='studentName'>
                        <div className='name2'>Nguyễn Ngọc ngạn</div>
                        <div className='ask2'>Alo alo 1234 nghe hong???</div>
                    </div>
                    <div className='viewAndTime2'>
                        <div className='view'><BsEye/> 13</div>
                        <div className='time'>13:00</div>
                    </div>
                </div>
                
                <div className='StudentAsk'>
                    <div className='studentAvatar' style={{backgroundImage: `url(${studentAvatar})`}}/>
                    <div className='studentName'>
                        <div className='name2'>Nguyễn Ngọc ngạn</div>
                        <div className='ask2'>Alo alo 1234 nghe hong???</div>
                    </div>
                    <div className='viewAndTime2'>
                        <div className='view'><BsEye/> 13</div>
                        <div className='time'>13:00</div>
                    </div>
                </div>


            </div>

        </div>  
    )
}