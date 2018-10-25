export const categoryCreateValidator = store => next => action => {
  const isCategory = action.type && action.type.startsWith('CATEGORY');

  if (isCategory) {
    try {
      const category = action.payload;
      let notValid = !category.title || !category.budget;

      if (notValid) {
        throw new Error('VALIDATION ERROR: category must include title and budget');
      }

      notValid = category.budget && category.budget < 0;
      if (notValid) {
        throw new Error('VALIDATION ERROR: budget must be a value greater than 0');
      }

      return next(action);
    } catch (e) {
      e.action = action;
      throw e;
    }
  } else {
    return next(action);
  }
};
