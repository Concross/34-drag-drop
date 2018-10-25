import { createStore, applyMiddleware } from 'redux';
import reducer from '../reducer';
import logger from './middleware/logger';
import { categoryCreateValidator, expenseCreateValidator } from './middleware/validator';

export default () => createStore(
  reducer,
  applyMiddleware(
    logger,
    categoryCreateValidator,
    expenseCreateValidator,
  ));
