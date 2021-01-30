/** Libraries */
import { all, call } from 'redux-saga/effects';

/** Sagas */
import { shopSaga } from './shop/shop.saga';
import { userSaga } from './user/user.sagas';
import { cartSaga } from './cart/cart.sagas';

export default function* rootSaga() {
  yield all([call(shopSaga), call(userSaga), call(cartSaga)]);
}
