import React, { Component } from "react";
import { connect } from "react-redux";

class BaiTapChonXeRedux extends Component {
    // state={
    //    src:"./image/products/black-car.jpg",
    // }
    // changeColor=(color)=>{
    //     const newState={
    //         src:`./image/products/${color}-car.jpg`,
    //     }
    //     this.setState(newState);
    // }
  render() {
    const {baiTapXe,handleCar}=this.props
    return (
      <div>
        <h2>BaiTapChonXe</h2>
        <div className="row">
          <div className="col-8">
            <img
              className="img-fluid"
              src={baiTapXe}
              alt=""
            />
          </div>
          <div className="col-4 d-flex flex-column justify-content-around">
            <div>
              <img src="./image/icons/icon-black.jpg" alt="" width={50} onClick={()=>handleCar("black")}/>
              <span className="ml-3">Black</span>
            </div>
            <div>
              <img src="./image/icons/icon-red.jpg" alt="" width={50} onClick={()=>handleCar("red")}/>
              <span className="ml-3">Red</span>
            </div>
            <div>
              <img src="./image/icons/icon-silver.jpg" alt="" width={50} onClick={()=>handleCar("silver")} />
              <span className="ml-3">Silver</span>
            </div>
            <div>
              <img src="./image/icons/icon-steel.jpg" alt="" width={50} onClick={()=>handleCar("steel")} />
              <span className="ml-3">Steel</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps=(rootReducers)=>{
  return{
    baiTapXe:rootReducers.baiTapXe
  }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        handleCar:(colorCar)=>{
            dispatch({
                type:'CHANGE_COLOR',
                payload:colorCar
            })
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(BaiTapChonXeRedux)
