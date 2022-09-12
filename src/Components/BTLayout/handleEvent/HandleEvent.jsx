import React, { Component } from 'react'

export default class HandleEvent extends Component {
    showAlert=()=>{
        alert("BC32E Cybersoft");
    }
    showMessage=(mess)=>{
        alert(mess)
    }
    showMessage1=(mess)=>{
        const show=()=>{
            alert(mess)
        }
        return show
    }
    //mọi hàm xử lý sự kiện đều có 1 tham số event
    showMessage2=(event)=>{
        console.log(event)
        alert(event.target.innerHTML)
    }
  render() {
    return (
      <div>
        <button className='btn btn-success' onClick={this.showAlert}>click me!</button>
        <button className='btn btn-danger ml-2' onClick={()=>{
            alert("Hello mọi người lại là mình đây")
        }}>click me 2!</button>
        <div className='mt-5'>
            {/* Nếu hàm có tham số khi sử dụng onclick phải thêm ()=> */}
            <div className="btn btn-outline-info" onClick={()=>this.showMessage("cybersoft")}>Show Message</div>
        </div>
        <div className="mt-5">
            <button className="btn btn-outline-warning" onClick={this.showMessage1("cybersoft")}>Show message</button>
        </div>
        <div className="mt-5">
            <button className="btn btn-outline-primary" onClick={(event)=>this.showMessage2(event)}>Show Event</button>
        </div>
        <div className="mt-5" onClick={(e)=>{
            console.log(e.target)//trả về thẻ bên trong thẻ div này
            console.log(e.currentTarget)//trả về chính thẻ div này
            }}>
            <input type="text" className="form-control" onChange={(event)=>{console.log(event.target.value)}}/>
        </div>
      </div>
    )
  }
}
