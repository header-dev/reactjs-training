import React, { Component } from 'react'

export default class Stateless_App extends Component {
    render() {
        return (
            <div>
                <Header />
                <Content />
            </div>
        )
    }
}

class Header extends Component {
    render() {
        return (
            <div>
                <h1>::: Header Dev Company :::</h1>
            </div>
        )
    }
}

class Content extends Component {
    render() {
        return (
            <div>
                <h1>Content</h1>
                <p>As ab Pearson VUE Authorized Testing Center you can register.</p>
            </div>
        )
    }
}

