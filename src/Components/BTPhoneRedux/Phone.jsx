import React, { Component } from "react";
import { connect } from "react-redux";

class Phone extends Component {
  render() {
    const { product, handleCart, handlePhoneDefault } = this.props;
    return (
      <div>
        <div className="card">
          <img src={product.hinhAnh} alt={product.tenSP} />
          <div className="card-body">
            <h3>{product.tenSP}aa</h3>
            <div className="d-flex justify-content-between">
              <button
                className="btn btn-success"
                onClick={() => {
                  handlePhoneDefault(product);
                }}
              >
                Xem chi tiết
              </button>
              <button
                className="btn btn-info"
                onClick={() => handleCart(product)}
              >
                Thêm giỏ hàng
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    handlePhoneDefault: (productDetail) => {
      dispatch({
        type: "CHANGE_PRODUCT_SELECTED",
        payload: productDetail,
      });
    },
  };
};
export default connect(null, mapDispatchToProps)(Phone);
