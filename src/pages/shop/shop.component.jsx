/** Libraries */
import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

/** Components */
import { PreviewCollection } from '../../components/preview-collection';

/** Redux elements */
import { selectShopCollections } from '../../redux/shop/shop.selectors';

/** Styles */
import './shop.styles.scss';

const Shop = ({ collections }) => (
  <div className='shop-page'>
    {collections.map(({ id, ...collectionProps }) => (
      <PreviewCollection key={id} {...collectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectShopCollections,
});

export default connect(mapStateToProps)(Shop);
