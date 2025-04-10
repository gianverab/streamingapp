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
  phone?: string;
  emoji?: string;
  currency: string;
  languages: Language[];
  continent: Continent;
}

export interface CountriesData {
  countries: Country[];
}

export interface ContinentsData {
  continents: Continent[];
}

export interface CountryData {
  country: Country;
}

export interface FilterOptions {
  search: string;
  continent: string;
  currency: string;
}
