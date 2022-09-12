import React, { Component } from "react";

export default class BaiTapChonXe extends Component {
    state={
       src:"./image/products/black-car.jpg",
    }
    changeColor=(color)=>{
        const newState={
            src:`./image/products/${color}-car.jpg`,
        }
        this.setState(newState);
    }
  render() {
    return (
      <div>
        <h2>BaiTapChonXe</h2>
        <div className="row">
          <div className="col-8">
            <img
              className="img-fluid"
              src={this.state.src}
              alt=""
            />
          </div>
          <div className="col-4 d-flex flex-column justify-content-around">
            <div>
              <img src="./image/icons/icon-black.jpg" alt="" width={50} onClick={()=>this.changeColor("black")}/>
              <span className="ml-3">Black</span>
            </div>
            <div>
              <img src="./image/icons/icon-red.jpg" alt="" width={50} onClick={()=>this.changeColor("red")}/>
              <span className="ml-3">Red</span>
            </div>
            <div>
              <img src="./image/icons/icon-silver.jpg" alt="" width={50} onClick={()=>this.changeColor("silver")} />
              <span className="ml-3">Silver</span>
            </div>
            <div>
              <img src="./image/icons/icon-steel.jpg" alt="" width={50} onClick={()=>this.changeColor("steel")} />
              <span className="ml-3">Steel</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
