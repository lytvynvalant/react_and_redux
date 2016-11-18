import React from 'react';
import { connect } from 'react-redux' ;
import { bindActionCreators } from 'redux' ;

import Actions from 'actions' ;
import DispatchPage from  '../DispatchPage' ;

import { TodoList } from  'components' ;

class SomePage1 extends DispatchPage {
  constructor (props) {
    super(props);

    this.addTask = this.addTask.bind(this);
    this.removeTask = this.removeTask.bind(this);
    this.updateTask = this.updateTask.bind(this);
  }

  addTask (value) {
    if (value) {
      this.props.addTask(value);
    }
  }

  removeTask (id) {
    this.props.removeTask(id);
  }

  updateTask (id, value) {
    this.props.updateTask(id, value);
  };
  render () {
    const TODOLIST_PROPS = {
      // set component store
      componentStore: this.props.storePage,
      addTask:        this.addTask.bind(this),
      removeTask:     this.removeTask.bind(this),
      updateTask:     this.updateTask.bind(this)
    };

    return (
      <div>
        <TodoList { ...TODOLIST_PROPS } />
        <h3 style={ {color: 'red'} }>This is SomePage1 page</h3>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    storePage: state.TaskReducer
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTask:    bindActionCreators(Actions.TASK.AddTask, dispatch),
    removeTask: bindActionCreators(Actions.TASK.RemoveTask, dispatch),
    updateTask: bindActionCreators(Actions.TASK.UpdateTask, dispatch)
  };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps)(SomePage1) ;

