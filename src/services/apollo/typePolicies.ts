// src/apollo/typePolicies.ts
import { TypePolicies } from '@apollo/client';
import {
  searchQueryVar,
  selectedContinentVar,
  selectedCurrencyVar,
} from './reactiveVars';

// Defining type policies for Apollo cache
export const typePolicies: TypePolicies = {
  Query: {
    fields: {
      searchQuery: {
        read() {
          return searchQueryVar();
        },
      },
      selectedContinent: {
        read() {
          return selectedContinentVar();
        },
      },
      selectedCurrency: {
        read() {
          return selectedCurrencyVar();
        },
      },
    },
  },
};
