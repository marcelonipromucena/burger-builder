import { takeEvery, all, takeLatest } from 'redux-saga/effects';

import * as actionTypes from '../actions/actionTypes';

import {
  logoutSaga,
  checkAuthTimeoutSaga,
  authUserSaga,
  authCheckStateSaga,
} from './authSaga';
import { initIngredientsAuthSaga } from './burgerBuilderSaga';
import { fetchOrdersSaga } from './orderSaga';

export function* watchAuth() {
  yield all([
    takeEvery(actionTypes.AUTH_INITIATE_LOGOUT, logoutSaga),
    takeEvery(actionTypes.AUTH_USER, authUserSaga),
    takeEvery(actionTypes.AUTH_CHECK_STATE, authCheckStateSaga),
    takeEvery(actionTypes.AUTH_CHECK_TIMEOUT, checkAuthTimeoutSaga),
  ]);
}

export function* watchBurgerBuild() {
  yield takeEvery(
    actionTypes.INIT_INGREDIENTS,
    initIngredientsAuthSaga,
  );
}

export function* watchOrders() {
  yield takeLatest(actionTypes.PURCHASE_BURGER, fetchOrdersSaga);
  yield takeEvery(actionTypes.FETCH_ORDERS, fetchOrdersSaga);
}
