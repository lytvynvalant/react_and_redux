import { TASK_PROMISE } from 'promises' ;

import {
  ACTIONS_CONSTANS
} from 'constants' ;

const {ALL_TASK, ADD_TASK, REMOVE_TASK, UPDATE_TASK} = ACTIONS_CONSTANS.TASK_ACTIONS;

let nextTodoId = 0;

export const fetchTask = () => {
  return dispatch => {
    return TASK_PROMISE.getAllTask()
      .then(succes => succes.json())
      .then(state => dispatch(GetAllTasks(state)))
      .catch(ex => console.log('fetchTask Action error', ex));
  };
};

export const GetAllTasks = (state) => {
  return {
    type:    ALL_TASK,
    payload: {
      state
    }
  };
};

export const AddTask = (value) => {
  return {
    type:    ADD_TASK,
    payload: {
      id: nextTodoId++,
      value
    }
  };
};

export const RemoveTask = (id) => {
  return {
    type:    REMOVE_TASK,
    payload: {
      id
    }
  };
};

export const UpdateTask = (id, value) => {
  return {
    type:    UPDATE_TASK,
    payload: {
      id,
      value
    }
  };
};
