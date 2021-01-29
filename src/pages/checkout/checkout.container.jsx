/** Libraries */
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

/** Redux elements */
import {
  selectCartItems,
  selectCartTotal,
} from '../../redux/cart/cart.selectors';

/** Components */
import CheckoutPage from './checkout.component';

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  totel: selectCartTotal,
});

const CheckoutContainer = compose(connect(mapStateToProps))(CheckoutPage);

export default CheckoutContainer;
