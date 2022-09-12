import React, { Component } from "react";

export default class Phone extends Component {
  render() {
    console.log(this.props);
    const { product, handlePhoneDefault,handleCart } = this.props;
    return (
      <div>
        <div className="card">
          <img src={product.hinhAnh} alt={product.tenSP} />
          <div className="card-body">
            <h3>{product.tenSP}</h3>
            <div className="d-flex justify-content-between">
              <button
                className="btn btn-success"
                onClick={() => {
                  handlePhoneDefault(product);
                }}
              >
                Xem chi tiết
              </button>
              <button className="btn btn-info" onClick={()=>handleCart(product)}>Thêm giỏ hàng</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
