import React, { Component } from 'react'

export default class EventApp extends Component {

    constructor(props){
        super(props)

        this.state = {
            companyName: ''
        }

    }

    changeText(event){
        this.setState({
            companyName: event.target.value
        })
    }

    render() {
        return (
            <div>
                <h2>::: Event Example :::</h2>
                <label htmlFor="name">Enter Company Name:</label>
                <input type="text"
                    id="companyName"
                    onChange={this.changeText.bind(this)} />
                <h4>Your company is : { this.state.companyName }</h4>
            </div>
        )
    }
}
