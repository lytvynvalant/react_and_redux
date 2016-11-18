import React from 'react' ;

class TodoItem extends React.Component {
  render () {
    const { onClickUpdate, onClickRemove, TodoButton, TodoItemTitle, item } = this.props;
    const { value, id } = item;

    const todoItemTitleProps = {
      onClick: onClickUpdate,
      value,
      id
    };

    const todoButtonProps = {
      onClick: onClickRemove,
      id
    };

    return (
      <div>
        <TodoItemTitle { ...todoItemTitleProps } />
        <TodoButton { ...todoButtonProps } />
      </div>
    );
  }
};

TodoItem.propTypes = {
  item:          React.PropTypes.object,
  onClickUpdate: React.PropTypes.func,
  onClickRemove: React.PropTypes.func,
  TodoButton:    React.PropTypes.func,
  TodoItemTitle: React.PropTypes.func
};

export default TodoItem;
