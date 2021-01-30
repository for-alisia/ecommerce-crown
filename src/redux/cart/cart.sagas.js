/** Libraries */
import { all, call, takeLatest, put } from 'redux-saga/effects';

/** Redux elements */
import { UserActionTypes } from '../user/user.types';
import { clearCart } from './cart.actions';

export function* clearCartOnSignOut() {
  yield put(clearCart());
}

export function* onSignOutSuccess() {
  yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut);
}

export function* cartSaga() {
  yield all([call(onSignOutSuccess)]);
}
