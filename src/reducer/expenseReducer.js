const initialState = {};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'CATEGORY_CREATE': return { ...state, [payload.id]: [] };

    default: return state;
  }
};
