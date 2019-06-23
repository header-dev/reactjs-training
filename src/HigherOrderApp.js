import React, { Component } from 'react'

var newData = {
    data: '....Data from HOC Component'
}

var MyHOC = ComposedComponent => class extends Component {
    
    componentDidMount(){
        this.setState({
            data: newData.data
        })
    }

    render(){
        return <ComposedComponent {...this.props} {...this.state} />
    }

}

class HigherOrderApp extends Component {
    render(){
        return (
            <div>
                <h1>{ this.props.data }</h1>
            </div>
        )
    }
}

export default MyHOC(HigherOrderApp)