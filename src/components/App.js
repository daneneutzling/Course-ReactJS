import React, { Component } from 'react'
import Post from './Post'

export default class App extends Component {
    render() {
        return (
            <div>
                <h1>Comments about programming in React JS</h1>
                <Post title = 'What do you know about this?'/>
                <Post title = 'Do you think this is a good technology to work with?'/>
                <Post title = 'Is React JS a library or a framework?'/>
            </div>
        )
    }
}