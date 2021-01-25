/** Libraries */
import React, { Component } from 'react';

/** Components */
import { PreviewCollection } from '../../components/preview-collection';

/** Styles */
import './shop.styles.scss';

/** Data */
import { SHOP_DATA } from '../../data/shop.data';

class Shop extends Component {
  state = {
    collections: SHOP_DATA
  };

  render() {
    const { collections } = this.state;

    return (
      <div className='shop-page'>
        {collections.map(({ id, ...collectionProps }) => (
          <PreviewCollection key={id} {...collectionProps} />
        ))}
      </div>
    );
  }
}

export default Shop;
