import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'

const Contacts = ({match}) => <p>{ match.params.id }</p>

export default class Contact extends Component {
    render() {

        const { url } = this.props.match

        return (
            <div>
                <h1>Welcome to Contact</h1>
                <strong>-- Select Contact Name --</strong>
                <ul>
                    <li>
                        <Link to="/contact/Kritawit">Kritawit</Link>
                    </li>
                    <li>
                        <Link to="/contact/Fonthip">Fonthip</Link>
                    </li>
                    <li>
                        <Link to="/contact/Prapai">Prapai</Link>
                    </li>
                </ul>
                <Route path="/contact/:id" component={Contacts} />
            </div>
        )
    }
}
