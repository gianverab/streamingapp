import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import CountryItem from './CountryItem';
import { Country } from '../../types';

interface CountryListProps {
  countries: Country[];
  onSelectCountry: (countryCode: string) => void;
}

const CountryList: React.FC<CountryListProps> = ({
  countries,
  onSelectCountry,
}) => {
  if (countries.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>No countries found</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={countries}
      keyExtractor={item => item.code}
      renderItem={({ item }) => (
        <CountryItem country={item} onPress={onSelectCountry} />
      )}
      contentContainerStyle={styles.listContainer}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    padding: 16,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  emptyText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
});

export default CountryList;
