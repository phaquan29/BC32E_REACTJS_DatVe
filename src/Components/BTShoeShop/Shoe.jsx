import React, { Component } from "react";

export default class Shoe extends Component {
  render() {
    //destructuring
    const {product}=this.props
    return (
      <div>
        <div className="card">
        
          <img src={product.image} alt={product.name} />
          <div className="card-body">
            <p>{product.name}</p>
            <p>{product.price}$</p>
            <button
              className="btn btn-success"
              // onClick={() => {
              //   console.log(film);
              //   this.setState({
              //     phim: film,
              //   });
              // }}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    );
  }
}
