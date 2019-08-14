import { fork } from 'redux-saga/effects';
import fetchCategories from './fetchCategories';

const sagaTasks = [
  fetchCategories
]

export default sagaTasks.map(fork);
