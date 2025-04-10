import React from 'react';
import { View, StyleSheet } from 'react-native';
import SearchBar from '../common/SearchBar';
import Dropdown from '../common/Dropdown';
import { FilterOptions } from '../../types';
import { Continent } from '../../types';

interface CountryFiltersProps {
  filterOptions: FilterOptions;
  updateFilter: (key: keyof FilterOptions, value: string) => void;
  continents: Continent[];
  currencies: string[];
}

const CountryFilters: React.FC<CountryFiltersProps> = ({
  filterOptions,
  updateFilter,
  continents,
  currencies,
}) => {
  const continentOptions = [
    { label: 'All Continents', value: '' },
    ...continents.map(continent => ({
      label: continent.name,
      value: continent.code,
    })),
  ];

  const currencyOptions = [
    { label: 'All Currencies', value: '' },
    ...currencies.map(currency => ({
      label: currency || 'No Currency',
      value: currency,
    })),
  ];

  return (
    <View style={styles.container}>
      <SearchBar
        value={filterOptions.search}
        onChangeText={text => updateFilter('search', text)}
        placeholder="Search countries..."
      />

      <View style={styles.dropdownContainer}>
        <View style={styles.dropdownWrapper}>
          <Dropdown
            label="Continent"
            items={continentOptions}
            selectedValue={filterOptions.continent}
            onValueChange={value => updateFilter('continent', value)}
          />
        </View>

        <View style={styles.dropdownWrapper}>
          <Dropdown
            label="Currency"
            items={currencyOptions}
            selectedValue={filterOptions.currency}
            onValueChange={value => updateFilter('currency', value)}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: 'white',
  },
  dropdownContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dropdownWrapper: {
    flex: 1,
    marginHorizontal: 5,
  },
});

export default CountryFilters;
