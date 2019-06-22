import React, { Component } from 'react'

export default class PropsApp1 extends Component {

    render() {
        return (
            <div>
                <h1>{ this.props.headerProps }</h1>
                <h1>{ this.props.contentProps }</h1>
            </div>
        )
    }
}
