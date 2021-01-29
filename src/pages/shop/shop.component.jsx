/** Libraries */
import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

/** Components */
import { CollectionsOverview } from '../../components/collections-overview';
import { CollectionPage } from '../collection';
import { withSpinner } from '../../components/with-spinner';

/** Redux elements */
import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';
import {
  selectCollectionFetching,
  selectIsCollectionLoaded,
} from '../../redux/shop/shop.selectors';

/** Styles */
import { ShopPageContainer } from './shop.styles';

const CollectionsOverviewWithSpinner = withSpinner(CollectionsOverview);
const CollectionPageWithSpinner = withSpinner(CollectionPage);

class Shop extends Component {
  componentDidMount() {
    const { fetchCollectionsStartAsync } = this.props;
    fetchCollectionsStartAsync();
    /** EXAMPLE OF DIFFERENT WAY OF USING FIRESTORE */
    // const { updateCollections } = this.props;
    // const collectionRef = firestore.collection('collections');
    // /** Get data from firebase, using subscription */
    // collectionRef.onSnapshot(async (snapshot) => {
    //   const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
    //   updateCollections(collectionsMap);
    //   this.setState({ loading: false });
    // });
    /** Alternative way using Promises */
    // collectionRef.get().then(snapshot => {
    //   const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
    //   console.log(collectionsMap);
    //   updateCollections(collectionsMap);
    //   this.setState({ loading: false });
    // })
    /** Alternative way using URL (too nested objects we get this way) */
    // fetch(
    //   'https://firestore.googleapis.com/v1/projects/crown-be1fc/databases/(default)/documents/collections'
    // )
    //   .then((response) => response.json())
    //   .then((collections) => console.log(collections));
  }

  render() {
    const { match, isCollectionFetching, isCollectionLoaded } = this.props;

    return (
      <ShopPageContainer>
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <CollectionsOverviewWithSpinner
              isLoading={isCollectionFetching}
              {...props}
            />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={(props) => (
            <CollectionPageWithSpinner
              isLoading={!isCollectionLoaded}
              {...props}
            />
          )}
        />
      </ShopPageContainer>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  isCollectionFetching: selectCollectionFetching,
  isCollectionLoaded: selectIsCollectionLoaded,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
