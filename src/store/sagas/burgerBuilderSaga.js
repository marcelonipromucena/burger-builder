import { put } from 'redux-saga/effects';
import axios from 'axios';

import * as actions from '../actions/index';

export function* initIngredientsAuthSaga() {
  const url =
    'https://react-my-burger-c3d49.firebaseio.com/ingredients.json';

  try {
    const response = yield axios.get(url);
    yield put(actions.setIngredients(response.data));
  } catch (error) {
    yield put(actions.fetchIngredientsFailed());
  }
}
