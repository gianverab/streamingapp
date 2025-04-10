import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Country } from '../../types';

interface CountryItemProps {
  country: Country;
  onPress: (countryCode: string) => void;
}

const CountryItem: React.FC<CountryItemProps> = ({ country, onPress }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => onPress(country.code)}>
      <View style={styles.emojiContainer}>
        <Text style={styles.emoji}>{country.emoji}</Text>
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.name}>{country.name}</Text>
        <View style={styles.detailsRow}>
          <Text style={styles.code}>{country.code}</Text>
          <Text style={styles.continent}>{country.continent.name}</Text>
        </View>
        {country.currency && (
          <Text style={styles.currency}>Currency: {country.currency}</Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 16,
    backgroundColor: 'white',
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  emojiContainer: {
    marginRight: 12,
    justifyContent: 'center',
  },
  emoji: {
    fontSize: 32,
  },
  infoContainer: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  detailsRow: {
    flexDirection: 'row',
    marginBottom: 4,
  },
  code: {
    fontSize: 14,
    color: '#666',
    marginRight: 8,
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
  },
  continent: {
    fontSize: 14,
    color: '#666',
    backgroundColor: '#e6f7ff',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
  },
  currency: {
    fontSize: 14,
    color: '#666',
  },
});

export default CountryItem;
