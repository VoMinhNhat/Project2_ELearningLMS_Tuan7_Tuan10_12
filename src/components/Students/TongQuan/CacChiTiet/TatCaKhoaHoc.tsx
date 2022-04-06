import React from "react";
import { Collapse } from 'antd';

import '../../../../assets/Css/StudentCss/TongQuatCss/PartTqCss/CacKhoaHoc.css';
import 'antd/dist/antd.css';


// Collapse
const { Panel } = Collapse;

function callback(key: any) {
    console.log(key);
}



export const CacKhoaHoc = () => {
    return (
        <div className="cacKhoaHoc">

            <div className="titleTatCaKhoaHoc">Tất cả các khóa học</div>

            {/* Table Collapse Cho Học Kỳ I và II */}

            <Collapse onChange={callback} style={{background: 'none', border: 'none'}}>

                {/* Học Kỳ II */}
                <Panel header="Học kỳ II - 2020" key="1"
                    style={{fontWeight: '700', background:'white',borderRadius: '5px', marginBottom: '20px',
                            boxShadow: '4px 4px 25px 4px rgba(154, 202, 245, 0.25)'
                            }} >

                    1

                </Panel>

                {/* Học Kỳ I */}
                <Panel header="Học kỳ I - 2020" key="2"
                    style={{fontWeight: '700', background:'white',borderRadius: '5px', marginBottom: '20px',
                            boxShadow: '4px 4px 25px 4px rgba(154, 202, 245, 0.25)'
                            }} >

                    2

                </Panel>

            </Collapse>

        </div>
    )
}