import { ApolloClient, InMemoryCache } from '@apollo/client';
import { typePolicies } from './typePolicies';

const cache = new InMemoryCache({
  typePolicies: typePolicies,
});

// Create and export the Apollo client
export const client = new ApolloClient({
  uri: 'https://countries.trevorblades.com',
  cache,
});
