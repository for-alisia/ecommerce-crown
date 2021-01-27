import { createSelector } from 'reselect';
import memoize from 'lodash.memoize';

const selectShop = (state) => state.shop;

export const selectShopCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

/** Create an array from a collections object */
export const selectShopCollectionForPreview = createSelector(
  [selectShopCollections],
  (collections) => Object.keys(collections).map((key) => collections[key])
);

/** Find collection by key */
export const selectShopCollection = memoize((collectionParam) =>
  createSelector(
    [selectShopCollections],
    (collections) => collections[collectionParam]
  )
);
