import {
  React,
  mount,
  expect
} from '../../allDependencies' ;

import { TodoList }  from '../allComponents_test' ;

describe('TodoList component', () => {
  let mountTodoList = null;

  beforeEach(() => {
    const taskreducerData = [{id: 1, value: 100}];

    const props = {
      componentStore: taskreducerData,
      addTask:        () => {},
      removeTask:     () => {},
      updateTask:     () => {}
    };

    // если нужно пройтись по дому
    mountTodoList = mount(<TodoList { ...props } />);
  });

  describe('must have componentStore', () => {
    it('taskReducer', () => {
      expect(mountTodoList.props()).to.have.property('componentStore');
    });
  });

  describe('must have state key', () => {
    it('curItemId', () => {
      expect(mountTodoList.node.state).to.have.property('curItemId');
    });

    it('curItemTitile', () => {
      expect(mountTodoList.node.state).to.have.property('curItemTitile');
    });
  });

  describe('nested components', () => {
    describe('AddingInput component', () => {
      it('must be', () => {
        expect(mountTodoList.find('AddingInput')).to.have.length.of(1);
      });

      it('quantity equal length of "componentStore" store', () => {
        const storeLength = mountTodoList.props().componentStore.length;
        const AddingInputCount = mountTodoList.find('TodoItem').length;
        expect(storeLength).to.be.equal(AddingInputCount);
      });
    });

    describe('TodoItem component', () => {
      it('must be Object', () => {
        expect(mountTodoList.find('TodoItem')).to.be.an('Object');
      });
    });

    describe('TodoItemTitle component', () => {
      it('must be Object', () => {
        expect(mountTodoList.find('TodoItemTitle')).to.be.an('Object');
      });
    });
  });

  describe('methods', () => {
    describe('getById method', () => {
      it('must be defined', () => {
        expect(mountTodoList.node.getById).to.be.an('Function');
      });

      it('must return array filtered by "id"', () => {
        expect(mountTodoList.node.getById(1).id).to.be.equal(1);
      });
    });

    describe('selectItem method', () => {
      it('must be defined', () => {
        expect(mountTodoList.node.selectItem).to.be.an('Function');
      });

      it('must set in state "curItemId" value equal input param', () => {
        mountTodoList.node.selectItem(1);
        expect(mountTodoList.node.state.curItemId).to.equal(1);
      });
    });
  });
});
