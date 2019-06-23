import React, { Component } from 'react'

export default class ForceUpdateStateApp extends Component {

    constructor(){
        super()

        this.forceUpdateState = this.forceUpdateState.bind(this)

    }

    forceUpdateState(){
        this.forceUpdate()
    }

    render() {
        return (
            <div>
                <h1>::: Force Update State Demo :::</h1>
                <h3>Random number : {Math.random()}</h3>
                <button onClick={this.forceUpdateState}>Update</button>
            </div>
        )
    }
}
