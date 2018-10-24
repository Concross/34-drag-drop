const initialState = {};

export default (state = initialState, action) => {
  const { type, payload } = action;
  const categoryExpenses = payload && state[payload.categoryId];
  let updatedExpenses = null;

  switch (type) {
    case 'CATEGORY_CREATE': return { ...state, [payload.id]: [] };

    case 'CATEGORY_DESTROY':
      delete state[payload.id];
      return { ...state };

    case 'EXPENSE_CREATE':
      return { ...state, [payload.categoryId]: [...categoryExpenses, payload] };

    case 'EXPENSE_UPDATE':
      updatedExpenses = categoryExpenses.map(expense => {
        if (expense.id === payload.id) {
          return payload;
        }
        return expense;
      });
      return { ...state, [payload.categoryId]: updatedExpenses };

    case 'EXPENSE_DESTROY':
      updatedExpenses = categoryExpenses.filter(expense => expense.id !== payload.id);

      return { ...state, [payload.categoryId]: updatedExpenses }

    default: return state;
  }
};
