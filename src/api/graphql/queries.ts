import { gql } from '@apollo/client';

// Get all continents
export const GET_CONTINENTS = gql`
  query GetContinents {
    continents {
      code
      name
    }
  }
`;

// Get all countries
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

// Get a specific country
export const GET_COUNTRY = gql`
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
      phone
      states {
        code
        name
      }
    }
  }
`;

// Get all languages
export const GET_LANGUAGES = gql`
  query GetLanguages {
    languages {
      code
      name
      native
    }
  }
`;
