import React, { Component } from 'react'

const list = [
    {
        id: '001',
        firstname: 'Kritawit',
        lastname: 'Bunket',
        year: 1982
    },
    {
        id: '002',
        firstname: 'Fonthip',
        lastname: 'Supapichai',
        year: 2000
    },
    {
        id: '003',
        firstname: 'Prapai',
        lastname: 'Yamrit',
        year: 1927
    },
    {
        id: '004',
        firstname: 'Kritawit2',
        lastname: 'Bunket2',
        year: 1990
    },
]


const RenderListApp = () => (
        <ul>
            {list.map(item => (
                <li key={item.id}>
                    <div>{ item.id }</div>
                    <div>{ item.firstname }</div>
                    <div>{ item.lastname }</div>
                    <div>{ item.year }</div>
                </li>
            ))}
        </ul>
)

export default RenderListApp;