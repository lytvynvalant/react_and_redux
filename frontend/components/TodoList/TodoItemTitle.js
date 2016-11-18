import React from 'react';

const TodoItemTitle = (props) => {
  const { value, onClick, id } = props;
  return (
    <span onClick={ onClick.bind(this, id) }>{ value } id= { id }</span>
  );
};

TodoItemTitle.propTypes = {
  'onClick': React.PropTypes.func,
  'value':   React.PropTypes.number,
  'id':      React.PropTypes.number
};
export default TodoItemTitle;
