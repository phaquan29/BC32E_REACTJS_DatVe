import React, { Component } from "react";
import ChiTietSP from "./ChiTietSP";
import phones from "./data.json";
import GioHang from "./GioHang";
import Phone from "./Phone";
export default class BTPhone extends Component {
  state = {
    phoneDefault: {
      maSP: 1,
      tenSP: "VinSmart Live",
      manHinh: "AMOLED, 6.2, Full HD+",
      heDieuHanh: "Android 9.0 (Pie)",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 5700000,
      hinhAnh: "./image/phones/vsphone.jpg",
    },
    cart: [
      {
        maSP: 1,
        tenSP: "VinSmart Live",
        manHinh: "AMOLED, 6.2, Full HD+",
        heDieuHanh: "Android 9.0 (Pie)",
        cameraTruoc: "20 MP",
        cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
        ram: "4 GB",
        rom: "64 GB",
        giaBan: 5700000,
        hinhAnh: "./image/phones/vsphone.jpg",
        soLuong: 1,
      },
    ],
  };
  handlePhoneDefault = (phone) => {
    this.setState({
      phoneDefault: phone,
    });
  };
  handleCart = (phoneClick) => {
    //spread operator
    const value = { ...phoneClick, soLuong: 1 };
    const data = [...this.state.cart];
    const index = data.findIndex((phone) => phone.maSP === phoneClick.maSP);
    if (index !== -1) {
      data[index].soLuong += 1;
    } else {
      data.push(value);
    }
    //set lại state thêm vào state sản phẩm đc click
    this.setState({
      cart: data,
    });
  };
  handleRemoveCart = (maSP) => {
    console.log(maSP);
    const data = this.state.cart.filter((item) => item.maSP !== maSP);
    this.setState({
      cart: data,
    });
  };
  handleQuantity = (maSP, quantity) => {
    // console.log("maSP",maSP);
    // console.log("quantity",quantity);
    const data = [...this.state.cart];
    const index = data.findIndex((phone) => phone.maSP === maSP);
    if (data[index].soLuong>1 || quantity>0) {
      data[index].soLuong += quantity;
    }else if(window.confirm('Bạn muốn xóa sản phẩm này ko?')){
      data.splice(index,1)
    }
    this.setState({
      cart: data,
    });
  };
  render() {
    return (
      <div>
        <GioHang
          cart={this.state.cart}
          handleRemoveCart={this.handleRemoveCart}
          handleQuantity={this.handleQuantity}
        ></GioHang>
        <div className="row">
          {phones.map((phone) => {
            return (
              <div className="col-4" key={phone.maSP}>
                <Phone
                  product={phone}
                  handlePhoneDefault={this.handlePhoneDefault}
                  handleCart={this.handleCart}
                ></Phone>
              </div>
            );
          })}
        </div>
        <ChiTietSP phone={this.state.phoneDefault}></ChiTietSP>
      </div>
    );
  }
}
