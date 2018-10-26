import { categoryCreate, categoryUpdate, categoryDestroy } from '../category-actions';

const category = {
  title: 'title',
  budget: 'budget',
};

describe('categoryCreate action', () => {
  test('should return an object', () => {
    const actual = categoryCreate(category);

    expect(typeof actual).toBe('object');
  });

  test('should add an id and timestamp property to the category', () => {
    const actual = categoryCreate(category).payload;

    expect(actual.id).toBeDefined();
    expect(actual.timestamp).toBeDefined();
  });

  test('should return the expected action object', () => {
    const actual = categoryCreate(category);
    const expected = {
      type: 'CATEGORY_CREATE',
      payload: category,
    };

    expect(actual).toEqual(expected);
  });
});
