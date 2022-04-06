import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import LinearGradient from 'react-native-linear-gradient';
import { Pie } from '@ant-design/plots';

import '../../../../assets/Css/StudentCss/TongQuatCss/PartTqCss/Thongke.css';


//Donut chart
const DemoPie = () => {
    const data = [
      {
        type: 'Tổng số môn hoàn thành',
        value: 75,
      },
      {
        type: 'Tổng số môn chưa hoàn thành',
        value: 25,
      },
    ];
    const config = {
      appendPadding: 10,
      data,
      angleField: 'value',
      colorField: 'type',
      //@ts-ignore
      color: ({ type }) => {
        if(type === 'Tổng số môn hoàn thành'){
          return 'blue';
        }
        return 'orange';
      },
      legend: false,
      radius: 0.9,
      label: {
        type: 'inner',
        offset: '-30%',
        //@ts-ignore
        content: ({ percent }) => `${(percent * 100).toFixed(0)}%`,
        style: {
          fontSize: 18,
          textAlign: 'center',
          fontWeight: '700',
        },
      },
      interactions: [
        {
          type: 'element-active',
        },
      ],
    };
    //@ts-ignore
    return <Pie {...config} />;
  };


export const ThongKe = () =>{
    return(
        <div className="thongKe">
            <div className="title-Thongke">Thống kê kết quả học tập của học viên</div>
            
            <div className="chart-Thongke">

                {/* Donut Chart */}
                <div className='chart'>
                    <DemoPie />
                </div>

                {/* Chi Tiết Về Các Thông Số Trên Chart */}
                <div className='chitiet-chart'>

                    <div style={{display:'flex', height: '30px', alignItems:'center',fontWeight: 600, color:'#373839'}}>
                        <div className='setColor1-chart'/>&nbsp;
                        Tổng số môn đã hoàn thành
                    </div>

                    <div style={{display:'flex', height: '30px', alignItems:'center',fontWeight: 600, color:'#373839'}}>
                        <div className='setColor2-chart'/>&nbsp;
                        Tổng số môn chưa hoàn thành
                    </div>

                </div>

                {/* Chi Tiết Các Thông Tin Về Học Tập */}
                <div className='chitiet-hoctap-full'>
                    <>
                    Tổng số môn:
                    </>
                    <div style={{marginLeft: '97px', fontWeight: '700'}}>
                        10
                    </div>  
                </div>

                <div className='chitiet-hoctap-allReady'>
                    <>
                    Số môn đã hoàn thành:
                    </>
                    <div style={{marginLeft: '44px', fontWeight: '700', color: '#2EACEE'}}>
                        7
                    </div>  
                </div>

                <div className='chitiet-hoctap-notReady'>
                    <>
                    Số môn chưa hoàn thành:
                    </>
                    <div style={{marginLeft: '29px', fontWeight: '700', color: '#FF7506'}}>
                        3
                    </div>  
                </div>
                    
            </div>
        </div>
    )
}