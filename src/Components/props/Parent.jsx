import React, { Component } from 'react'
import Children from './Children'
export default class Parent extends Component {
  render() {
    //prop là dữ liệu truyền từ component cha xuống component con
    //props:property
    //Ngoài dữ liệu là string,number,boolean
    //props có thể là một object
    //Ở component nhận props => props ko thể thay đổi đc
    //Luôn luôn có 1 probs mặc định là children->là giá trị nằm giữa hai thẻ
    const product={
      name:'Iphone',
      price:1000,
      color:'black',
    }
    const logger=(message)=>{
      alert(message)
    }
    return (
      <div>
        <Children content="BC32E" color="red" name="Hello BC32E" logger={logger} product={product}></Children>
        <Children content="BC32E" color="green" name="Cybersoft" logger={logger} product={product}></Children>
        <Children content="BC32E" color="purple" name="Lâm Chí Thiện" logger={logger} product={product}></Children>
        <Children content="BC32E" color="blue" name="Lâm Hoàng Phúc" product={product}></Children>
        <Children >Hello world</Children>

      </div>
    )
  }
}
