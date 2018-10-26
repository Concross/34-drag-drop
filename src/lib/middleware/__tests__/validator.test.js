import sinon from 'sinon';
import { categoryCreateValidator, expenseCreateValidator } from '../validator';

describe('categoryCreateValidator', () => {
  test('should not run for actions other than CATEGORY actions', () => {
    const action = { type: 'EXPENSE_CREATE', payload: null };

    expect(() => {
      categoryCreateValidator({})(jest.fn())(action);
    }).not.toThrow();
  });

  test('should throw an error if category is not given a title or budget', () => {
    let category = {
      title: '',
      budget: 55,
    };

    const action = { type: 'CATEGORY_CREATE', payload: category };

    expect(() => {
      categoryCreateValidator({})(jest.fn())(action);
    }).toThrow();

    category = {
      title: 'title',
      budget: 0,
    };

    expect(() => {
      categoryCreateValidator({})(jest.fn())(action);
    }).toThrow();
  });

  test('should pass the action to the next function', () => {
    const next = sinon.spy();
    const category = {
      title: 'title',
      budget: 55,
    };

    const action = { type: 'CATEGORY_CREATE', payload: category };
    categoryCreateValidator({})(next)(action);

    expect(next.calledOnce).toBe(true);
  });

  test('should throw an error if budget is below 0', () => {
    const next = jest.fn();
    const category = {
      title: 'title',
      budget: -10,
    };

    const action = { type: 'CATEGORY_CREATE', payload: category };

    expect(() => {
      categoryCreateValidator({})(next)(action);
    }).toThrow();
  });
});