import React, { Component } from 'react'

export default class ChangeStateApp extends Component {

    constructor(){
        super()

        this.state = {
            displayBio : false
        }
        this.toggleDisplayBio = this.toggleDisplayBio.bind(this)

    }

    toggleDisplayBio(){
        this.setState({
            displayBio : !this.state.displayBio
        })
    }

    render() {
        return (
            <div>
                <h1>::: Welcome to React Programming</h1>
                {
                    this.state.displayBio ? (
                        <div>
                            <p><h4>React JS is Javascript Library</h4></p>
                            <button onClick={this.toggleDisplayBio}>Show Less</button>
                        </div>
                    ) : (
                        <div>
                            <button onClick={this.toggleDisplayBio}>Hidden Less</button>
                        </div>
                    )
                }
            </div>
        )
    }
}
