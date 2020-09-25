import * as t from '../types';
import algoliasearch from 'algoliasearch/lite';

export const AlgoSearch = (query) => async (dispatch, getState) => {
  //   console.log('actionnnnnnn', query.typeof);

  const searchClient = algoliasearch(process.env.algoliaAppKey, process.env.algoliaAdminKey);
  const index = searchClient.initIndex(process.env.algoliaIndexName);

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
    // console.log(result.hits);
    if (result.hits[0] !== undefined) {
      dispatch({ type: t.ALGO_SEARCH, payload: result.hits });
    }
  }
};
