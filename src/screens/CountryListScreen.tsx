import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { useCountries } from '../hooks/useCountries';
import CountryFilters from '../components/country/CountryFilters';
import CountryList from '../components/country/CountryList';
import Loading from '../components/common/Loading';
import { CountryListScreenProps } from '../navigation/types';
import Error from '../components/common/Error';

const CountryListScreen: React.FC<CountryListScreenProps> = ({
  navigation,
}) => {
  const {
    countries,
    continents,
    currencies,
    loading,
    error,
    filterOptions,
    updateFilter,
  } = useCountries();

  const handleSelectCountry = (countryCode: string) => {
    navigation.navigate('CountryDetail', { countryCode });
  };

  if (loading) {
    return <Loading message="Loading countries..." />;
  }

  if (error) {
    return <Error message="Error loading countries. Please try again later." />;
  }

  return (
    <View style={styles.container}>
      <CountryFilters
        filterOptions={filterOptions}
        updateFilter={updateFilter}
        continents={continents}
        currencies={currencies}
      />
      <CountryList
        countries={countries}
        onSelectCountry={handleSelectCountry}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  errorText: {
    fontSize: 16,
    color: 'red',
    textAlign: 'center',
  },
});

export default CountryListScreen;
