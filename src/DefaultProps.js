import React, { Component } from 'react'

class DefaultProps extends Component {

    render() {
        return (
            <div>
                <h1>{ this.props.headerProps }</h1>
                <h1>{ this.props.contentProps }</h1>
            </div>
        )
    }
}

DefaultProps.defaultProps = {
    headerProps : "Welcome to My World",
    contentProps : "Using Javascript Framework and Library"
}

export default DefaultProps;