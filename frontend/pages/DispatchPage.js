import React            from 'react' ;
import {PAGES_CONSTANS} from 'constants' ;

class DispatchPage extends React.Component {
  constructor () {
    super();
    this.AVAILABLE_PAGES = PAGES_CONSTANS;
  }

  dispatchPage (page) {}

  render () {
    return (
      <div>
        <h1>THIS IS MAIN PAGE</h1>
        <div>{this.props.children}</div>
      </div>
    );
  }
}

DispatchPage.propTypes = {
  'children': React.PropTypes.func
};
export default DispatchPage ;
