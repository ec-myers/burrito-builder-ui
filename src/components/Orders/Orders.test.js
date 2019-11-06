import React from 'react';
import { shallow } from 'enzyme';
import * as actions from '../../actions';
import { getOrders } from '../../apiCalls';
import { Orders, mapStateToProps, mapDispatchToProps } from './Orders';


describe('Orders', () => {
  let wrapper;
  let orders;
  jest.mock('../../actions');
  jest.mock('../../apiCalls');

  beforeEach(() => {
    orders = [
      {
        id: 1,
        name: 'Emmett',
        ingredients: ['beans', 'cheese']
      },
      {
        id: 2,
        name: 'Penelope',
        ingredients: ['chicken', 'cheese']
      }
    ];
    wrapper = shallow(<Orders orders={orders}/>)
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('mapStateToProps', () => {
    it('should return an object with 1 property', () => {
      let orders;
      let mockState = {
        orders
      };

      let expected = {
        orders
      };

      const mappedProps = mapStateToProps(mockState);

      expect(mappedProps).toEqual(expected);
    });
  });

});