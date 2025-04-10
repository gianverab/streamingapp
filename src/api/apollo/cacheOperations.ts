import { gql } from '@apollo/client';
import { client } from './apolloClient';
import {
  searchQueryVar,
  selectedContinentVar,
  selectedCurrencyVar,
} from './reactiveVars';

// Tipos para el estado local
export interface FilterState {
  searchQuery: string;
  selectedContinent: string;
  selectedCurrency: string;
}

// Fragments para las operaciones de caché
export const FILTER_STATE_FRAGMENT = gql`
  fragment FilterStateFragment on Query {
    searchQuery @client
    selectedContinent @client
    selectedCurrency @client
  }
`;

// Queries para leer el estado local
export const GET_FILTER_STATE = gql`
  query GetFilterState {
    searchQuery @client
    selectedContinent @client
    selectedCurrency @client
  }
`;

// Inicializar la caché con valores por defecto
export const initializeCache = () => {
  client.writeQuery({
    query: GET_FILTER_STATE,
    data: {
      searchQuery: '',
      selectedContinent: '',
      selectedCurrency: '',
    },
  });
};

// Operations to update local state
export const updateSearchQuery = (query: string) => {
  searchQueryVar(query);
  client.writeQuery({
    query: gql`
      query WriteSearchQuery {
        searchQuery @client
      }
    `,
    data: {
      searchQuery: query,
    },
  });
};

export const updateSelectedContinent = (continent: string) => {
  selectedContinentVar(continent);
  client.writeQuery({
    query: gql`
      query WriteSelectedContinent {
        selectedContinent @client
      }
    `,
    data: {
      selectedContinent: continent,
    },
  });
};

export const updateSelectedCurrency = (currency: string) => {
  selectedCurrencyVar(currency);
  client.writeQuery({
    query: gql`
      query WriteSelectedCurrency {
        selectedCurrency @client
      }
    `,
    data: {
      selectedCurrency: currency,
    },
  });
};

// Reset filters
export const resetFilters = () => {
  updateSearchQuery('');
  updateSelectedContinent('');
  updateSelectedCurrency('');
};
