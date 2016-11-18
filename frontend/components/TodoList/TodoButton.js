import React from 'react' ;

const TodoButton = (props) => {
  const { onClick, id } = props;

  const styleButton = {
    marginLeft: '5px',
    color:      'green'
  };

  return (
    <span onClick={ onClick.bind(this, id) }
      style={ {...styleButton} }>remove
    </span>
  );
};

TodoButton.propTypes = {
  'onClick': React.PropTypes.func,
  'id':      React.PropTypes.number
};
export default TodoButton;
