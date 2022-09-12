import React, { Component } from "react";
import { connect } from "react-redux";

class ChiTietSP extends Component {
  render() {
    const { phone } = this.props;
    return (
      <div>
        <div className="row">
          <div className="col-4">
            <img src={phone.hinhAnh} alt="" className="img-fluid" />
          </div>
          <div className="col-8">
            <h1>Thông số kỹ thuật</h1>
            <table className="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td>Màn hình</td>
                  <td>{phone.manHinh}</td>
                </tr>
                <tr>
                  <td>Hệ điều hành</td>
                  <td>{phone.heDieuHanh}</td>
                </tr>
                <tr>
                  <td>Camera trước</td>
                  <td>{phone.cameraTruoc}</td>
                </tr>
                <tr>
                  <td>Camera sau</td>
                  <td>{phone.cameraSau}</td>
                </tr>
                <tr>
                  <td>Ram</td>
                  <td>{phone.ram}</td>
                </tr>
                <tr>
                  <td>Rom</td>
                  <td>{phone.rom}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (rootReducers) => {
  return {
    phone: rootReducers.baiTapPhone.phoneSelected,
  };
};
export default connect(mapStateToProps)(ChiTietSP);
