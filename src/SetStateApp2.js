import React, { Component } from 'react'

export default class SetStateApp2 extends Component {

    constructor(){
        super()

        this.state = {
            msg : "Welcome to Kritawit Bunket"
        }

        this.updateSetState = this.updateSetState.bind(this)

    }

    updateSetState() {
        this.setState({
            msg: "React Programming Course !!!"
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.updateSetState} >Update Set State</button>
                <h2>{ this.state.msg }</h2>
            </div>
        )
    }
}
