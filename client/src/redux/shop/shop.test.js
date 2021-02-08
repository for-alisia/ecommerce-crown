// @ts-nocheck
/** Redux elements */
import shopReducer, { INITIAL_STATE } from './shop.reducer';
import {
  fetchCollectionsStart,
  fetchCollectionsFailure,
  fetchCollectionsSuccess,
} from './shop.actions';

describe('shop reducer', () => {
  const STATE_AFTER_START = {
    collections: null,
    isFetching: true,
    errorMessage: undefined,
  };
  const ERROR = 'some error';
  const COLLECTIONS = {
    collection: {
      id: 'some',
    },
  };

  it('should return the initial state', () => {
    expect(shopReducer(undefined, {})).toEqual(INITIAL_STATE);
  });

  it('should return change state on fetching start', () => {
    expect(shopReducer(INITIAL_STATE, fetchCollectionsStart())).toEqual({
      ...INITIAL_STATE,
      isFetching: true,
    });
  });

  it('should return state with error on fetching failure', () => {
    expect(
      shopReducer(STATE_AFTER_START, fetchCollectionsFailure(ERROR))
    ).toEqual({
      ...STATE_AFTER_START,
      isFetching: false,
      errorMessage: ERROR,
    });
  });

  it('should handle the success fetching', () => {
    expect(
      shopReducer(STATE_AFTER_START, fetchCollectionsSuccess(COLLECTIONS))
    ).toEqual({
      ...STATE_AFTER_START,
      errorMessage: undefined,
      collections: COLLECTIONS,
      isFetching: false,
    });
  });
});
