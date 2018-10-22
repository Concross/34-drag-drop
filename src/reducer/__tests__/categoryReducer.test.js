import categoryReducer from '../categoryReducer';

describe('categoryReducer', () => {
  test('should return the given state if no action is given', () => {
    const state = [];
    const action = { type: null, payload: 'nothing' };
    const actual = categoryReducer(state, action);

    expect(actual).toEqual(state);
  });

  test('should append a new category to state if action is to create', () => {
    const state = [];
    const action = { type: 'CATEGORY_CREATE', payload: 'gas' };
    const actual = categoryReducer(state, action);

    expect(actual).toEqual(['gas']);
  });

  test('should not mutate the original state', () => {
    const state = [];
    const action = { type: 'CATEGORY_CREATE', payload: 'gas' };

    expect(state).toEqual([]);
  });
});
