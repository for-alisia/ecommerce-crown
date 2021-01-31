/** Libraries */
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

/** Redux elements */
import { selectIsCollectionLoaded } from '../../redux/shop/shop.selectors';

/** Components */
import { withSpinner } from '../../components/with-spinner';
import CollectionPage from './collection.component';

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !selectIsCollectionLoaded(state),
});

const CollectionContainer = compose(
  connect(mapStateToProps),
  withSpinner
)(CollectionPage);

export default CollectionContainer;
