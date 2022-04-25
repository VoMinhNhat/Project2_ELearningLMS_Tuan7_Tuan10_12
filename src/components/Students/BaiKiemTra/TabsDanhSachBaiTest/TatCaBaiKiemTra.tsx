import '../../../../assets/Css/StudentCss/BaiKiemTraCss/TableChoBaiTest.css';

import { Select, DatePicker, Space, Table, Tag  } from 'antd';

import {BsSearch} from 'react-icons/bs';
import {BiInfoCircle} from 'react-icons/bi';

import { Link } from 'react-router-dom';

//Chọn Môn Thi
const { Option} = Select;

function chonMonThi(value: any) {
    console.log(`selected ${value}`);
}

//Chọn ngày thi
function chonNgayThi(date:any, dateString:any) {
    console.log(date, dateString);
  }

//Table Danh Sách thời gian thi
const columns = [
    {
      title: 'Môn học',
      dataIndex: 'MonHoc',
      key: 'MonHoc',
    },
    {
      title: 'Nội dung kiểm tra',
      dataIndex: 'NoiDung',
      key: 'NoiDung',
    },
    {
      title: 'Giảng viên',
      dataIndex: 'GiangVien',
      key: 'GiangVien',
    },
    {
        title: 'Ngày làm bài',
        dataIndex: 'NgayLamBai',
        key: 'NgayLamBai',
        render: (text:any) => <div style={{ width: '120px'}}>
                                {text}
                              </div>,
    },
    {
        title: 'Thời lượng',
        dataIndex: 'ThoiLuong',
        key: 'ThoiLuong',
    },
    {
        title: 'Tình trạng',
        dataIndex: 'TinhTrang',
        key: 'TinhTrang',
        render: (status: any) => {
            if (status === 'Kết thúc') {
                return (
                    <div style={{ color: '#49C510', fontWeight: '400', fontStyle: 'italic', fontSize: '13px' }}>
                        Kết thúc
                    </div>
                )
            }    
            else if (status === 'Chưa bắt đầu') {
                return (
                    <div style={{ color: '#ED2025', fontWeight: '400', fontStyle: 'italic', fontSize: '13px' }}>
                        Chưa bắt đầu
                    </div>
                )
            }
            else if (status === 'Đang tiến hành') {
                return (
                    <div style={{ color: '#0B80EC', fontWeight: '400', fontStyle: 'italic', fontSize: '13px' }}>
                       Đang tiến hành
                    </div>
                )
            }
        }
    },
    {
        title: 'Bài làm',
        dataIndex: 'BaiLam',
        key: 'BaiLam',
        render: (bailam:any, record: any)=>{
            if(bailam==='Bắt đầu'){
                if(record.MonHoc==='Ngữ Văn'){
                return(
                    <Link to={'/KiemTraTuLuan'}>
                        <button style={{background: '#FF7506', color: 'white',
                                        border: 'none', borderRadius: '3px',
                                        width: '90px', height: '30px', 
                                        fontWeight: '700', fontSize: '14px',
                                        cursor: 'pointer',
                                        }}
                        >
                            Bắt đầu
                        </button>
                    </Link>
                )
            }else{
                return(
                    <Link to={'/KiemTraTracNghiem'}>
                        <button style={{background: '#FF7506', color: 'white',
                                        border: 'none', borderRadius: '3px',
                                        width: '90px', height: '30px', 
                                        fontWeight: '700', fontSize: '14px',
                                        cursor: 'pointer',
                                        }}
                        >
                            Bắt đầu
                        </button>
                    </Link>
                )
            }
            } 
            else if(bailam==='Đang thực hiện'){
                return(
                    <div style={{ color: '#0B80EC', fontWeight: '400', fontStyle: 'italic', fontSize: '13px' }}>
                       Đang thực hiện
                    </div>
                )
            } else if(bailam==='Đã nộp bài'){
                return(
                    <div style={{ color: '#49C510', fontWeight: '400', fontStyle: 'italic', fontSize: '13px' }}>
                       Đã nộp bài
                    </div>
                )
            } else if(bailam==='Chưa nộp bài'){
                return(
                    <div style={{ color: '#FF7506', fontWeight: '400', fontStyle: 'italic', fontSize: '13px' }}>
                       Chưa nộp bài
                    </div>
                )
            } else if(bailam==='Chưa bắt đầu'){
                return(
                    <div style={{ color: '#ED2025', fontWeight: '400', fontStyle: 'italic', fontSize: '13px' }}>
                       Chưa bắt đầu
                    </div>
                )
            } else if(bailam==='Không nộp bài'){
                return(
                    <div style={{ color: 'black', fontWeight: '400', fontStyle: 'italic', fontSize: '13px' }}>
                       Không nộp bài
                    </div>
                )
            } else if(bailam==='Hoàn thành'){
                return(
                    <div style={{ color: '#49C510', fontWeight: '400', fontStyle: 'italic', fontSize: '13px' }}>
                       Hoàn thành
                    </div>
                )
            }
            
        }
    },
    {
        title: '',
        dataIndex: '',
        render: (ChuyenTrang:any)=>{
            return(
                <div style={{fontSize: '20px', color: '#F17F21', textAlign: 'center'}}>
                    <BiInfoCircle/>
                </div>
            )
        }
    },
  ];

  const data = [
    {
      key: '1',
      MonHoc: 'Lịch sử',
      NoiDung: 'Kiểm tra 1 tiết',
      GiangVien: 'Gv.Nguyễn Văn A',
      NgayLamBai: 'Thứ 5, 21/08/2020 12:00 PM',
      ThoiLuong: '45 phút',
      TinhTrang: 'Đang tiến hành',
      BaiLam: 'Bắt đầu',
    },
    {
        key: '2',
        MonHoc: 'Ngữ Văn',
        NoiDung: 'Kiểm tra 1 tiết',
        GiangVien: 'Gv.Nguyễn Văn A',
        NgayLamBai: 'Thứ 5, 21/08/2020 12:00 PM',
        ThoiLuong: '45 phút',
        TinhTrang: 'Đang tiến hành',
        BaiLam: 'Bắt đầu',
    },
    {
        key: '3',
        MonHoc: 'Toán Đại Số',
        NoiDung: 'Kiểm tra 1 tiết',
        GiangVien: 'Gv.Nguyễn Văn A',
        NgayLamBai: 'Thứ 5, 21/08/2020 12:00 PM',
        ThoiLuong: '45 phút',
        TinhTrang: 'Đang tiến hành',
        BaiLam: 'Đang thực hiện',
    },
    {
        key: '4',
        MonHoc: 'Toán Hình Học',
        NoiDung: 'Kiểm tra đầu giờ',
        GiangVien: 'Gv.Nguyễn Văn A',
        NgayLamBai: 'Thứ 5, 21/08/2020 12:00 PM',
        ThoiLuong: '15 phút',
        TinhTrang: 'Đang tiến hành',
        BaiLam: 'Đã nộp bài',
    },
    {
        key: '5',
        MonHoc: 'Toán Hình Học',
        NoiDung: 'Kiểm tra đầu giờ',
        GiangVien: 'Gv.Nguyễn Văn A',
        NgayLamBai: 'Thứ 5, 21/08/2020 12:00 PM',
        ThoiLuong: '15 phút',
        TinhTrang: 'Chưa bắt đầu',
        BaiLam: 'Chưa nộp bài',
    },
    {
        key: '6',
        MonHoc: 'Toán Hình Học',
        NoiDung: 'Kiểm tra 1 tiết',
        GiangVien: 'Gv.Nguyễn Văn A',
        NgayLamBai: 'Thứ 5, 21/08/2020 12:00 PM',
        ThoiLuong: '45 phút',
        TinhTrang: 'Chưa bắt đầu',
        BaiLam: 'Chưa bắt đầu',
    },
    {
        key: '7',
        MonHoc: 'Toán Đại số Học',
        NoiDung: 'Kiểm tra 1 tiết',
        GiangVien: 'Gv.Nguyễn Văn A',
        NgayLamBai: 'Thứ 5, 21/08/2020 12:00 PM',
        ThoiLuong: '45 phút',
        TinhTrang: 'Kết thúc',
        BaiLam: 'Không nộp bài',
    },
    {
        key: '8',
        MonHoc: 'Toán Đại số Học',
        NoiDung: 'Kiểm tra giữa kì',
        GiangVien: 'Gv.Nguyễn Văn A',
        NgayLamBai: 'Thứ 5, 21/08/2020 12:00 PM',
        ThoiLuong: '90 phút',
        TinhTrang: 'Kết thúc',
        BaiLam: 'Hoàn thành',
    },
    {
        key: '9',
        MonHoc: 'Toán Đại số Học',
        NoiDung: 'Kiểm tra giữa kì',
        GiangVien: 'Gv.Nguyễn Văn A',
        NgayLamBai: 'Thứ 5, 21/08/2020 12:00 PM',
        ThoiLuong: '90 phút',
        TinhTrang: 'Kết thúc',
        BaiLam: 'Hoàn thành',
    },
    {
        key: '10',
        MonHoc: 'Toán Đại số Học',
        NoiDung: 'Kiểm tra giữa kì',
        GiangVien: 'Gv.Nguyễn Văn A',
        NgayLamBai: 'Thứ 5, 21/08/2020 12:00 PM',
        ThoiLuong: '90 phút',
        TinhTrang: 'Kết thúc',
        BaiLam: 'Hoàn thành',
    },
    {
        key: '11',
        MonHoc: 'Toán Đại số Học',
        NoiDung: 'Kiểm tra giữa kì',
        GiangVien: 'Gv.Nguyễn Văn A',
        NgayLamBai: 'Thứ 5, 21/08/2020 12:00 PM',
        ThoiLuong: '90 phút',
        TinhTrang: 'Kết thúc',
        BaiLam: 'Hoàn thành',
    },
    {
        key: '12',
        MonHoc: 'Ngữ Văn',
        NoiDung: 'Kiểm tra giữa kì',
        GiangVien: 'Gv.Nguyễn Văn A',
        NgayLamBai: 'Thứ 5, 21/08/2020 12:00 PM',
        ThoiLuong: '90 phút',
        TinhTrang: 'Kết thúc',
        BaiLam: 'Hoàn thành',
    },
  ];


  
