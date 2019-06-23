import React, { Component } from 'react'
import ReactDOM from 'react-dom'

export default class FindDomNodeApp extends Component {

    constructor(){
        super()

        this.findDomNodeHandler1 = this.findDomNodeHandler1.bind(this)
        this.findDomNodeHandler2 = this.findDomNodeHandler2.bind(this)
    }

    findDomNodeHandler1(){
        var myDiv1 = document.getElementById('myDiv1')
        ReactDOM.findDOMNode(myDiv1).style.color = 'blue'
    }

    findDomNodeHandler2(){
        var i = 16
        var myDiv2 = document.getElementById('myDiv2')
        ReactDOM.findDOMNode(myDiv2).style.color = 'red'
        ReactDOM.findDOMNode(myDiv2).style.fontSize = `${i++}px`;
    }

    render() {
        return (
            <div>
                <h1>::: Find Dom Node :::</h1>
                <button onClick={this.findDomNodeHandler1}>ReactJS</button>
                <button onClick={this.findDomNodeHandler2}>VueJS</button>
                <h3 id="myDiv1">Welcome to ReactJS</h3>
                <h3 id="myDiv2">Welcome to VueJS</h3>
            </div>
        )
    }
}
