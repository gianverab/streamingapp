import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { Continent } from '../../types';

interface FilterSectionProps {
  continents: Continent[];
  currencies: string[];
  selectedContinent: string | null;
  selectedCurrency: string | null;
  onContinentSelect: (continentCode: string | null) => void;
  onCurrencySelect: (currency: string | null) => void;
}

const FilterSection: React.FC<FilterSectionProps> = ({
  continents,
  currencies,
  selectedContinent,
  selectedCurrency,
  onContinentSelect,
  onCurrencySelect,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Filters</Text>

      <Text style={styles.sectionTitle}>Continent</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.filtersRow}>
        <TouchableOpacity
          style={[
            styles.filterChip,
            selectedContinent === null && styles.selectedFilterChip,
          ]}
          onPress={() => onContinentSelect(null)}>
          <Text
            style={[
              styles.filterText,
              selectedContinent === null && styles.selectedFilterText,
            ]}>
            All
          </Text>
        </TouchableOpacity>

        {continents.map(continent => (
          <TouchableOpacity
            key={continent.code}
            style={[
              styles.filterChip,
              selectedContinent === continent.code && styles.selectedFilterChip,
            ]}
            onPress={() => onContinentSelect(continent.code)}>
            <Text
              style={[
                styles.filterText,
                selectedContinent === continent.code &&
                  styles.selectedFilterText,
              ]}>
              {continent.name}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <Text style={styles.sectionTitle}>Currency</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.filtersRow}>
        <TouchableOpacity
          style={[
            styles.filterChip,
            selectedCurrency === null && styles.selectedFilterChip,
          ]}
          onPress={() => onCurrencySelect(null)}>
          <Text
            style={[
              styles.filterText,
              selectedCurrency === null && styles.selectedFilterText,
            ]}>
            All
          </Text>
        </TouchableOpacity>

        {currencies.map(currency => (
          <TouchableOpacity
            key={currency}
            style={[
              styles.filterChip,
              selectedCurrency === currency && styles.selectedFilterChip,
            ]}
            onPress={() => onCurrencySelect(currency)}>
            <Text
              style={[
                styles.filterText,
                selectedCurrency === currency && styles.selectedFilterText,
              ]}>
              {currency}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 8,
    marginTop: 4,
    color: '#555',
  },
  filtersRow: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  filterChip: {
    backgroundColor: 'white',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    marginRight: 8,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  selectedFilterChip: {
    backgroundColor: '#f4511e',
    borderColor: '#f4511e',
  },
  filterText: {
    color: '#555',
  },
  selectedFilterText: {
    color: 'white',
    fontWeight: '600',
  },
});

export default FilterSection;
