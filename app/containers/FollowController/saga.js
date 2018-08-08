import { take, call, put, select } from 'redux-saga/effects';
import { FOLLOW_ACTION } from './constants';

// Individual exports for testing
export default function* defaultSaga() {
  // See example in containers/HomePage/saga.js
  yield take(FOLLOW_ACTION);
}
