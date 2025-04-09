import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { typePolicies } from './typePolicies';

// HTTP link for country API
const httpLink = createHttpLink({
  uri: 'https://countries.trevorblades.com',
});

const cache = new InMemoryCache({
  typePolicies: typePolicies,
});

// Create and export the Apollo client
export const client = new ApolloClient({
  link: httpLink,
  cache,
  connectToDevTools: true, // Útil para depuración
});
