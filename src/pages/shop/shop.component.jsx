/** Libraries */
import React from 'react';
import { Route } from 'react-router-dom';

/** Components */
import { CollectionsOverview } from '../../components/collections-overview';
import { CollectionPage } from '../collection';

/** Styles */
import { ShopPageContainer } from './shop.styles';

const Shop = ({ match }) => (
  <ShopPageContainer>
    <Route exact path={`${match.path}`} component={CollectionsOverview} />
    <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
  </ShopPageContainer>
);

export default Shop;
