import React                     from 'react' ;
import ReactDOM                  from 'react-dom' ;
import Rooting                   from 'routing' ;
import Reducer                   from 'reducers' ;
import { createStore,
         applyMiddleware }       from 'redux' ;
import { Provider }              from 'react-redux' ;
import thunk                     from 'redux-thunk' ;

// create store
const initTaskReducer = { TaskReducer: [{id: 1, value: 100}] };

let store = createStore(Reducer,
  initTaskReducer,
  // middleware
  applyMiddleware(thunk)
);

/**
 * INITIALIZE APP
 * */
ReactDOM.render(
  <Provider store={ store }>
    <Rooting />
  </Provider>,
  document.getElementById('app')
);
