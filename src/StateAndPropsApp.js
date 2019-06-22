import React, { Component } from 'react'

export default class StateAndPropsApp extends Component {

    constructor(props){
        super(props)

        this.state = {
            header : "::: Header :::",
            content : "Created by Kritawit Bunket"
        }

    }

    render() {
        return (
            <div>
                <Header headerProps={this.state.header} />
                <Content contentProps={this.state.content} />
            </div>
        )
    }
}

class Header extends Component {
    render() {
        return (
            <div>
                <h1>{ this.props.headerProps }</h1>
            </div>
        )
    }
}

class Content extends Component {
    render() {
        return (
            <div>
                <h1>{ this.props.contentProps }</h1>
            </div>
        )
    }
}

