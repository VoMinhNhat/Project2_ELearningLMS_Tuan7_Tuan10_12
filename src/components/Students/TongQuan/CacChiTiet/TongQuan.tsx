import React from "react";
import '../../../../assets/Css/StudentCss/TongQuatCss/PartTqCss/Tongquan.css';

//Hình cho các items
import tongquan1 from '../../../../assets/image/items/tongquat1.png';
import tongquan2 from '../../../../assets/image/items/tongquat2.png';
import tongquan3 from '../../../../assets/image/items/tongquat3.png';
import tongquan4 from '../../../../assets/image/items/tongquat4.png';

export const TongQuan = () => {
    return (
        <div className="tongQuan">

            <div className="titleTongQuan">Tổng quan</div>

            {/* Khóa học */}
            <div className='tongQuanItem' style={{ backgroundImage: `url(${tongquan1})` }}>
                <div className="name-tongQuanItem">
                    Khóa học của tôi
                </div>
                <div className="number-tongQuanItem">
                    10
                </div>
            </div>

            {/* Khóa học đã hoàn thành */}
            <div className='tongQuanItem' style={{ backgroundImage: `url(${tongquan2})` }}>
                <div className="name-tongQuanItem">
                    Khóa học đã hoàn thành
                </div>
                <div className="number-tongQuanItem">
                    2
                </div>
            </div>

            {/* Khóa học chưa hoàn thành*/}
            <div className='tongQuanItem' style={{ backgroundImage: `url(${tongquan3})` }}>
                <div className="name-tongQuanItem">
                    Khóa học chưa hoàn thành
                </div>
                <div className="number-tongQuanItem">
                    8
                </div>
            </div>

            {/* Tổng điểm trung bình */}
            <div className='tongQuanItem' style={{ backgroundImage: `url(${tongquan4})` }}>
                <div className="name-tongQuanItem">
                    Tổng điểm trung bình
                </div>
                <div className="number-tongQuanItem">
                    5.0
                </div>
            </div>

        </div>
    )
}