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
    const actual = categoryReducer(state, action);

    expect(state).toEqual([]);
  });

  test('should update an existing category if action is to update', () => {
    const state = [{ id: 1, title: 'gas' }];
    const action = { type: 'CATEGORY_UPDATE', payload: { id: 1, title: 'bread' } };

    const actual = categoryReducer(state, action);
    const expected = [{ id: 1, title: 'bread' }];

    expect(actual).toEqual(expected);
  });

  test('should update an existing category among other categories if action is to update', () => {
    const state = [{ id: 1, title: 'gas' }, { id: 2, title: 'groceries' }];
    const action = { type: 'CATEGORY_UPDATE', payload: { id: 1, title: 'bread' } };

    const actual = categoryReducer(state, action);
    const expected = [{ id: 1, title: 'bread' }, { id: 2, title: 'groceries' }];

    expect(actual).toEqual(expected);
  });

  test('should destroy an existing category if action is to update', () => {
    const state = [{ id: 1, title: 'gas' }, { id: 2, title: 'groceries' }];
    const action = { type: 'CATEGORY_DESTROY', payload: { id: 1 } };

    const actual = categoryReducer(state, action);
    const expected = [{ id: 2, title: 'groceries' }];

    expect(actual).toEqual(expected);
  });
});
