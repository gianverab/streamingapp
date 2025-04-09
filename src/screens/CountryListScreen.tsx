import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { useQuery } from '@apollo/client';
import { GET_COUNTRIES, GET_CONTINENTS } from '../graphql/queries';
import {
  GetCountriesResponse,
  GetContinentsResponse,
  Continent,
} from '../graphql/types';
import SearchBar from '../components/CountryList/SearchBar';
import FilterSection from '../components/CountryList/FilterSection';
import CountryList from '../components/CountryList/CountryList';
import Loading from '../components/common/Loading';
import Error from '../components/common/Error';
import { useCountryStore } from '../store/countryStore';
import { CountryListScreenNavigationProps } from '../navigation/NavigationTypes';

/* interface CountryListScreenProps {
  navigation: CountryListScreenNavigationProps;
} */

const CountryListScreen: React.FC<CountryListScreenNavigationProps> = ({
  navigation,
}) => {
  const {
    setCountries,
    filteredCountries,
    searchTerm,
    setSearchTerm,
    selectedContinent,
    setSelectedContinent,
    selectedCurrency,
    setSelectedCurrency,
    availableCurrencies,
  } = useCountryStore();

  const [continents, setContinents] = useState<Continent[]>([]);

  // Fetch countries
  const {
    loading: loadingCountries,
    error: countriesError,
    refetch: refetchCountries,
  } = useQuery<GetCountriesResponse>(GET_COUNTRIES, {
    onCompleted: data => {
      setCountries(data.countries);
    },
  });

  // Fetch continents
  const {
    loading: loadingContinents,
    error: continentsError,
    refetch: refetchContinents,
  } = useQuery<GetContinentsResponse>(GET_CONTINENTS, {
    onCompleted: data => {
      setContinents(data.continents);
    },
  });

  const loading = loadingCountries || loadingContinents;
  const error = countriesError || continentsError;

  const handleRetry = () => {
    refetchCountries();
    refetchContinents();
  };

  const handleCountryPress = (countryCode: string) => {
    navigation.navigate('CountryDetail', { countryCode });
  };

  if (loading) {
    return <Loading message="Loading countries data..." />;
  }

  if (error) {
    return <Error message="Failed to load data" onRetry={handleRetry} />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <SearchBar
          value={searchTerm}
          onChangeText={setSearchTerm}
          placeholder="Search countries by name..."
        />

        <FilterSection
          continents={continents}
          currencies={availableCurrencies}
          selectedContinent={selectedContinent}
          selectedCurrency={selectedCurrency}
          onContinentSelect={setSelectedContinent}
          onCurrencySelect={setSelectedCurrency}
        />

        <CountryList
          countries={filteredCountries}
          loading={loading}
          error={error}
          onCountryPress={handleCountryPress}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
  },
});

export default CountryListScreen;
