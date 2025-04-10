import React, { useRef, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  findNodeHandle,
  AccessibilityInfo,
} from 'react-native';
import { Country } from '../../types';
import { scaledFontSize } from '../../utils/accessibility';

interface CountryInfoProps {
  country: Country;
}

const CountryInfo: React.FC<CountryInfoProps> = ({ country }) => {
  const headerRef = useRef(null);

  useEffect(() => {
    // Set focus to the country name header when screen loads
    if (headerRef.current) {
      const reactTag = findNodeHandle(headerRef.current);
      if (reactTag) {
        AccessibilityInfo.setAccessibilityFocus(reactTag);
      }
    }
  }, []);
  return (
    <View>
      <View
        style={styles.headerContainer}
        ref={headerRef}
        accessible={true}
        accessibilityRole="header"
        accessibilityLabel={`${country.name} country. Code: ${country.code}. Continent: ${country.continent.name}`}>
        <Text style={styles.emoji}>{country.emoji}</Text>
        <Text style={styles.name}>{country.name}</Text>
        <Text style={styles.code}>{country.code}</Text>
      </View>

      <View style={styles.infoContainer}>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Continent:</Text>
          <Text style={styles.infoValue}>{country.continent.name}</Text>
        </View>

        {country.capital && (
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Capital:</Text>
            <Text style={styles.infoValue}>{country.capital}</Text>
          </View>
        )}

        {country.currency && (
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Currency:</Text>
            <Text style={styles.infoValue}>{country.currency}</Text>
          </View>
        )}

        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Native Name:</Text>
          <Text style={styles.infoValue}>{country.native}</Text>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Languages:</Text>
          <View style={styles.languagesContainer}>
            {country.languages.length > 0 ? (
              country.languages.map(language => (
                <View key={language.code} style={styles.languageTag}>
                  <Text style={styles.languageText}>{language.name}</Text>
                </View>
              ))
            ) : (
              <Text style={styles.infoValue}>No language data available</Text>
            )}
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  emoji: {
    fontSize: 64,
    marginBottom: 10,
  },
  name: {
    fontSize: scaledFontSize(24),
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 5,
  },
  code: {
    fontSize: scaledFontSize(16),
    color: '#666',
    backgroundColor: '#e6e6e6',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 4,
  },
  infoContainer: {
    padding: 20,
    backgroundColor: 'white',
  },
  infoRow: {
    flexDirection: 'row',
    marginBottom: 15,
    alignItems: 'flex-start',
  },
  infoLabel: {
    width: 120,
    fontSize: scaledFontSize(16),
    fontWeight: 'bold',
    color: '#333',
  },
  infoValue: {
    flex: 1,
    fontSize: scaledFontSize(16),
    color: '#666',
  },
  languagesContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  languageTag: {
    backgroundColor: '#e6f7ff',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 4,
    marginRight: 8,
    marginBottom: 8,
  },
  languageText: {
    fontSize: scaledFontSize(14),
    color: '#0066cc',
  },
});

export default CountryInfo;
