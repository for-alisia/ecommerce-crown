/** Libraries */
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

/** Redux elements */
import { selectCollectionFetching } from '../../redux/shop/shop.selectors';

/** Components */
import { withSpinner } from '../with-spinner';
import { CollectionsOverview } from '../collections-overview';

const mapStateToProps = createStructuredSelector({
  isLoading: selectCollectionFetching,
});

const CollectionOverviewContainer = compose(
  connect(mapStateToProps),
  withSpinner
)(CollectionsOverview);

export default CollectionOverviewContainer;
