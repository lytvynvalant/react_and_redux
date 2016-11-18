import React from 'react';

// components
import TodoButton           from './TodoButton' ;
import TodoItemTitle        from './TodoItemTitle' ;
import TodoItem             from './TodoItem' ;
import AddingInput          from './AddingInput' ;

class TodoList extends React.Component {
  constructor (props) {
    super(props);

    this.getById = this.getById.bind(this);
    this.selectItem = this.selectItem.bind(this);

    this.addTask = this.props.addTask.bind(this);
    this.removeTask = this.props.removeTask.bind(this);
    this.updateTask = this.props.updateTask.bind(this);

    this.state = {
      curItemTitile: 1,
      curItemId:     null
    };
  }
  getById (id) {
    const result = this.props.componentStore.filter(function (item) {
      if (item.id === id) {
        return item;
      }
    });

    if (result[0] === undefined) {
      throw new Error("Cant't find element by id");
    }

    return result[0];
  }

  selectItem (id) {
    this.setState({curItemTitile: this.getById(id).value, curItemId: id});
    // set child state
    this.refs.input.setState(this.getById(id));
  }

  render () {
    const items = this.props.componentStore.map((item, index) => {
      const todoItemProps = {
        onClickRemove: this.removeTask,
        onClickUpdate: this.selectItem,
        key:           index,
        TodoButton,
        TodoItemTitle,
        item
      };

      return <TodoItem { ...todoItemProps } />;
    });

    const addingInputProps = {
      value: this.state.curItemTitile,
      id:    this.state.curItemId,

      onSelect: this.selectItem,

      onAdd:    this.addTask,
      onUpdate: this.updateTask
    };

    return (
      <div>
        <AddingInput { ...addingInputProps } ref='input' />
        { items }
      </div>
    );
  }
}

TodoList.propTypes = {
  componentStore: React.PropTypes.array,
  addTask:        React.PropTypes.func,
  removeTask:     React.PropTypes.func,
  updateTask:     React.PropTypes.func
};

export default TodoList;
