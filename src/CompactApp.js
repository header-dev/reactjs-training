import React, { Component } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default class CompactApp extends Component {

    constructor(){
        super()
        this.updateSubmit = this.updateSubmit.bind(this)
        this.input = React.createRef()
    }

    updateSubmit(event){
        // toast.info("You have login successfully", {
        //     position: toast.POSITION.BOTTOM_CENTER
        // });

        alert('You have login successfully')

        event.preventDefault()
    }

    render() {
        return (
            <form onSubmit={this.updateSubmit}>
                <h1>::: Login Form Example :::</h1>
                <label>Username:
                    <input type="text" ref={this.input} />
                </label>
                <br/>
                <label>Password:
                    <input type="password" ref={this.input} />
                </label>
                <br/>
                <input type="submit" value="Submit" />
            </form>
        )
    }
}
