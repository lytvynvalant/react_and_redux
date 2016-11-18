import React from 'react' ;
import { Router,
  Route,
  IndexRoute,
  browserHistory } from 'react-router' ;

// constants
import { PAGES_CONSTANS } from 'constants' ;
// pages
import { WrapperPage,
  SomePage1,
  SomePage2  } from 'pages' ;

// filters on changes state
browserHistory.listen(function (event) {
    // event work on changes of route
});

export default() => {
  return <Router history={ browserHistory }>
    <Route path={ PAGES_CONSTANS.INDEX } component={ WrapperPage }>
      <IndexRoute component={ SomePage1 } />
      <Route path={ PAGES_CONSTANS.SOMEPAGE1 } component={ SomePage1 } />
      <Route path={ PAGES_CONSTANS.SOMEPAGE2 } component={ SomePage2 } />
    </Route>
  </Router>;
};
