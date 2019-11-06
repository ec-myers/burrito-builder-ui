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
});