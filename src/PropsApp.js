import React, { Component } from 'react'
import PropsApp1 from './PropsApp1';

export default class PropsApp extends Component {
    render() {
        return (
            <div>
                <PropsApp1 headerProps="Header" contentProps="Content Data" />
            </div>
        )
    }
}