//Render Ra
export const TatCaBaiKiemTra = () => {
    return (
        <div className='TongHopBaiKiemTra'>
            
        <div style={{display: 'flex'}}>
            {/* Chọn môn */}
            <div className='chonMon-BaiKiemTra'>
                <h4>
                    Chọn bộ môn
                </h4>
                <Select defaultValue="Toán" style={{ width: 120 }} onChange={chonMonThi}>
                    <Option value="Toán">Toán</Option>
                    <Option value="Ngữ văn">Ngữ văn</Option>
                    <Option value="Anh">Anh</Option>
                </Select>
            </div>

            {/* Chọn Khối */}
            <div className='chonKhoi-BaiKiemTra'>
                <h4>
                    Chọn Khối
                </h4>
                <Select defaultValue="10" style={{ width: 120 }} onChange={chonMonThi}>
                    <Option value="10">10</Option>
                    <Option value="9">9</Option>
                    <Option value="8">8</Option>
                    <Option value="6">6</Option>
                </Select>
            </div>

            {/* Chọn Ngày */}
            <div className='chonNgay-BaiKiemTra'>
                <h4>
                    Chọn Ngày
                </h4>
                <Space direction="vertical">
                    <DatePicker onChange={chonNgayThi} superNextIcon={null} superPrevIcon={null} style={{ borderRadius: '3px', border: '1px solid #373839' }}/>
                </Space>
            </div>

            {/* Button Chọn */}
            <button className='btn-LocKetQuaThi'>Lọc kết quả</button>

            {/* input tìm kiếm */}
            <input className='input-TimKiemBaiThi' placeholder='Tìm kiếm theo tên Topic'/>
            <BsSearch style={{position: 'absolute', top: '160', right: '360'}}/>
        </div>

            <div className='Table-BaiKiemTra'>
                <Table columns={columns} dataSource={data} style={{borderRadius: '10px'}} pagination={{pageSize: 8}}/>
            </div>
            
            <div style={{position: 'absolute', top: '695px', left: '100px'}}>
                Hiển thị   
                <input type="text" style={{border: '1px solid #FF7506', width: '50px', height: '30px', 
                                            borderRadius: '5px', outline: 'none', 
                                            paddingLeft: 5, paddingRight: 5,
                                            marginLeft: '5px', marginRight: '5px'}} />
                hàng mỗi trang
            </div>
        </div>
    )
}