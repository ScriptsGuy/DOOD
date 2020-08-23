import * as t from '../types';
import algoliasearch from 'algoliasearch/lite';

export const AlgoSearch = (query) => async (dispatch, getState) => {
  console.log('actionnnnnnn', query.typeof);

  const searchClient = algoliasearch('LMQ49UKOZA', 'a9adf7fd5943a630c82a62024c953e6e');
  const index = searchClient.initIndex('restaurants');
  //   if (query !== '' && query !== undefined && query !== null) {
  //     const result = await index.search(query);
  //     console.log(result.hits);
  //     if (result.hits[0] !== undefined) {
  //       dispatch({ type: t.ALGO_SEARCH, payload: result.hits });
  //     }
  //   } else {
  //     dispatch({ type: t.ALGO_CLEAR });
  //   }

  if (query === ' ') {
    dispatch({ type: t.ALGO_CLEAR });
  } else if (query === undefined) {
    dispatch({ type: t.ALGO_CLEAR });
  } else if (query === '') {
    dispatch({ type: t.ALGO_CLEAR });
  } else if (query === null) {
    dispatch({ type: t.ALGO_CLEAR });
  } else {
    const result = await index.search(query);
    console.log(result.hits);
    if (result.hits[0] !== undefined) {
      dispatch({ type: t.ALGO_SEARCH, payload: result.hits });
    }
  }
};
