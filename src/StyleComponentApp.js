import React, { Component } from 'react'
import styled from 'styled-components'

export default class StyleComponentApp extends Component {
    render() {

        const Div = styled.div`
            margin: 20px;
            border: 5px dashed green;
            &:hover {
                background-color: ${(props) => props.hoverColor}
            }
        `;

        const Title = styled.h1`
            font-family: Arial;
            font-size: 35px;
            text-align: center;
            color: palevioletred;
        `

        const Paragraph = styled.p`
            font-size: 25px;
            text-align: center;
            background-color: lightgreen;
        `
    
        return (
            <div>
                <Title>:: Native Cross Platform Mobile Application ::</Title>
                <p></p>
                <Div hoverColor="lightgreen">
                    <Paragraph>React Native</Paragraph>
                </Div>
            </div>
        )
    }
}
