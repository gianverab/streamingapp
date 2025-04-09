export interface Language {
  code: string;
  name: string;
}

export interface Continent {
  code: string;
  name: string;
}

export interface Country {
  code: string;
  name: string;
  native: string;
  capital: string;
  emoji: string;
  currency: string;
  languages: Language[];
  continent: Continent;
}

export interface GetCountriesResponse {
  countries: Country[];
}

export interface GetContinentsResponse {
  continents: Continent[];
}

export interface GetCountryResponse {
  country: Country;
}
