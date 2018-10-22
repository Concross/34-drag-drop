import uuid from 'uuid/v4';

export const categoryCreate = category => {
  category.id = uuid();
  category.timestamp = new Date();

  return {
    type: 'CATEGORY_CREATE',
    payload: category,
  };
};
