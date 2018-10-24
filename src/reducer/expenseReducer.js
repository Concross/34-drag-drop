const initialState = {};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'CATEGORY_CREATE': return { ...state, [payload.id]: [] };

    case 'EXPENSE_CREATE':
      return { ...state, [payload.categoryId]: [...state[payload.categoryId], payload] };

    default: return state;
  }
};
