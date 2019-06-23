import React, { Component } from 'react'
import styles from './myStyles.module.css'

export default class CSSModuleApp extends Component {
    render() {
        return (
            <div>
                <h1 className={styles.mystyle}>::: Web Development :::</h1>
                <p className={styles.parastyle}>-- Create by Kritawit --</p>
            </div>
        )
    }
}