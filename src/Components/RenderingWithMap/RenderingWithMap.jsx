import React, { Component } from 'react'

export default class RenderingWithMap extends Component {
    student=[
        {
            id:1,
            name:"A",
            age:20,
            address:"qwe"
        },
        {
            id:2,
            name:"B",
            age:22,
            address:"qwea"
        },
        {
            id:3,
            name:"C",
            age:23,
            address:"qwegh"
        },
    ]
  render() {
    return (
      <div>
        <table className="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Address</th>
                </tr>
            </thead>
            <tbody>
                {this.student.map((value)=>{
                    //Bắt buộc phải có thuộc tính key ở thẻ cha ngoài cùng
                    //Và giá trị của key là duy nhất (ko đc trùng lặp)
                    return(
                        <tr key={value.id}>
                            <td>{value.id}</td>
                            <td>{value.name}</td>
                            <td>{value.age}</td>
                            <td>{value.address}</td>
                        </tr>
                 )
                })}
            </tbody>
        </table>
      </div>
    )
  }
}
