import { createStore } from 'redux';
import categoryReducer from '../reducer/categoryReducer';

export default () => createStore(categoryReducer);
