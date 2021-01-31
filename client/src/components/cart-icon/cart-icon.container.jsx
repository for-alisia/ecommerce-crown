/** Libraries */
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

/** Redux elements */
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

/** Component */
import CartIcon from './cart-icon.component';

const mapStateToProps = createStructuredSelector({
  counter: selectCartItemsCount,
});

const CartIconContainer = connect(mapStateToProps, { toggleCartHidden })(
  CartIcon
);

export default CartIconContainer;
