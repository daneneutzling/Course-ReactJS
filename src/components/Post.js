import React, { Component } from 'react'
import Comment from './Comment'

export default class Post extends Component {

    constructor (props) {
        super(props)

        this.state = {
            comments: [],
            NewComment: ''
        }
        
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }


    handleSubmit(e) {
        this.setState({
            comments: [
                ...this.state.comments,
                { text: this.state.NewComment }
            ]
        });

        this.setState({ NewComment: '' })

        e.preventDefault();
    }


    handleChange(e) {
        this.setState({ NewComment: e.target.value })
    }



    render() {
        return (
            <div>
                <h2>{ this.props.title }</h2>

                <form onSubmit={this.handleSubmit}>
                    <input 
                    value={this.state.NewComment}
                    onChange={this.handleChange}
                    />
                    <button type='submit'>Comentar</button>
                </form>
                
                {this.state.comments.map((comment, index) => {
                    return <Comment key={index} text={comment.text}/>
                })}
            </div>
        )
    }
}
