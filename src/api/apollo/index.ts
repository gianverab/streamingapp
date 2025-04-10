export { client } from './apolloClient';
export {
  initializeCache,
  updateSearchQuery,
  updateSelectedContinent,
  updateSelectedCurrency,
  resetFilters,
} from './cacheOperations';
export {
  searchQueryVar,
  selectedContinentVar,
  selectedCurrencyVar,
} from './reactiveVars';
export type { FilterState } from './cacheOperations';
