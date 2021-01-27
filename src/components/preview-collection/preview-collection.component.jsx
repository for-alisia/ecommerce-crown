/** Libraries */
import React from 'react';

/** Components */
import { CollectionItem } from '../collection-item';

/** Styles */
import './preview-collection.styles.scss';

export const PreviewCollection = ({ title, items }) => (
  <div className='collection-preview'>
    <h1>{title.toUpperCase()}</h1>
    <div className='preview'>
      {items
        .filter((item, idx) => idx < 4)
        .map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </div>
  </div>
);
