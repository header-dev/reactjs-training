import React, { Component } from 'react'

export default class StatelessFullApp extends Component {
    constructor(){
        super()
        this.state = {
            data: [
                {
                    "id" : 1,
                    "name" : "Kritawit Bunket",
                    "score" : "85"
                },
                {
                    "id" : 2,
                    "name" : "Fonthip Supapichai",
                    "score" : "139"
                },
                {
                    "id" : 3,
                    "name" : "Prapai Yamrit",
                    "score" : "299"
                }
            ]
        }
    }

    render() {
        return (
            <div>
                <Header />
                <table>
                    <tbody>
                        {
                            this.state.data.map((person, i) => 
                                <TableRow key={i} data={person} />
                            )
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

class Header extends Component {
    render() {
        return (
            <div>
                <h1>::: Header List :::</h1>
            </div>
        );
    }
}

class TableRow extends Component {
    render() {
        return (
                <tr>
                    <td>{this.props.data.id}</td>
                    <td>{this.props.data.name}</td>
                    <td>{this.props.data.score}</td>
                </tr>
        );
    }
}

