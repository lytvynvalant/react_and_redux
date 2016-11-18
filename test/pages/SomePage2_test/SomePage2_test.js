import {
  React,
  mount,
  configureReduxMockStore,
  thunk,
  expect,
} from '../../allDependencies' ;

import { Pages }   from '../allPages_test' ;

const {SomePage2} = Pages;

describe('SomePage2 page', () => {
  let mountConnectSomePage2 = null;
  let mountSomePage2 = null;

  beforeEach(() => {
    const middlewares = [thunk];
    const taskreducerData = [{id: 1, value: 1}];

    const propsMountSomePage1 = {
      store: configureReduxMockStore(middlewares)({'TaskReducer': taskreducerData})
    };

    mountConnectSomePage2 = mount(<SomePage2 { ...propsMountSomePage1 } />);
    mountSomePage2 = mountConnectSomePage2.find('SomePage2').node;
  });

  describe('methods', () => {
    describe('setDataObject method', () => {
      it('must be defined', () => {
        expect(mountSomePage2.setDataObject).to.be.an('Function');
      });

      it('must return object', () => {
        expect(mountSomePage2.setDataObject()).to.be.an('Object');
      });

      describe('return object with keys', () => {
        it('label', () => {
          expect(mountSomePage2.setDataObject()).to.have.property('values');
        });

        it('values', () => {
          expect(mountSomePage2.setDataObject()).to.have.property('label');
        });
      });

      describe('return object key "values" ', () => {
        it('must be array with objects"', () => {
          expect(mountSomePage2.setDataObject().values[0]).to.be.an('Object');
        });

        describe('must contain objects with key"', () => {
          it('x"', () => {
            expect(mountSomePage2.setDataObject().values[0]).to.have.property('x');
          });
          it('y"', () => {
            expect(mountSomePage2.setDataObject().values[0]).to.have.property('y');
          });
        });

        it('must contain objects with key"', () => {
          expect(mountSomePage2.setDataObject().values[0]).to.be.an('Object');
        });

        it('must have length equal "props.pageStore"', () => {
          const componentStoreLength = mountSomePage2.props.pageStore.length;
          expect(mountSomePage2.setDataObject().values).to.have.length(componentStoreLength);
        });
      });
    });
  });
});
