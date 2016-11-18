import  { TaskReducer } from '../allReducers_test' ;
import  {
  ACTIONS_CONSTANS,
  expect } from '../../allDependencies' ;

describe('Task reducer', () => {
  let TaskReducerFunc = null;
  const ACTION_TYPE_ALL_TASK = ACTIONS_CONSTANS.TASK_ACTIONS.ALL_TASK;
  const ACTION_TYPE_ADD_TASK = ACTIONS_CONSTANS.TASK_ACTIONS.ADD_TASK;
  const ACTION_TYPE_REMOVE_TASK = ACTIONS_CONSTANS.TASK_ACTIONS.REMOVE_TASK;
  const ACTION_TYPE_UPDATE_TASK = ACTIONS_CONSTANS.TASK_ACTIONS.UPDATE_TASK;

  beforeEach(() => {
    TaskReducerFunc = TaskReducer;
  });

  it('It must be a function', () => {
    expect(TaskReducerFunc).to.be.an('Function');
  });

  describe('Invoke with  action type == ' + ACTION_TYPE_ALL_TASK, () => {
    it('Returns type is array ', () => {
      const payload = {
        state: []
      };

      const state = [];
      const result = TaskReducerFunc(state, {type: ACTION_TYPE_ALL_TASK, payload: payload});

      expect(result).to.be.a('Array');
    });

    it('Returns state with unique ids', () => {
      const payload = {
        state: [{id: 1, value: 'value'}]
      };

      const state = [{id: 1, value: 'value'}];

      const result = TaskReducerFunc(state, {type: ACTION_TYPE_ALL_TASK, payload: payload});

      expect(result).to.have.length(1);
    });
  });

  describe('Invoke with  action type == ' + ACTION_TYPE_ADD_TASK, () => {
    it('Returns type is array ', () => {
      expect(TaskReducerFunc([], {type: ACTION_TYPE_ADD_TASK})).to.be.a('Array');
    });

    it('Returns state length will be increment', () => {
      const startState = [];

      let endState = TaskReducerFunc(startState, {
        type: ACTION_TYPE_ADD_TASK
      });

      expect(endState.length).to.be.equal(startState.length + 1);
    });
  });

  describe('Invoke with  action type == ' + ACTION_TYPE_REMOVE_TASK, () => {
    it('Returns type is array ', () => {
      expect(TaskReducerFunc([], {
        type:    ACTION_TYPE_REMOVE_TASK,
        payload: { id: 'id' }
      })).to.be.a('Array');
    });

    it('State will not change if "action.id" id not equal any "state.id"', () => {
      const existStateId = 1;
      const newStateId = 2;
      const startState = [];
      let endState = null;

      startState.push({payload: {id: existStateId}});

      endState = TaskReducerFunc(startState, {
        type:    ACTION_TYPE_REMOVE_TASK,
        payload: { id: newStateId }
      });

      expect(startState.length).to.be.equal(endState.length);
    });

    it('State WILL DECREMENT if "action.id" id  equal any "state.id"', () => {
      const existStateId = 1;
      const newStateId = 1;
      const startState = [];
      let endState = null;

      startState.push({id: existStateId});

      endState = TaskReducerFunc(startState, {
        type:    ACTION_TYPE_REMOVE_TASK,
        payload: { id: newStateId }
      });

      expect(startState.length).to.be.equal(endState.length + 1);
    });
  });

  describe('Invoke with  action type == ' + ACTION_TYPE_UPDATE_TASK, () => {
    it('Returns type is array ', () => {
      expect(TaskReducerFunc([], {
        type:    ACTION_TYPE_UPDATE_TASK,
        payload: { id: 'id' }
      })).to.be.a('Array');
    });

    it('If "action.id"  equal  "state.id" => "state.payload" will be equal "action.payload"', () => {
      const existStateId = 1;
      const newStateId = 1;
      const startState = [];
      let endState = null;

      startState.push({ id: existStateId });

      endState = TaskReducerFunc(startState, {
        id:      newStateId,
        type:    ACTION_TYPE_UPDATE_TASK,
        payload: { id: newStateId, value: 'some text' }
      });

      expect(startState.length).to.be.equal(endState.length);
    });
  });
});
