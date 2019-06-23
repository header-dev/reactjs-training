import React, { Component } from 'react'

export default class JSObjStyleApp extends Component {
    render() {
        const styels = {
            color: 'Blue',
            backgroundColor: 'lightBlue',
            padding: '10px',
            fontFamily: "Arial"
        }

        return (
            <div>
                <h1 style={styels}>::: Javascript Full Stack Developer :::</h1>
                <p>Angular, React, Vue and Express</p>
            </div>
        )
    }
}
