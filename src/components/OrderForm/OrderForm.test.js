import React from 'react';
import { shallow } from 'enzyme';
import { OrderForm, mapDispatchToProps} from '../OrderForm/OrderForm';


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
        name: 'ingredients',
        value:['bean', 'cheese']
      }
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

    it.skip('should update form state when handleIngredientChange is called', () => {
      const expectedIngredients = ['bean', 'cheese'];
      const mockEvent = {
        target: {
          name: 'ingredients',
          value: ['bean', 'cheese']
        },
        preventDefault: jest.fn()
      };
      wrapper.instance().handleIngredientChange(mockEvent);
      console.log(wrapper.state('ingredients'))
      expect(wrapper.state('ingredients')).toEqual(expectedIngredients);
    });

    
});