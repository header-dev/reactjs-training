import React, { Component } from 'react'
import PropTypes from 'prop-types';



class PropsValidationApp extends Component {
    render() {
        return (
            <div>
                <h1>ReactJS Props validation example</h1>
                <table>
                    <tr>
                        <th>Type</th>
                        <th>Value</th>
                        <th>Valid</th>
                    </tr>
                    <tr>
                        <td>Array</td>
                        <td>{  this.props.propsArray }</td>
                        <td>{ this.props.propsArray ? "true" : "false" }</td>
                    </tr>
                    <tr>
                        <td>Boolean</td>
                        <td>{ this.props.propsBool }</td>
                        <td>{ this.props.propsBool ? "true" : "false" }</td>
                    </tr>
                    <tr>
                        <td>Function</td>
                        <td>{ this.props.propsFunc(5) }</td>
                        <td>{ this.props.propsFunc(5) ? "true" : "false" }</td>
                    </tr>
                    <tr>
                        <td>String</td>
                        <td>{ this.props.propsString }</td>
                        <td>{ this.props.propsString ? "true" : "false" }</td>
                    </tr>
                    <tr>
                        <td>Number</td>
                        <td>{ this.props.propsNumber }</td>
                        <td>{ this.props.propsNumber ? "true" : "false" }</td>
                    </tr>
                </table>
            </div>
        )
    }
}

PropsValidationApp.propTypes = {
    propsArray: PropTypes.array.isRequired,
    propsBool: PropTypes.bool.isRequired,
    propsFunc: PropTypes.func,
    propsNumber: PropTypes.number,
    propsString: PropTypes.string
}

PropsValidationApp.defaultProps = {
    propsArray: [1,2,3,4,5],
    propsBool: true,
    propsFunc: function(x){return x+5},
    propsNumber: 1,
    propsString: 'Kritawit'
}

export default PropsValidationApp;