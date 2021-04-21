import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Task.css';


class Task extends Component {
    
    StyleComplete(){
        return{
            fontSize: '20px',
            color: this.props.task.done ? 'gray' : 'black',
            textDecoration: this.props.task.done ? 'line-through' : 'none'
        }
    } 

    render(){

        const {task} = this.props;
        //const redColor = {background: 'none'};
        return <div id="container" className="Container" style={this.StyleComplete()}>
            { task.title } - 
            { task.description } - 
            { task.done } - 
            { task.id }
            <input type="checkbox" onChange={this.props.checkDone.bind(this, task.id)} ></input>
            <button className="btnChecked" onClick={this.props.deleteTask.bind(this, task.id)}>x</button>
        </div>
    }
}

Task.propTypes = {
    task: PropTypes.object.isRequired
}
export default Task;