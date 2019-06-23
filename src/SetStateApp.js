import React, { Component } from 'react'

export default class SetStateApp extends Component {

    constructor() {
        super()

        this.state = {
            data : []
        }

        this.setStateHandler = this.setStateHandler.bind(this)
        

    }

    setStateHandler() {

        var item = (
            <li>React Programming</li>
        )

        var myArray = this.state.data.slice()

        myArray.push(item)

        this.setState({
            data : myArray
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.setStateHandler}>Set Value</button>
                <lu>
                    {this.state.data}
                </lu>
            </div>
        )
    }
}
