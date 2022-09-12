import React, { Component } from 'react'

export default class State extends Component {
    //state nó là 1 object đặc biệt của class component
    //dùng để lưu trữ dữ liệu của component và phản hồi các tương tác của người dùng
    //Khi state thay đổi thì component sẽ đc render lại (hàm render sẽ chạy lại)
    //State ko thể gán giá trị trực tiếp mà phải thông qua setState
    //setState là hàm bất đồng bộ
    state={
        isShowMessage:false,
        number:1,
    }
    showMessage=()=>{
        const newState={
            isShowMessage:true,
        }
        this.setState(newState)
    }
    hideMessage=()=>{
      console.log("Giá trị state trước khi thay đổi",this.state)
        const newState={
            isShowMessage:false,
        }
        this.setState(newState,()=>{
          console.log("Giá trị state hiện tại",this.state)
        })
        console.log("giá trị state sau khi thay đổi",this.state)
    }
    increase=()=>{
      const newState={
        number: this.state.number+1,
      }
      // this.setState(newState)
      //cách viết ở dưới (callback) giúp giải quyết bất đồng bộ
      this.setState((state)=>{
        return{
          number: state.number+1,
        }
      })
      this.setState((state)=>{
        return{
          number: state.number+1,
        }
      })
    }
    decrease=()=>{
      const newState={
        number: this.state.number-1,
      }
      this.setState(newState)
    }
  render() {
    return (
      <div className='container'>
        <div>
            <button className="btn btn-success" onClick={this.showMessage}>Show</button>
            <button className="btn btn-danger ml-5" onClick={this.hideMessage}>Hide</button>
        </div>
          {this.state.isShowMessage && (
            <p className='text-danger display-3'>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus asperiores eum similique amet quasi laudantium impedit obcaecati aut possimus quod?
            </p>
          )}
        <hr />
        <div>
          <h1>{this.state.number}</h1>
          <button className='btn btn-success mr-5' onClick={this.increase}>+</button>
          <button className='btn btn-danger' onClick={this.decrease}>-</button>
        </div>
      </div>
    )
  }
}
