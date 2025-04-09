import {gql} from '@apollo/client';

export const GET_CONTINENTS = gql`
  query GetContinents {
    continents {
      code
      name
    }
  }
`;

export const GET_COUNTRIES = gql`
  query GetCountries {
    countries {
      code
      name
      native
      capital
      emoji
      currency
      languages {
        code
        name
      }
      continent {
        code
        name
      }
    }
  }
`;

export const GET_COUNTRY_BY_CODE = gql`
  query GetCountry($code: ID!) {
    country(code: $code) {
      code
      name
      native
      capital
      emoji
      currency
      languages {
        code
        name
      }
      continent {
        code
        name
      }
    }
  }
`;
