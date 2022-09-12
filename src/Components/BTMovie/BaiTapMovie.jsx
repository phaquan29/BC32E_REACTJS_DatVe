import React, { Component } from 'react'
import data from "./DataFilms.json"
export default class BaiTapMovie extends Component {
    state={
        isShow:true,
        phim: {
            "maPhim": 1283,
            "tenPhim": "Trainwreck",
            "biDanh": "trainwreck",
            "trailer": "https://www.youtube.com/embed/2MxnhBPoIx4",
            "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/trainwreck.jpg",
            "moTa": "Having thought that monogamy was never possible, a commitment-phobic career woman may have to face her fears when she meets a good guy.",
            "maNhom": "GP00",
            "ngayKhoiChieu": "2019-07-29T00:00:00",
            "danhGia": 5
          },
    }
  render() {
    return (
      <div className='container'>
         <h2>BaiTapMovie</h2>
         <button className='btn btn-success mr-2 mb-2' onClick={()=>{
            this.setState({isShow:true})
         }}>Show</button>
        <button className='btn btn-danger mb-2' onClick={()=>{
            this.setState({isShow:false})
         }}>Hidden</button>
         <div className="row my-5">
            <div className="col-4">
                <img src={this.state.phim.hinhAnh} alt="" />
            </div>
            <div className="col-8">
                <p>{this.state.phim.tenPhim}</p>
                <p>Lịch chiếu:{this.state.phim.ngayKhoiChieu}</p>
            </div>
         </div>
         {
            this.state.isShow && (<div className="row">
            {
                data.map((film)=>{
                    return <div className='col-3' key={film.maPhim}>
                         <div className="card">
                            <img src={film.hinhAnh} alt={film.tenPhim} />
                            <div className="card-body">
                                <p>{film.tenPhim}</p>
                                <button className='btn btn-success' onClick={()=>{
                                    console.log(film)
                                    this.setState({
                                        phim:film
                                    })
                                    }}>Xem chi tiết</button>
                            </div>
                         </div>
                    </div>
                })
            }
         </div>)
         }
         
      </div>
    )
  }
}
