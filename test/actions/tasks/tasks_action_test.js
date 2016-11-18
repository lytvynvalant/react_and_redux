import {
  expect,
  ACTIONS_CONSTANS,
} from '../../allDependencies' ;

import ACTIONS from '../allActions_test' ;

import fetchMock from   'fetch-mock' ;

const { ADD_TASK, REMOVE_TASK, UPDATE_TASK } = ACTIONS_CONSTANS.TASK_ACTIONS;

const { GetAllTasks, AddTask, RemoveTask, UpdateTask } = ACTIONS.TASK;

describe('Action Task', () => {
  var server = null;

  beforeEach(() => {
    const response = [200, {'Content-Type': 'application/json'}, '{ "stuff": "is", "awesome": "in here" }'];

    // console.log('fetchMock', fetchMock);
    server = fetchMock.mock('http://domain1', response);
  });

  describe.skip('async', () => {
    describe('GetAllTasks', () => {
      it('must be function', (done) => {
        // get module
        const ActionTaskInjector = require('inject!actions/tasks/tasks_action');
        // replace dependencies
        const ActionTask = ActionTaskInjector({
          'promises': {
            'TASK_PROMISE': {
              'getAllTask': () => {
                return server.fetchMock('http://domain1');
              }
            }
          }
        });

          // call concrete module
        ActionTask.fetchTask()((data) => {
          expect(data.type).to.be.equal('ALL_TASK');
          // make execution of test async
          done();
        });
      });

      it('must return object with key', () => {
        expect(GetAllTasks()).to.have.property('payload');
        expect(GetAllTasks()).to.have.deep.property('payload.state');
      });
    });
  });

  describe('sync', () => {
    describe('GetAllTasks', () => {
      it('must be function', () => {
        expect(GetAllTasks).to.be.an('Function');
      });

      it('must return object with key', () => {
        expect(GetAllTasks()).to.have.property('payload');
        expect(GetAllTasks()).to.have.deep.property('payload.state');
      });
    });

    describe('AddTask', () => {
      it('must be function', () => {
        expect(AddTask).to.be.an('Function');
      });

      it('must return object with key', () => {
        expect(AddTask()).to.have.property('payload');
        expect(AddTask()).to.have.deep.property('payload.id');
      });

      it('must return object with key "value" and it value equals ', () => {
        expect(AddTask()).to.have.property('type', ADD_TASK);
      });

      it('must return object with key "type" and it value equals param are passed in function ' + ADD_TASK, () => {
        const value = 'someVal';
        expect(AddTask(value)).to.have.deep.property('payload.value', value);
      });
    });

    describe('RemoveTask', () => {
      it('must be function', () => {
        expect(RemoveTask).to.be.an('Function');
      });

      it('must return object with key', () => {
        expect(RemoveTask()).to.have.property('type', REMOVE_TASK);
        expect(RemoveTask()).to.have.property('payload');
        expect(RemoveTask()).to.have.deep.property('payload.id');
      });

      it('must return object with key "ID" and it value equals param are passed in function ' + REMOVE_TASK, () => {
        const ID = 'ID';
        expect(RemoveTask(ID)).to.have.deep.property('payload.id', ID);
      });
    });

    describe('UpdateTask', () => {
      it('must be function', () => {
        expect(UpdateTask).to.be.an('Function');
      });

      it('must return object with key', () => {
        const ID = 'id';
        expect(UpdateTask(ID)).to.have.property('type', UPDATE_TASK);
        expect(UpdateTask(ID)).to.have.property('payload');
      });

      it('must return object with keys "id" and "value" passed in function' + REMOVE_TASK, () => {
        const ID = 'ID';
        const VALUE = 'VALUE';

        expect(UpdateTask(ID)).to.have.deep.property('payload.id', ID);
        expect(UpdateTask(ID, VALUE)).to.have.deep.property('payload.value', VALUE);
      });
    });
  });
});
