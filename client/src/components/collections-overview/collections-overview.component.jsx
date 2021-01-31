/** Libraries */
import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

/** Components */
import { PreviewCollection } from '../preview-collection';

/** Redux elements */
import { selectShopCollectionForPreview } from '../../redux/shop/shop.selectors';

/** Styles */
import { CollectionsOverviewContainer } from './collections-overview.styles';

const CollectionsOverview = ({ collections }) => (
  <CollectionsOverviewContainer>
    {collections.map(({ id, ...collectionProps }) => (
      <PreviewCollection key={id} {...collectionProps} />
    ))}
  </CollectionsOverviewContainer>
);

const mapStateToProps = createStructuredSelector({
  collections: selectShopCollectionForPreview,
});

export default connect(mapStateToProps)(CollectionsOverview);
