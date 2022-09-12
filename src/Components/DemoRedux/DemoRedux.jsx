import React, { Component } from 'react'
import { connect } from 'react-redux'

class DemoRedux extends Component {
  render() {
    const {demoRedux,increase,decrease}=this.props
    return (
    // console.log(this.props)
      
      <div className='container'>
       <p className="display-3">Number: {demoRedux}</p>
       <button className='btn btn-success mr-5' onClick={increase}>+</button>
       <button className='btn btn-danger' onClick={decrease}>-</button>
      </div>
    )
  }
}
//Hàm này sử dụng để lấy state trên store
const mapStateToProps=(rootReducers)=>{
    return{
        demoRedux: rootReducers.demoRedux,
    }
}
//Hàm này sử dụng để lấy state trên store và thay đổi
const mapDispatchToProps=(dispatch)=>{
   return{
       increase:()=>{
         dispatch({
            type:"TĂNG_SỐ",
            payload:1,
         })
       },
       decrease:()=>{
        dispatch({
           type:"GIẢM_SỐ",
           payload:-1,
        })
      }
   }
}
export default connect(mapStateToProps,mapDispatchToProps)(DemoRedux)