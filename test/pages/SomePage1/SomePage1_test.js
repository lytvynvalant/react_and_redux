import {
  React,

  mount,
  configureReduxMockStore,
  thunk,
  expect,
} from '../../allDependencies' ;

import { Pages }   from '../allPages_test' ;

const { SomePage1 } = Pages;

describe('SomePage1 page', () => {
  let mountConnectSomePage1 = null;
  let mountSomePage1 = null;

  beforeEach(() => {
    const middlewares = [thunk];
    const taskreducerData = [{id: 1, value: 1}];

    const propsMountSomePage1 = {
      store: configureReduxMockStore(middlewares)({'TaskReducer': taskreducerData})
    };

    mountConnectSomePage1 = mount(<SomePage1 { ...propsMountSomePage1 } />);
    mountSomePage1 = mountConnectSomePage1.find('SomePage1').node;
  });

  describe('methods', () => {
    let getActions = null;

    beforeEach(() => {
      getActions = (actionName) => {
        return mountConnectSomePage1.props().store.getActions().filter(function (item) {
          return item.type === actionName;
        });
      };
    });

    describe('addTask method', () => {
      it('must trigger action with type "ADD_TASK"', () => {
        expect(getActions('ADD_TASK')).to.have.length(0);
        mountSomePage1.addTask('some data');
        expect(getActions('ADD_TASK')).to.have.length(1);
      });
    });

    describe('removeTask method', () => {
      it('must trigger action with type REMOVE_TASK"', () => {
        expect(getActions('REMOVE_TASK')).to.have.length(0);
        mountSomePage1.removeTask(1);
        expect(getActions('REMOVE_TASK')).to.have.length(1);
      });
    });

    describe('removeTask method', () => {
      it('must trigger action with type "REMOVE_TASK"', () => {
        expect(getActions('UPDATE_TASK')).to.have.length(0);
        mountSomePage1.updateTask(1, 'some data');
        expect(getActions('UPDATE_TASK')).to.have.length(1);
      });
    });
  });
});
