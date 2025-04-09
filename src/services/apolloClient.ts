import {ApolloClient, InMemoryCache, HttpLink} from '@apollo/client';

const httpLink = new HttpLink({
  uri: 'https://countries.trevorblades.com',
});

export const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});
