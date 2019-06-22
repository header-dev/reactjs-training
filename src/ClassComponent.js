import React, { Component } from 'react'

export default class ClassComponent extends Component {

    constructor(){
        super()

        this.state = {
            data : [
                {
                    "name" : "C# Programming"
                },
                {
                    "name" : "Java Programming"
                },
                {
                    "name" : "Javascript Programming"
                },
                {
                    "name" : "Pascal Programming"
                },
                {
                    "name" : "Ajax"
                }
            ]
        }

    }

    render() {
        return (
            <div>
                <SubjectName />
                <ul>
                    {
                    this.state.data.map((item) => <List data={item} />)
                    }
                </ul>
            </div>
        )
    }
}



class SubjectName extends Component {
    render() {
        return (
            <div>
                <h1>::: Subject Name Detail :::</h1>
            </div>
        );
    }
}

class List extends Component {
    render() {
        return (
            <div>
                <h1>- { this.props.data.name }</h1>
            </div>
        );
    }
}