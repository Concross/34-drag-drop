import { combineReducers } from 'redux';
import expenses from './expenseReducer';
import categories from './categoryReducer';

export default combineReducers({ expenses, categories });
