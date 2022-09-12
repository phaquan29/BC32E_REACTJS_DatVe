import React, { Component } from 'react'
import Content from './Content'
import Header from './Header'
import Navigation from './Navigation'
import Footer from './Footer'
export default class home extends Component {
  render() {
    return (
      <div className='container'>
        <Header></Header>
        <div className="row">
            <div className="col-4 pr-0"><Navigation/></div>
            <div className="col-8 pl-0"><Content/></div>
        </div>
        <Footer/>
      </div>

    )
  }
}
