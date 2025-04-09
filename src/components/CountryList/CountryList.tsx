// src/components/CountryList/CountryList.tsx
import React from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
} from 'react-native';
import { Country } from '../../services/graphql/types';
import CountryItem from './CountryItem';

interface CountryListProps {
  countries: Country[];
  loading: boolean;
  error: any;
  onCountryPress: (countryCode: string) => void;
}

const CountryList: React.FC<CountryListProps> = ({
  countries,
  loading,
  error,
  onCountryPress,
}) => {
  if (loading) {
    return (
      <View style={styles.centerContainer}>
        <ActivityIndicator size="large" color="#f4511e" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.centerContainer}>
        <Text style={styles.errorText}>Error loading countries</Text>
      </View>
    );
  }

  if (countries.length === 0) {
    return (
      <View style={styles.centerContainer}>
        <Text style={styles.noResultsText}>
          No countries found matching your filters
        </Text>
      </View>
    );
  }

  return (
    <FlatList
      data={countries}
      keyExtractor={item => item.code}
      renderItem={({ item }) => (
        <CountryItem country={item} onPress={() => onCountryPress(item.code)} />
      )}
    />
  );
};

const styles = StyleSheet.create({
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  errorText: {
    color: 'red',
    fontSize: 16,
    textAlign: 'center',
  },
  noResultsText: {
    color: '#666',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default CountryList;
