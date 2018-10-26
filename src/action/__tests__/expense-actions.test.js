import { expenseCreate, expenseUpdate, expenseDestroy } from '../expense-actions';

const expense = {
  title: 'title',
  cost: 55,
};

describe('expenseCreate action', () => {
  test('should return an object', () => {
    const actual = expenseCreate(expense);

    expect(typeof actual).toBe('object');
  });

  test('should add an id and timestamp property to the expense', () => {
    const actual = expenseCreate(expense).payload;

    expect(actual.id).toBeDefined();
    expect(actual.timestamp).toBeDefined();
  });

  test('should return the expected action object', () => {
    const actual = expenseCreate(expense);
    const expected = {
      type: 'EXPENSE_CREATE',
      payload: expense,
    };

    expect(actual).toEqual(expected);
  });
});

describe('expenseUpdate action', () => {
  test('should return the expected action object', () => {
    const actual = expenseUpdate(expense);
    const expected = {
      type: 'EXPENSE_UPDATE',
      payload: expense,
    };

    expect(actual).toEqual(expected);
  });
});

describe('expenseDestroy action', () => {
  test('should return the expected actiont', () => {
    const actual = expenseDestroy(expense);
    const expected = {
      type: 'EXPENSE_DESTROY',
      payload: expense,
    };

    expect(actual).toEqual(expected);
  });
});
