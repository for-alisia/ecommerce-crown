/** Libraries */
import { all, call } from 'redux-saga/effects';

/** Sagas */
import { fetchCollectionStart } from './shop/shop.saga';
import { userSaga } from './user/user.sagas';
import { cartSaga } from './cart/cart.sagas';

export default function* rootSaga() {
  yield all([call(fetchCollectionStart), call(userSaga), call(cartSaga)]);
}
