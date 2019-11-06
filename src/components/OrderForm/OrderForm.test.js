import React from 'react';
import { shallow } from 'enzyme';
import { OrderForm, mapDispatchToProps} from '../OrderForm/OrderForm';
import * as actions from '../../actions';


describe('OrderForm', () => {
  let wrapper;

  let mockEventName = {
    target: {
      name: 'name',
      value: 'Piper'
    }
  }; 

    let mockEventIngredients = {
      target: {
        'name': 'beans',
      },
      preventDefault: jest.fn()
    };

    beforeEach(() => {
      wrapper = shallow(<OrderForm />)
    });

    it('should match the snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });

    it('should update form state when handleNameChange is called', () => {
      const expectedName = 'Piper';

      wrapper.instance().handleNameChange(mockEventName);
      expect(wrapper.state('name')).toEqual(expectedName);
    });

    it('should update form state when handleIngredientChange is called', () => {
      const expectedIngredients = ['beans'];
  
      wrapper.instance().handleIngredientChange(mockEventIngredients);
      expect(wrapper.state('ingredients')).toEqual(expectedIngredients);
    });


  it('should call handleSubmit on submit', () => {
    wrapper.instance().handleSubmit = jest.fn();
    wrapper.find('.submit-btn').simulate('click');

    expect(wrapper.instance().handleSubmit).toHaveBeenCalled();
  });
});

describe('mapDispatchToProps', () => {
  let mockDispatch;

  beforeEach(() => {
    mockDispatch = jest.fn();
  });

  it('should call dispatch with a setOrders action', () => {
    let orders = [
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

    const actionToDispatch = actions.setOrders(orders);
    const mappedProps = mapDispatchToProps(mockDispatch);

    mappedProps.setOrders(orders);

    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
  });   