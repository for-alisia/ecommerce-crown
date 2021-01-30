/** Libraries */
import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

/** Components */
import { CollectionsOverviewContainer } from '../../components/collections-overview';
import { CollectionContainer } from '../collection';

/** Redux elements */
import { fetchCollectionsStart } from '../../redux/shop/shop.actions';

/** Styles */
import { ShopPageContainer } from './shop.styles';

class Shop extends Component {
  componentDidMount() {
    const { fetchCollectionsStart } = this.props;
    fetchCollectionsStart();
  }

  render() {
    const { match } = this.props;

    return (
      <ShopPageContainer>
        <Route
          exact
          path={`${match.path}`}
          component={CollectionsOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionContainer}
        />
      </ShopPageContainer>
    );
  }
}

export default connect(null, { fetchCollectionsStart })(Shop);
