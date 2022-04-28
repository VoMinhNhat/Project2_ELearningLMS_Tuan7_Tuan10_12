import { Select, Table, Tag, Space } from 'antd';
import { AiOutlineMinus,AiFillCloseCircle,AiFillCheckCircle } from 'react-icons/ai';
import { Recoverable } from 'repl';


//Chọn niên khóa
const { Option } = Select;

function ChonNienKhoa(value: any) {
    console.log(`selected ${value}`);
}

//Table chứa điểm
const columns = [
    {
        title: 'STT',
        dataIndex: 'stt',
        key: 'stt',
        width: 80,
    },
    {
        title: 'Môn học',
        dataIndex: 'MonHoc',
        key: 'MonHoc',
        width: 130,
        render: (MonHoc:any) =>{
            return (
                <div style={{fontWeight: '700'}}>
                    {MonHoc}
                </div>
            )
        }
    },
    {
        title: 'Giảng viên',
        dataIndex: 'GiangVien',
        key: 'GiangVien',
        width: 160,
        border: '1px solid #FF7506',
    },
    {
        title: 'Chuyên cần',
        dataIndex: 'ChuyenCan',
        key: 'ChuyenCan',
        render: (ChuyenCan:any) =>{
            return (
                <div style={{textAlign: 'center'}}>
                    {ChuyenCan}
                </div>
            )
        }
    },
    {
        title: 'Miệng',
        dataIndex: 'Mieng',
        key: 'Mieng',
        render: (Mieng:any) =>{
            return (
                <div style={{textAlign: 'center'}}>
                    {Mieng}
                </div>
            )
        }
    },
    {
        title: '15 Phút',
        dataIndex: 'Phut15',
        key: 'Phut15',
        render: (Phut15:any) =>{
            return (
                <div style={{textAlign: 'center'}}>
                    {Phut15}
                </div>
            )
        }
    },
    {
        title: 'Hệ số II',
        dataIndex: 'HeSoII',
        key: 'HeSoII',
        render: (HeSoII:any) =>{
            return (
                <div style={{textAlign: 'center'}}>
                    {HeSoII}
                </div>
            )
        }
    },
    {
        title: 'Hệ số III',
        dataIndex: 'HeSoIII',
        key: 'HeSoIII',
        render: (HeSoIII:any) =>{
            return (
                <div style={{textAlign: 'center'}}>
                    {HeSoIII}
                </div>
            )
        }
    },
    {
        title: 'Trung bình',
        dataIndex: 'TrungBinh',
        key: 'TrungBinh',
        render: (TrungBinh:any) =>{
            return (
                <div style={{textAlign: 'center'}}>
                    {TrungBinh}
                </div>
            )
        }
    },
    {
        title: 'Tổng điểm trung bình',
        dataIndex: 'TongDiemTrungBinh',
        key: 'TongDiemTrungBinh',
        render: (TongDiemTrungBinh:any) =>{
            if(TongDiemTrungBinh > 5){
                return(
                    <div style={{color: '#49C510', fontWeight: '700', textAlign: 'center'}}>
                        {TongDiemTrungBinh}
                    </div>
                )
            }else{
                return(
                    <div style={{color: '#ED2025', fontWeight: '700', textAlign: 'center'}}>
                        {TongDiemTrungBinh}
                    </div>
                )
            }
        }
    },
    {
        title: 'Kết quả',
        dataIndex: 'KetQua',
        key: 'KetQua',
        render: (KetQua:any, record: any) =>{
               if(record.TongDiemTrungBinh>5){
                return(
                    <div style={{color: '#49C510', fontWeight: '700', textAlign: 'center', fontSize: '20px'}}>
                        <AiFillCheckCircle/>
                    </div>
                )
               }else{
                return(
                    <div style={{color: '#ED2025', fontWeight: '700', textAlign: 'center', fontSize: '20px'}}>
                        <AiFillCloseCircle/>
                    </div>
                )
               }
        }
    },
    {
        title: 'Ngày cập nhật',
        dataIndex: 'NgayCapNhat',
        key: 'NgayCapNhat',
        width: 120,
        render: (NgayCapNhat:any) =>{
            return (
                <div style={{width: '100px'}}>
                    {NgayCapNhat}
                </div>
            )
        }
    },
];
const data =[
    {
        key: '1',
        stt: '1',
        MonHoc: 'Toán Đại Số',
        GiangVien: 'Cô. Trần Thị Thu Thủy',
        ChuyenCan: 0,
        Mieng: 0,
        Phut15: 0,
        HeSoII: 0,
        HeSoIII: 0,
        TrungBinh: 0,
        TongDiemTrungBinh: 7.0,
        KetQua: 'yes',
        NgayCapNhat: 'Thứ 4, 20/8/2020 09:00 AM',
    },  
    {
        key: '2',
        stt: '2',
        MonHoc: 'Toán Hình Học',
        GiangVien: 'Cô. Trần Thị Thu Thủy',
        ChuyenCan: 0,
        Mieng: 0,
        Phut15: 0,
        HeSoII: 0,
        HeSoIII: 0,
        TrungBinh: 0,
        TongDiemTrungBinh: 4.8,
        KetQua: 'no',
        NgayCapNhat: 'Thứ 4, 20/8/2020 09:00 AM',
    },
    {
        key: '3',
        stt: '3',
        MonHoc: 'Lịch Sử',
        GiangVien: 'Cô. Trần Thị Thu Thủy',
        ChuyenCan: 0,
        Mieng: 0,
        Phut15: 0,
        HeSoII: 0,
        HeSoIII: 0,
        TrungBinh: 0,
        TongDiemTrungBinh: 7.6,
        KetQua: 'yes',
        NgayCapNhat: 'Thứ 4, 20/8/2020 09:00 AM',
    }, 
    {
        key: '4',
        stt: '4',
        MonHoc: 'Tiếng Anh',
        GiangVien: 'Cô. Trần Thị Thu Thủy',
        ChuyenCan: 0,
        Mieng: 0,
        Phut15: 0,
        HeSoII: 0,
        HeSoIII: 0,
        TrungBinh: 0,
        TongDiemTrungBinh: 7.2,
        KetQua: 'yes',
        NgayCapNhat: 'Thứ 4, 20/8/2020 09:00 AM',
    }, 
    {
        key: '5',
        stt: '5',
        MonHoc: 'Sinh Học',
        GiangVien: 'Cô. Trần Thị Thu Thủy',
        ChuyenCan: 0,
        Mieng: 0,
        Phut15: 0,
        HeSoII: 0,
        HeSoIII: 0,
        TrungBinh: 0,
        TongDiemTrungBinh: 8.5,
        KetQua: 'yes',
        NgayCapNhat: 'Thứ 4, 20/8/2020 09:00 AM',
    },
    {
        key: '6',
        stt: '6',
        MonHoc: 'Địa Lý',
        GiangVien: 'Cô. Trần Thị Thu Thủy',
        ChuyenCan: 0,
        Mieng: 0,
        Phut15: 0,
        HeSoII: 0,
        HeSoIII: 0,
        TrungBinh: 0,
        TongDiemTrungBinh: 3.8,
        KetQua: 'no',
        NgayCapNhat: 'Thứ 4, 20/8/2020 09:00 AM',
    },
    {
        key: '7',
        stt: '7',
        MonHoc: 'Tin Học',
        GiangVien: 'Cô. Trần Thị Thu Thủy',
        ChuyenCan: 0,
        Mieng: 0,
        Phut15: 0,
        HeSoII: 0,
        HeSoIII: 0,
        TrungBinh: 0,
        TongDiemTrungBinh: 9.3,
        KetQua: 'yes',
        NgayCapNhat: 'Thứ 4, 20/8/2020 09:00 AM',
    },
    {
        key: '8',
        stt: '8',
        MonHoc: 'Tin Học',
        GiangVien: 'Cô. Trần Thị Thu Thủy',
        ChuyenCan: 0,
        Mieng: 0,
        Phut15: 0,
        HeSoII: 0,
        HeSoIII: 0,
        TrungBinh: 0,
        TongDiemTrungBinh: 4.0,
        KetQua: 'no',
        NgayCapNhat: 'Thứ 4, 20/8/2020 09:00 AM',
    },
];





