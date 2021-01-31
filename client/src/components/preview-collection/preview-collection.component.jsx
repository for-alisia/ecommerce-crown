/** Libraries */
import React from 'react';

/** Components */
import { CollectionItem } from '../collection-item';

/** Styles */
import {
  CollectionPreviewContainer,
  TitleContainer,
  PreviewContainer,
} from './preview-collection.styles';

export const PreviewCollection = ({ title, items }) => (
  <CollectionPreviewContainer>
    <TitleContainer>{title.toUpperCase()}</TitleContainer>
    <PreviewContainer>
      {items
        .filter((item, idx) => idx < 4)
        .map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </PreviewContainer>
  </CollectionPreviewContainer>
);
