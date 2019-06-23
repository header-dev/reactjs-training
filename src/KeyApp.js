import React, { Component } from 'react'

export default class KeyApp extends Component {

    constructor(){
        super()
        
        this.state = {
            data: [
                {
                    component: 'First',
                    id: 1
                },
                {
                    component: 'Second',
                    id: 2
                },
                {
                    component: 'Three',
                    id: 3
                }
            ]
        }
    }

    render() {
        return (
            <div>
                {this.state.data.map((dynamicComponent, i) => 
                        <Content key={i} componentData={dynamicComponent}
                />)}
            </div>
        )
    }
}

class Content extends Component {
    render(){
        return (
            <div>
                <div>{ this.props.componentData.component }</div>
                <div>{ this.props.componentData.id }</div>
            </div>
        )
    }
}
