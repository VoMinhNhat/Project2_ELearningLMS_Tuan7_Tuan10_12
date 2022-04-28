import React, { useState } from 'react';
import { Table, Popover, Button } from 'antd';

import {BsSearch, BsThreeDotsVertical} from 'react-icons/bs';

// import 'antd/dist/antd.css';

import avatar_1 from '../../../../assets/image/chatavatar.jpg';
import avatar_2 from '../../../../assets/image/avatar.jpg';
import avatar_3 from '../../../../assets/image/khungstream.jpg';

// Pop up button
const locNofiSys = (
  <div>
    <div className='btn-NofiSys-Danhdau'>
      Đánh dấu đã đọc
    </div>
    <div className='btn-NofiSys-Xoa'>
      Xóa
    </div>
  </div>
);



const columns = [
    {
      title: '',
      dataIndex: 'Avatar',
      key: 'Avatar',
      width: 80,
      render: (avatar:any) =>{
        if(avatar==='Avatar1'){
          return(
            <div style={{backgroundImage: `url(${avatar_1})`, backgroundSize: '100% 100%', width: '30px', height: '30px', borderRadius: '30px', marginLeft:'10px'}}/>
          )
        }else if(avatar==='Avatar2'){
          return(
            <div style={{backgroundImage: `url(${avatar_2})`, backgroundSize: '100% 100%', width: '30px', height: '30px', borderRadius: '30px', marginLeft:'10px'}}/>
          )
        }else if(avatar==='Avatar3'){
          return(
            <div style={{backgroundImage: `url(${avatar_3})`, backgroundSize: '100% 100%', width: '30px', height: '30px', borderRadius: '30px', marginLeft:'10px'}}/>
          )
        }
      }
    },
    {
      title: '',
      dataIndex: 'Comment',
      key: 'Comment',
      render: (comment:any, record:any) => {
        if(record.Seen==='unseen'){
          return(
            <div style={{fontWeight: 700}}>
                {comment}
            </div>
          )
        }else if(record.Seen==='seen'){
          return(
            <div style={{fontWeight: 400}}>
                {comment}
            </div>
          )
        }
      }
    },
    {
      title: '',
      dataIndex: 'Time',
      key: 'Time',
      width: 150,
      render: (time:any, record: any) =>{
        if(record.Seen==='seen'){
          return(
            <div style={{fontWeight: 700, textAlign: 'right', marginRight: '5px'}}>
                {time}
            </div>
          )
        }else if(record.Seen==='unseen'){
          return(
            <div style={{fontWeight: 400, textAlign: 'right', marginRight: '5px'}}>
                {time}
            </div>
          )
        }
      }
    },
];
const data = [
    {
      key: '1',
      Avatar: 'Avatar1',
      Comment: 'Lorem Ipsum đã tạo một topic',
      Time: '5 phút trước',
      Seen: 'seen',
    },
    {
      key: '2',
      Avatar: 'Avatar2',
      Comment: 'Thông báo điểm kiểm tra lịch sử đã được cập nhật',
      Time: '15 phút trước',
      Seen: 'unseen',
    },
    {
      key: '3',
      Avatar: 'Avatar3',
      Comment: 'Lorem Ipsum have a very good day, but suddenly, there came the rain, so Lorem Ipsum have to run into the house',
      Time: '3 ngày trước',
      Seen: 'seen',
    },
    {
      key: '4',
      Avatar: 'Avatar1',
      Comment: 'Lorem Ipsum have a very good day, but suddenly, there came the rain, so Lorem Ipsum have to run into the house',
      Time: '15 phút trước',
      Seen: 'unseen',
    },
    {
      key: '5',
      Avatar: 'Avatar2',
      Comment: 'Lorem Ipsum have a very good day, but suddenly,',
      Time: '1 tiếng trước',
      Seen: 'seen',
    },
    {
      key: '6',
      Avatar: 'Avatar3',
      Comment: 'Lorem Ipsum đã thích một bình luận của bạn',
      Time: '1 phút trước',
      Seen: 'seen',
    },
    {
      key: '7',
      Avatar: 'Avatar1',
      Comment: 'Lorem Ipsum đã thích một bình luận của bạn',
      Time: '2 phút trước',
      Seen: 'unseen',
    },
    {
      key: '8',
      Avatar: 'Avatar2',
      Comment: 'Lorem Ipsum đã nhắc đến bạn trong 1 bình luận',
      Time: '45 phút trước',
      Seen: 'unseen',
    },
    {
      key: '9',
      Avatar: 'Avatar3',
      Comment: 'Lorem Ipsum đã thích một bình luận của bạn',
      Time: '1 Tiếng',
      Seen: 'seen',
    },
    {
      key: '10',
      Avatar: 'Avatar1',
      Comment: 'Lorem Ipsum đã nhắc đến bạn trong 1 bình luận',
      Time: '2 ngày trước',
      Seen: 'unseen',
    },
    {
      key: '11',
      Avatar: 'Avatar2',
      Comment: 'Lorem Ipsum đã thích một bình luận của bạn',
      Time: '1 ngày trước',
      Seen: 'seen',
    },
  ];


export const TableNofiSys = () =>{
    return (
        <div>    
              <Popover content={locNofiSys} trigger="click" >
                <button style={{position: 'absolute', top: '145px', left: '1300px',zIndex: '10', background: 'none',width: '30px',
                              height: '40px',border: 'none', cursor: 'pointer'}}>
                  <BsThreeDotsVertical style={{fontSize: '20px', marginTop: '5px'}}/>
                </button>
              </Popover>
            <BsSearch style={{fontSize: '18px', position: 'absolute', top: '157px', left: '154px', zIndex: 10}}/>
            <input className='input-Nofi-Sys'/>
            <Table columns={columns} dataSource={data} rowSelection={{type: 'checkbox'}} scroll={{ y: 507 }} 
                                                       pagination={{ position: ['bottomCenter'], pageSize: 11}}/>
        </div>
    )
}