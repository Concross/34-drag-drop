import expenseReducer from '../expenseReducer';

describe('expenseReducer', () => {
  test('should return the given state if no action is given', () => {
    const state = [];
    const action = { type: null, payload: 'nothing' };
    const actual = expenseReducer(state, action);

    expect(actual).toEqual(state);
  });

  test('should append a new expense array to state if CATEGORY_CREATE is dispatched', () => {
    const state = {};
    const category = {
      id: 1,
    };
    const action = { type: 'CATEGORY_CREATE', payload: category };
    const actual = expenseReducer(state, action);
    const expected = {
      1: [],
    };
    expect(actual).toEqual(expected);
  });

  test('should remove the expense from the state if CATEGORY_DESTROY is dispatched', () => {
    const category = {
      id: 1,
    };

    const state = {
      1: [],
    };

    const action = { type: 'CATEGORY_DESTROY', payload: category };
    const actual = expenseReducer(state, action);
    const expected = {};

    expect(actual).toEqual(expected);
  });

  test('should create an expense if action is EXPENSE_CREATE', () => {
    const state = {
      1: [],
    };

    const expense = {
      title: 'title',
      cost: 55,
      categoryId: 1,
    };

    const action = { type: 'EXPENSE_CREATE', payload: expense };
    const actual = expenseReducer(state, action);
    const expected = {
      1: [expense],
    };

    expect(actual).toEqual(expected);
  });
});
