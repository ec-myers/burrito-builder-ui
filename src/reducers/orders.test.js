import { orders } from './orders';

describe('orders', () => {
  it('should return the intial state', () => {
    const expected = [];
    const result = orders(undefined, {});

    expect(result).toEqual(expected);
  });

  it('should match the case SET_ORDERS if type is correct', () => {
    const initialState = [];
    const action = {
      type: 'SET_ORDERS',
      orders: [
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
      ]
    };
    const result = [
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

    expect(orders(initialState, action)).toEqual(result);
  });
});