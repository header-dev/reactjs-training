import React, { Component } from 'react'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

export default class HandleFormApp extends Component {

    constructor(props){
        super(props)
        this.state = { value: '' }
        
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)

    }

    handleChange(event){
        this.setState({
            value: event.target.value
        })
    }

    handleSubmit(event){
        toast(`Submit the ${this.state.value} successfully!`)
        event.preventDefault()
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h1>::: Controlled Form :::</h1>
                <label>
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <br />
                <input type="submit" value="Submit" />
                <ToastContainer />
            </form>
        )
    }
}
