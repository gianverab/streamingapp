import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';
import { Country } from '../../graphql/types';

interface CountryItemProps {
  country: Country;
  onPress: () => void;
}

const CountryItem: React.FC<CountryItemProps> = ({ country, onPress }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      activeOpacity={0.7}>
      <View style={styles.emojiContainer}>
        <Text style={styles.emoji}>{country.emoji}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{country.name}</Text>
        <View style={styles.detailsRow}>
          <Text style={styles.code}>{country.code}</Text>
          <Text style={styles.continent}>{country.continent.name}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    backgroundColor: 'white',
  },
  emojiContainer: {
    marginRight: 12,
    justifyContent: 'center',
  },
  emoji: {
    fontSize: 30,
  },
  infoContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
    color: '#333',
  },
  detailsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  code: {
    fontSize: 14,
    color: '#666',
  },
  continent: {
    fontSize: 14,
    color: '#666',
  },
});

export default CountryItem;
