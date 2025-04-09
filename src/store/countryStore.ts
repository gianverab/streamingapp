import { create } from 'zustand';
import { Country } from '../graphql/types';

interface CountryState {
  countries: Country[];
  filteredCountries: Country[];
  searchTerm: string;
  selectedContinent: string | null;
  selectedCurrency: string | null;
  availableCurrencies: string[];

  setCountries: (countries: Country[]) => void;
  setSearchTerm: (term: string) => void;
  setSelectedContinent: (continent: string | null) => void;
  setSelectedCurrency: (currency: string | null) => void;
  filterCountries: () => void;
}

export const useCountryStore = create<CountryState>((set, get) => ({
  countries: [],
  filteredCountries: [],
  searchTerm: '',
  selectedContinent: null,
  selectedCurrency: null,
  availableCurrencies: [],

  setCountries: countries => {
    // Extract unique currencies
    const currencySet = new Set<string>();
    countries.forEach(country => {
      if (country.currency) {
        country.currency.split(',').forEach(currency => {
          currencySet.add(currency.trim());
        });
      }
    });

    set({
      countries,
      filteredCountries: countries,
      availableCurrencies: Array.from(currencySet).sort(),
    });
  },

  setSearchTerm: searchTerm => {
    set({ searchTerm });
    get().filterCountries();
  },

  setSelectedContinent: selectedContinent => {
    set({ selectedContinent });
    get().filterCountries();
  },

  setSelectedCurrency: selectedCurrency => {
    set({ selectedCurrency });
    get().filterCountries();
  },

  filterCountries: () => {
    const { countries, searchTerm, selectedContinent, selectedCurrency } =
      get();

    let filtered = [...countries];

    // Filter by search term
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(country =>
        country.name.toLowerCase().includes(term),
      );
    }

    // Filter by continent
    if (selectedContinent) {
      filtered = filtered.filter(
        country => country.continent.code === selectedContinent,
      );
    }

    // Filter by currency
    if (selectedCurrency) {
      filtered = filtered.filter(country => {
        if (!country.currency) return false;
        return country.currency
          .split(',')
          .some(currency => currency.trim() === selectedCurrency);
      });
    }

    set({ filteredCountries: filtered });
  },
}));
