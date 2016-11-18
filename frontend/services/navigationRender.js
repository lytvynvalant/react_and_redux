import React from 'react' ;
import {Link}  from 'react-router' ;

export default function (data) {
  const newArra = data.props.route.childRoutes.slice();

  return newArra.map(function (item, index) {
    return (<div key={ index } style={ {marginLeft: '10px'} }>
      <Link to={ item.path }>{ item.path }</Link>
    </div>);
  });
}

