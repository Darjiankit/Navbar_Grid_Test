import React, { Component } from 'react';
import Ninja from "./ninja.js";
import Addninja from "./Addninja"
class App extends Component {
  state = {
    company: [
      { name: "ANKIT", image: "j", companyname: "privat", id: "1" },
      { name: "HITESH", image: "f", companyname: "limited", id: "2" },
      { name: "RAVI", image: "e", companyname: "yours", id: "3" }
    ]
  }
  addNinjafun = (ninja) => {
    ninja.id = Math.random();
    let companies = [...this.state.company, ninja];
    this.setState({
      company: companies
    })

  }
  Deleteitem = (id) => {
    let company = this.state.company.filter(ninja => {
      return ninja.id !== id
    })
    this.setState({
      company: company
    })
  }
  render() {
    return (
      <div className="App">
        <Ninja Deleteitem={this.Deleteitem} comp={this.state.company} />
        <Addninja addNinjafun={this.addNinjafun} />
      </div >
    );
  }
}

export default App;
