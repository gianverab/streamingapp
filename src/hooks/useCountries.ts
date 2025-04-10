import { useState, useMemo } from 'react';
import { useQuery } from '@apollo/client';
import { GET_COUNTRIES, GET_CONTINENTS } from '../api/graphql/queries';
import { CountriesData, ContinentsData, FilterOptions } from '../types';

export const useCountries = () => {
  const [filterOptions, setFilterOptions] = useState<FilterOptions>({
    search: '',
    continent: '',
    currency: '',
  });

  // Fetch countries data
  const {
    loading: countriesLoading,
    error: countriesError,
    data: countriesData,
  } = useQuery<CountriesData>(GET_COUNTRIES);

  // Fetch continents data
  const {
    loading: continentsLoading,
    error: continentsError,
    data: continentsData,
  } = useQuery<ContinentsData>(GET_CONTINENTS);

  // Extract unique currencies from countries data
  const currencies = useMemo(() => {
    if (!countriesData?.countries) return [];

    const currencySet = new Set<string>();

    countriesData.countries.forEach(country => {
      if (country.currency) {
        country.currency.split(',').forEach(currency => {
          currencySet.add(currency.trim());
        });
      }
    });

    return Array.from(currencySet).sort();
  }, [countriesData]);

  // Apply filters to countries data
  const filteredCountries = useMemo(() => {
    if (!countriesData?.countries) return [];

    return countriesData.countries.filter(country => {
      // Filter by search term
      const matchesSearch =
        !filterOptions.search ||
        country.name.toLowerCase().includes(filterOptions.search.toLowerCase());

      // Filter by continent
      const matchesContinent =
        !filterOptions.continent ||
        country.continent.code === filterOptions.continent;

      // Filter by currency
      const matchesCurrency =
        !filterOptions.currency ||
        (country.currency && country.currency.includes(filterOptions.currency));

      return matchesSearch && matchesContinent && matchesCurrency;
    });
  }, [countriesData, filterOptions]);

  const updateFilter = (key: keyof FilterOptions, value: string) => {
    setFilterOptions(prev => ({
      ...prev,
      [key]: value,
    }));
  };

  const loading = countriesLoading || continentsLoading;
  const error = countriesError || continentsError;

  return {
    countries: filteredCountries,
    continents: continentsData?.continents || [],
    currencies,
    loading,
    error,
    filterOptions,
    updateFilter,
  };
};
