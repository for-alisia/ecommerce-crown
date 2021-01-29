/** Libraries */
import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

/** Components */
import { CollectionsOverview } from '../../components/collections-overview';
import { CollectionPage } from '../collection';
import { withSpinner } from '../../components/with-spinner';

/** Utils */
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from '../../firebase/firebase.utils';

/** Redux elements */
import { updateCollections } from '../../redux/shop/shop.actions';

/** Styles */
import { ShopPageContainer } from './shop.styles';

const CollectionsOverviewWithSpinner = withSpinner(CollectionsOverview);
const CollectionPageWithSpinner = withSpinner(CollectionPage);

class Shop extends Component {
  state = {
    loading: true,
  };
  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection('collections');
    collectionRef.onSnapshot(async (snapshot) => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      console.log(collectionsMap);
      updateCollections(collectionsMap);
      this.setState({ loading: false });
    });
  }

  render() {
    const { match } = this.props;
    const { loading } = this.state;
    return (
      <ShopPageContainer>
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <CollectionsOverviewWithSpinner isLoading={loading} {...props} />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={(props) => (
            <CollectionPageWithSpinner isLoading={loading} {...props} />
          )}
        />
      </ShopPageContainer>
    );
  }
}

export default connect(null, { updateCollections })(Shop);
