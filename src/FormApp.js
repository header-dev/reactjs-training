import React, { Component } from 'react'

export default class FormApp extends Component {

    
    constructor(){
        super()

        this.state  = {
            data : '....Please Enter Name'
        }

        this.updateState = this.updateState.bind(this)
    }

    updateState(e){
        this.setState({data: e.target.value});
    }

    render() {
        const styles = {
           textStyles :{
            alignSelf: 'center',
            backgroundColor: 'green'
           },
           textStyles2 :{
            alignSelf: 'center',
            backgroundColor: 'red'
           }
        }

        return (
            <div>
                <input type="text" style={this.state.data ? styles.textStyles : styles.textStyles2} value={this.state.data} onChange={this.updateState} />
                <h4>{this.state.data}</h4>
            </div>
        )
    }


}
