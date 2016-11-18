import React from 'react' ;

class AddingInput extends React.Component {
  constructor (props) {
    super(props);

    const {value, id, onAdd, onUpdate} = this.props;

    this.state = {value, id};

    // parents method
    this.onAdd = onAdd;
    this.onUpdate = onUpdate;

    this.onChange = this.onChange.bind(this);
    this.onKeyPress = this.onKeyPress.bind(this);
  }

  onKeyPress (e) {
    if (e.charCode === 13) {
      if (this.state.id == null) {
        this.onAdd(this.state.value);
      }

      if (this.state.id) {
        this.onUpdate(this.state.id, e.target.value);
      }

      // clean state
      this.setState({
        value: '',
        id:    null
      });
    }
  }
  onChange (e) {
    this.setState({ value: e.currentTarget.value });
  }
  render () {
    const { id } = this.state;

    const inputProps = {
      onKeyPress: this.onKeyPress,
      value:      this.state.value,
      id
    };

    return (
      <input type='text' { ...inputProps } onChange={ this.onChange } />
    );
  };
}

AddingInput.propTypes = {
  'id':       React.PropTypes.number,
  'onAdd':    React.PropTypes.func,
  'onUpdate': React.PropTypes.func,
  'value':    React.PropTypes.number
};

export default AddingInput;
