/** Libraries */
import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

/** Components */
import { PreviewCollection } from '../preview-collection';

/** Redux elements */
import { selectShopCollections } from '../../redux/shop/shop.selectors';

/** Styles */
import './collections-overview.styles.scss';

const CollectionsOverview = ({ collections }) => (
  <div className='collections-overview'>
    {collections.map(({ id, ...collectionProps }) => (
      <PreviewCollection key={id} {...collectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectShopCollections,
});

export default connect(mapStateToProps)(CollectionsOverview);
