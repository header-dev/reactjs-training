import React, { Component } from 'react'
import ReactDOM from 'react-dom';

export default class RefApp extends Component {
    constructor(props){
        super(props)
        
        this.state = {
            data : ''
        }

        this.updateState = this.updateState.bind(this)
        this.clearInput = this.clearInput.bind(this)

    }

    updateState(e) {
        this.setState({
            data: e.target.value
        })
    }

    clearInput(){
        this.setState({
            data:''
        })

        ReactDOM.findDOMNode(this.refs.myInput).focus()
    }
    
    render() {
        return (
            <div>
                <input value={this.state.data} onChange={this.updateState} ref="myInput" />
                <button onClick={this.clearInput}>CLEAR</button>
                <h4>{ this.state.data }</h4>
            </div>
        )
    }
}
