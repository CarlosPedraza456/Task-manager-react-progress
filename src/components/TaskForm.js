import React, { Component } from 'react';
import './Task.css';

export default class TaskForom extends Component {
    
    state = {
        title:'',
        description: ''
    }

    onSubmit = e => {
        this.props.addTask(this.state.title, this.state.description);
        console.log('submiting..');
        e.preventDefault();
    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render(){
        //this.props.addTask('title one', 'description one');
        return(
            <form className="taskform" onSubmit={this.onSubmit} >
                <input 
                    type="text" 
                        placeholder="Write a task" 
                            onChange={this.onChange} 
                                value={this.state.title}
                                    name="title"></input>
                <br></br>
                <br></br>
                <textarea 
                    placeholder="Write a description" 
                        onChange={this.onChange} 
                            value={this.state.description}
                                name="description"></textarea>
                <br></br>
                <br></br>
                <button type="submit">save the task</button>
            </form>
        )
    }
}