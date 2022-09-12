import React, { Component } from "react";

export default class Children extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <div
          className="p-5 mt-3"
          style={{ backgroundColor: `${this.props.color}` }}
        >
          {this.props.name}
          {this.props.children}
          {/* {this.props.color} */}
          <button className="btn btn-success ml-2" onClick={()=>this.props.logger?.("Hello BC32E")}>Logger</button>
        </div>
      </div>
    );
  }
}
