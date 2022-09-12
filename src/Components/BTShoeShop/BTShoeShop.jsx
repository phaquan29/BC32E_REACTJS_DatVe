import React, { Component } from "react";
import data from "./data.json";
import Shoe from "./Shoe";
export default class BTShoeShop extends Component {
  state = {
    // isShow: true,
    shoe: {
      id: 1,
      name: "Adidas Prophere",
      alias: "adidas-prophere",
      price: 350,
      description:
        "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      shortDescription:
        "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 995,
      image: "http://svcy3.myclass.vn/images/adidas-prophere.png",
    },
  };
  render() {
    return (
      <div className="container">
        <h2 className="text-center">BTShoeShop</h2>
        <div className="row">
          <div className="col-2">
            <p>Sidebar</p>
            <p>Nike</p>
            <p>Adidas</p>
            <p>Puma</p>
            <p>Thượng Đình</p>
          </div>
          <div className="col-10">
            {
              <div className="row">
                {data.map((shoe) => {
                  return (
                    <div className="col-4 mt-3" key={shoe.id}>
                      <Shoe product={shoe}></Shoe>
                    </div>
                  );
                })}
              </div>
            }
          </div>
        </div>
      </div>
    );
  }
}
