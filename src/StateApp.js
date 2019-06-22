import React, { Component } from 'react'

export default class StateApp extends Component {

    constructor(props){
        super(props)

        this.state = {
            header : "::: Javascript Library :::",
            content : "ReactJS"
        }

    }


    render() {
        return (
            <div>
                <h1>{ this.state.header }</h1>
                <h1>{ this.state.content }</h1>
            </div>
        )
    }
}
