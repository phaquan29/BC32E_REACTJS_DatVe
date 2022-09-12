import React, { Component } from 'react'
//styleSheet
import './style.css'
//module
import style from './style.module.css'
export default class StyleComponent extends Component {
    /**
     * Có 3 cách sử dụng css
     * 1) styleSheet=>css áp dụng cho toàn bộ ứng dụng
     * 2) inline=>style trong thẻ html và bỏ vào {{}}
     * 3) module=>tạo file với tên là tên file.module.css và import style from ....
     * styleSheet và inline đc sử dụng phổ biến nhất
     */
  render() {
    return (
      <div className='container StyleComponent'>
        <h2 style={{color:'blue',fontWeight:'700'}}>StyleComponent</h2>
        <p className='title'>Cybersoft BC32E</p>
        <p className={`${style.heading} ${style.heading1} ${style['about-heading']}`}>Hello BC32E</p>
       </div>
    )
  }
}
