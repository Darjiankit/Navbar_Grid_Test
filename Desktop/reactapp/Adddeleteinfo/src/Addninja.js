import React, { Component } from "react"

class Addninja extends Component {

    state = {
        name: null,
        image: null,
        companyname: null
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value,
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        this.props.addNinjafun(this.state);

    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="Name">Name:</label>
                    <input type="text" id="name" onChange={this.handleChange} />

                    <label htmlFor="Image">Image:</label>
                    <input type="text" id="image" onChange={this.handleChange} />

                    <label htmlFor="CompanyName">CompanyName:</label>
                    <input type="text" id="companyname" onChange={this.handleChange} />

                    <button>Submit</button>
                </form>
            </div >
        )


    }
}
export default Addninja
