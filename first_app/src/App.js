import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class app extends Component {

  constructor(props) {
    super(props)
    this.state = {
      data: [
        { id: 1, name: "Matheus", age: "20" },
        { id: 2, name: "Kleyton", age: "20" },
        { id: 3, name: "Vitoria", age: "20" }
      ]
    }
  }

  switchNameHandler = () => {
    this.setState({
      data: [
        { id: 1, name: "Matheus", age: "23" },
        { id: 2, name: "Kleyton", age: "30" },
        { id: 3, name: "Vitoria", age: "30" }
      ]
    })
  }

  onChange = (e, id) => {

    const { data } = this.state;

    this.setState({
      data: data.map(item => {
        if (item.id === id) {
          item.name = e.target.value
          return item
        } else {
          return item
        }
      })
    })

    // let newData = data.find(item => (item.id === id) ? item : null)

    // let newData = data;

    // newData.splice(index, 1)

    // console.log(newData)

    // this.setState({
    //   data: [

    //   ]
    // })
    // console.log(e.target.value)
  }

  render() {

    const { data } = this.state;


    const persons = data.map((item, index) => (
      <Person name={item.name} age={item.age} onChange={(e) => this.onChange(e, item.id)} key={index} value={item.name} />
    ));

    return (
      <div className="App">
        {persons}
        <button onClick={this.switchNameHandler}>New person</button>
      </div>
    )

  }

}



export default app;
