import React, { Component } from "react"

class Addtodo extends Component {
    state = {
        content: ""
    }
    handleonSubmit = (e) => {
        e.preventDefault();
        this.props.addtodo(this.state)
        this.setState({
            content: ""
        })
    }
    handleonChange = (e) => {
        this.setState({
            content: e.target.value
        })
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleonSubmit}>
                    <label>Add New Todo</label>
                    <input type="text" onChange={this.handleonChange} value={this.state.content} />
                </form>

            </div>
        )
    }
}

export default Addtodo
