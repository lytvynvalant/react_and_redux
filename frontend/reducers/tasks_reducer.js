import { ACTIONS_CONSTANS } from '../constants' ;
import * as Immutable from 'immutable' ;

const ACTION_TYPE = ACTIONS_CONSTANS.TASK_ACTIONS;

export default (state = [], action = {type: null, payload: {id: null, value: null}}) => {
  switch (action.type) {
    case ACTION_TYPE.ALL_TASK:
      const fromJSpayload = Immutable.fromJS(action.payload.state);
      const fromJSstate = Immutable.fromJS(state);

      const newResult = fromJSpayload.filter((item) => {
        return !fromJSstate.some((hrenItem) =>
          hrenItem.get('id') === item.get('id')
          );
      }).concat(fromJSstate);

      return newResult.toJS();

    case ACTION_TYPE.ADD_TASK:
      return state.concat([action.payload]);

    case ACTION_TYPE.REMOVE_TASK:
      return state.filter((item) => {
        return item.id !== action.payload.id;
      });

    case ACTION_TYPE.UPDATE_TASK:
      return state.filter((item) => {
        if (item.id === action.payload.id) {
          item.value = action.payload.value;
        }
        return item;
      });
    default:
      return state;
  };
};
