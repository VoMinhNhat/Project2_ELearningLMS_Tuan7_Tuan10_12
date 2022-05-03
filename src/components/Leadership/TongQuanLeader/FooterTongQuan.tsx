import { DatePicker, Space } from 'antd';
import moment from 'moment';

import { Area, Pie } from '@ant-design/plots';
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import "antd/dist/antd.css";


//Date picker
const dateFormat = 'YYYY/MM/DD';

const { RangePicker } = DatePicker;

// truy cập
const DemoArea = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        asyncFetch();
    }, []);

    const asyncFetch = () => {
        fetch('https://gw.alipayobjects.com/os/bmw-prod/360c3eae-0c73-46f0-a982-4746a6095010.json')
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => {
                console.log('fetch data failed', error);
            });
    };
    const config = {
        data,
        xField: 'timePeriod',
        yField: 'value',
        xAxis: {
            range: [0, 1],
        },
        smooth:true,
        line: {
            color: '#ff6600',
            size: 2,
        },
        
        areaStyle: () => {
            return {
              fill: 'l(270) 0:#ffffff 0.5:#ffa200 1:#ffb431',
            };
          },
    };

    return <Area {...config} />;
};

export const FooterTongQuan = () =>{
    return(
        <div className="footerTongQuan">
            
            <div className="footerTongQuan-Header">
                <div style={{fontSize: '16px', fontWeight: '700', color:'#CC5C00'}}>
                    Thống kê lượng truy cập
                </div>

                <div style={{marginLeft: '755px'}}>
                    <Space direction="vertical" size={12}>
                        <RangePicker superNextIcon={false} superPrevIcon={false}/>
                    </Space>
                </div>
            </div>

            <div className='footerTongQuan-Body'>
                <DemoArea />
            </div>

        </div>
    )
}