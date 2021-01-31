/** Libraries */
import React from 'react';
import { connect } from 'react-redux';

/** Components */
import { CollectionItem } from '../../components/collection-item';

/** Redux elements */
import { selectShopCollection } from '../../redux/shop/shop.selectors';

/** Styles */
import {
  CollectionPageContainer,
  TitleContainer,
  ItemsContainer,
} from './collection.styles';

const CollectionPage = ({ collection }) => {
  const { title, items } = collection;
  return (
    <CollectionPageContainer>
      <TitleContainer>{title.toUpperCase()}</TitleContainer>
      <ItemsContainer>
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </ItemsContainer>
    </CollectionPageContainer>
  );
};
const mapStateToProps = (state, ownProps) => ({
  collection: selectShopCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
