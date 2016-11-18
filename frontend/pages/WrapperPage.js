import React from 'react' ;
import { bindActionCreators } from 'redux' ;
import { connect } from 'react-redux' ;

import { navigationRender } from 'services' ;
import Actions from 'actions' ;

class WrappedPage extends React.Component {
  componentDidMount () {
    this.props.fetchTasks();
  }
  render () {
    const leftSide = {
      width:         '30%',
      display:       'inline-block',
      verticalAlign: 'top'
    };

    const rightSide = {
      width:         '70%',
      display:       'inline-block',
      verticalAlign: 'top'
    };

    return (
      <div>
        <h1>THIS IS WRAPPER PAGE.</h1>

        <div>
          <div style={ {...leftSide} }>
            SideBar

            { navigationRender(this) }
          </div>
          <div style={ {...rightSide} }>
            { this.props.children }
          </div>
        </div>

      </div>
    );
  }
}

WrappedPage.propTypes = {
  'children':   React.PropTypes.object,
  'fetchTasks': React.PropTypes.func
};

const mapStateToProps = (state) => {
  return {
    storePage: state.TaskReducer
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTasks: bindActionCreators(Actions.TASK.fetchTask, dispatch)
  };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps)(WrappedPage);
