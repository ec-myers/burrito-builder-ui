import * as actions from './index';

describe('actions', () => {
  it('should have a type SET_ORDERS', () => {
    const orders = [
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

    const expectedAction = {
      type: 'SET_ORDERS',
      orders
    };

    const result = actions.setOrders(orders);

    expect(result).toEqual(expectedAction);
  });
});