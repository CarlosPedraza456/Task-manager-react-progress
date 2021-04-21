import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Task from './Task';

class tasks extends Component {
    render(){
        return this.props.tasks.map(task => 
        <Task className="Tasks"
        task={task} 
        key={task.id} 
        deleteTask={this.props.deleteTask} 
        checkDone={this.props.checkDone} 
        />)
    }
}

tasks.propTypes = {//esto no es necesario, solo para demostrar que se puede usar en los props de la app.
    tasks : PropTypes.array.isRequired
}
export default tasks;