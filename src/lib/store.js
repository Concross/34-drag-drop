import { createStore, applyMiddleware } from 'redux';
import reducer from '../reducer';
import logger from './middleware/logger';
import { categoryCreateValidator } from './middleware/validator';

export default () => createStore(
  reducer,
  applyMiddleware(
    logger,
    categoryCreateValidator
  ));
