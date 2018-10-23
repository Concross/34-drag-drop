const initialState = [];

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'CATEGORY_CREATE':
      return [...state, payload];

    case 'CATEGORY_UPDATE':
      return state.map(category => {
        if (category.id === payload.id) {
          return payload;
        }
        return category;
      });

    case 'CATEGORY_DESTROY':
      return state.filter(category => {
        if (category.id === payload.id) {
          return false;
        }
        return true;
      });

    default: return state;
  }
};
