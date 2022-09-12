import React, { Component } from 'react'

export default class DataBinding extends Component {
    //Để truyền biến,hàm vào jsx ta bỏ vô dấu {}
  age=18
  renderMessage=()=>{
    return "Hello BC32E"
  }
  renderMessage1=()=>{
    const name="Lâm Chí Thiện"
    return <div className='display-4 text-danger'>Hello {name}</div>
  }
  render() {
    const name="Lâm Chí Thiện";
    const message="Hello";
    return (
      <div>
        <p>
            hello {name} {this.age}
        </p>
        <p>
            {message}
        </p>
        <p>
            {this.renderMessage()}
        </p>
        <p>
            {this.renderMessage1()}
        </p>
      </div>
      
    )
  }
}
