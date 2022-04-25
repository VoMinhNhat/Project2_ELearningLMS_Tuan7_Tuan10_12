import '../../../../../assets/Css/StudentCss/LopHocCuaToiCss/DanhSachLop.css';

import { BsSearch, BsChevronExpand } from 'react-icons/bs';
import { BiInfoCircle } from 'react-icons/bi';

import { Select, DatePicker, Space, Table, Tag } from 'antd';

import { Link } from 'react-router-dom';

// Option
const { Option } = Select;
//niên khóa
function nienKhoa(value: any) {
    console.log(`selected ${value}`);
}
function monHoc(value: any) {
    console.log(`selected ${value}`);
}


// Chọn ngày để học
function chonNgay(date: any, dateString: any) {
    console.log(date, dateString);
}

// Table Danh Sách Lớp Học
const DanhSachLop = [
    {
        title: 'Mã lớp',
        dataIndex: 'classID',
        key: 'classID',
    },
    {
        title: 'Môn học',
        dataIndex: 'subject',
        key: 'subject',
    },
    {
        title: 'Thời gian',
        dataIndex: 'time',
        key: 'time',
    },
    {
        title: 'Giảng viên',
        dataIndex: 'teacher',
        key: 'teacher',
    },
    {
        title: 'Trạng thái',
        dataIndex: 'status',
        key: 'status',
        render: (status: any) => {
            if (status === 'Đã hoàn thành') {
                return (
                    <div style={{ color: '#49C510', fontWeight: '400', fontStyle: 'italic', fontSize: '13px' }}>
                        Đã hoàn thành
                    </div>
                )
            }    
        }
    },
    {
        title: '',
        dataIndex: 'subjectInfor',
        key: 'subjectInfor',
        render: (subjectInfor:any)=>{
            return(
                <Link to={'/ThongTinLop'}>
                <div style={{fontSize: '25px', color: '#F17F21', textAlign: 'center'}}>
                    <BiInfoCircle/>
                </div>
                </Link>
            )
        }
    }
  ];

const data = [
    {
        key: '1',
        classID: '12514568954',
        subject: 'Toán Đại số',
        time: 'Thứ 3, 19/08/2020, 09:00 AM',
        teacher: 'GV. Nguyễn Văn A',
        status: 'Đã hoàn thành',
    },
    {
        key: '2',
        classID: '12514568954',
        subject: 'Toán Hình học',
        time: 'Thứ 3, 19/08/2020, 09:00 AM',
        teacher: 'GV. Nguyễn Văn A',
        status: 'Đã hoàn thành',
    },
    {
        key: '3',
        classID: '12514568954',
        subject: 'Toán Đại số',
        time: 'Thứ 3, 19/08/2020, 09:00 AM',
        teacher: 'GV. Nguyễn Văn A',
        status: 'Đã hoàn thành',
    },
    {
        key: '4',
        classID: '12514568954',
        subject: 'Toán Hình học',
        time: 'Thứ 3, 19/08/2020, 09:00 AM',
        teacher: 'GV. Nguyễn Văn A',
        status: 'Đã hoàn thành',
    },
    {
        key: '5',
        classID: '12514568954',
        subject: 'Toán Đại số',
        time: 'Thứ 3, 19/08/2020, 09:00 AM',
        teacher: 'GV. Nguyễn Văn A',
        status: 'Đã hoàn thành',
    },
    {
        key: '6',
        classID: '12514568954',
        subject: 'Toán Hình học',
        time: 'Thứ 3, 19/08/2020, 09:00 AM',
        teacher: 'GV. Nguyễn Văn A',
        status: 'Đã hoàn thành',
    },
    {
        key: '7',
        classID: '12514568954',
        subject: 'Toán Đại số',
        time: 'Thứ 3, 19/08/2020, 09:00 AM',
        teacher: 'GV. Nguyễn Văn A',
        status: 'Đã hoàn thành',
    },
    {
        key: '8',
        classID: '12514568954',
        subject: 'Toán Hình học',
        time: 'Thứ 3, 19/08/2020, 09:00 AM',
        teacher: 'GV. Nguyễn Văn A',
        status: 'Đã hoàn thành',
    },
];

export const LopHocHoanThanh = () =>{
        return (
            <div className='cacTable'>
    
                {/* Option Cho Niên Khóa */}
                <div className='nienKhoa'>
                    <h4>Chọn niên khóa</h4>
                    <Select defaultValue="2019-2020" style={{ width: 120, marginLeft: '2%' }} onChange={nienKhoa}>
                        <Option value="2019-2020">2019-2020</Option>
                        <Option value="2018-2019">2018-2019</Option>
                        <Option value="2017-2018">2017-2018</Option>
                        <Option value="2016-2017">2016-2017</Option>
                    </Select>
                </div>
    
                {/* Chọn ngày */}
                <div className='chonNgay'>
                    <h4>Chọn ngày</h4>
                    <Space direction="vertical" className='datePicker' >
                        <DatePicker onChange={chonNgay} superNextIcon={null} superPrevIcon={null} style={{ borderRadius: '5px', border: '1px solid #373839' }} />
                    </Space>
                </div>
    
                {/* Chọn Môn học */}
                <div className='chonMonHoc'>
                    <h4>Chọn môn học</h4>
                    <Select defaultValue="Anh văn" style={{ width: 120, marginLeft: '2%' }} onChange={monHoc}>
                        <Option value="Toán">Toán</Option>
                        <Option value="Ngữ văn">Ngữ văn</Option>
                        <Option value="Anh văn">Anh văn</Option>
                    </Select>
                </div>
    
                {/* Lọc kết quả btn */}
                <button className='btn-locketqua'>Lọc kết quả</button>
    
                {/* Tất cả btn */}
                <button className='btn-locketqua'>Tất cả khóa học</button>
    
                {/* input tìm kiếm theo top pic */}
                <i className='iconTimKiemTheoToppic'><BsSearch /></i>
                <input className='inputTimKiemTopic'></input>
    
                {/* Table cho các danh sách lớp */}
                <div className='tableDanhSach'>
                    <Table columns={DanhSachLop} dataSource={data} />
                </div>
    
            </div>
        )
}