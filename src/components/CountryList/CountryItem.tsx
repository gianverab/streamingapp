import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
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
      <View style={styles.content}>
        <Text style={styles.emoji}>{country.emoji || '🏳️'}</Text>
        <View style={styles.info}>
          <Text style={styles.name}>{country.name}</Text>
          <Text style={styles.details}>
            {country.code} • {country.continent.name}
          </Text>
          {country.currency && (
            <Text style={styles.currency}>Moneda: {country.currency}</Text>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 8,
    marginHorizontal: 10,
    marginVertical: 5,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 2,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  emoji: {
    fontSize: 30,
    marginRight: 15,
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 3,
  },
  details: {
    color: '#666',
    fontSize: 14,
    marginBottom: 3,
  },
  currency: {
    color: '#666',
    fontSize: 14,
  },
});

export default CountryItem;