//render Kết quả
export const TableBangDiem = () => {
    return (
        <div className="TableBangDiem">


            <div className="locKetQua-BangDiem">
                {/* chọn niên khóa */}
                <div className='chonNienKhoa-BangDiem'>
                    <h4 style={{ height: '22px', marginBottom: '1px' }}>
                        Chọn Niên khóa
                    </h4>
                    <Select defaultValue="2019-2020" style={{ width: 120 }} onChange={ChonNienKhoa}>
                        <Option value="2019-2020">2019-2020</Option>
                        <Option value="2018-2019">2018-2019</Option>
                        <Option value="2017-2018">2017-2018</Option>
                        <Option value="2016-2017">2016-2017</Option>
                    </Select>
                </div>

                {/* chọn khối*/}
                <div className='chonKhoi-BangDiem'>
                    <h4 style={{ height: '22px', marginBottom: '1px' }}>
                        Chọn khối
                    </h4>
                    <Select defaultValue="10" style={{ width: 80 }} onChange={ChonNienKhoa}>
                        <Option value="10">10</Option>
                        <Option value="9">9</Option>
                        <Option value="8">8</Option>
                        <Option value="7">7</Option>
                    </Select>
                </div>

                {/* chọn học kì */}
                <div className='chonHocKi-BangDiem'>
                    <h4 style={{ height: '22px', marginBottom: '1px' }}>
                        Chọn Học kì
                    </h4>
                    <Select defaultValue="Học kì 1" style={{ width: 120 }} onChange={ChonNienKhoa}>
                        <Option value="2019-2020">Học kì 1</Option>
                        <Option value="2018-2019">Học kì 2</Option>
                        <Option value="2017-2018">Giữa kì 1</Option>
                        <Option value="2016-2017">Giữa kì 2</Option>
                    </Select>
                </div>

                <button className='btn-Loc-BangDiem'>Tìm kiếm</button>
            </div>


            <div className='khungChua-Table'>

                <div className='titleKhungChua-Table'>
                    {/*Title*/}
                    <div style={{ display: 'flex' }}>
                        <div style={{ fontSize: '30px', fontWeight: '700' }}>
                            Học kì 1
                        </div>
                        <AiOutlineMinus style={{ fontSize: '20px', marginTop: '15px', marginLeft: '5px', fontWeight: '700' }} />
                        <div style={{ fontSize: '17px', fontWeight: '700', marginLeft: '5px', marginTop: '10px', color: '#2EACEE' }}>
                            10/13 môn đạt
                        </div>
                    </div>
                    {/* Button */}
                    <button className='btn-InBangDiem'>In Bảng Điểm</button>
                </div>

                {/* Table */}
                <div className='table-BangDiem'>
                    <div style={{width: '1px', height: '340px', background: '#FF7506',
                                 position: 'absolute', left: '425px', top: '410px',
                                 zIndex: 9999}}/>
                    <div style={{width: '1px', height: '40px', background: 'white',
                                 position: 'absolute', left: '425px', top: '360px',
                                 zIndex: 9999}}/>             

                    <Table columns={columns} dataSource={data} scroll={{y: 351}}/>

                    <div style={{width: '1px', height: '340px', background: '#FF7506',
                                 position: 'absolute', left: '1046px', top: '410px',
                                 zIndex: 9999}}/>
                    <div style={{width: '1px', height: '40px', background: 'white',
                                 position: 'absolute', left: '1046px', top: '360px',
                                 zIndex: 9999}}/>              
                </div>

            </div>

        </div>
    )
}