import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Country } from '../../services/graphql/types';

interface CountryInfoProps {
  country: Country;
}

const CountryInfo: React.FC<CountryInfoProps> = ({ country }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.emoji}>{country.emoji}</Text>
        <Text style={styles.name}>{country.name}</Text>
      </View>

      <ScrollView style={styles.infoContainer}>
        <InfoItem label="Code" value={country.code} />
        <InfoItem label="Native Name" value={country.native} />
        <InfoItem label="Capital" value={country.capital} />
        <InfoItem label="Currency" value={country.currency || 'N/A'} />
        <InfoItem
          label="Continent"
          value={`${country.continent.name} (${country.continent.code})`}
        />

        <Text style={styles.sectionTitle}>Languages</Text>
        {country.languages.length > 0 ? (
          country.languages.map((language, index) => (
            <Text key={language.code} style={styles.languageItem}>
              • {language.name} ({language.code})
            </Text>
          ))
        ) : (
          <Text style={styles.noDataText}>No language data available</Text>
        )}
      </ScrollView>
    </View>
  );
};

interface InfoItemProps {
  label: string;
  value: string;
}

const InfoItem: React.FC<InfoItemProps> = ({ label, value }) => (
  <View style={styles.infoItem}>
    <Text style={styles.infoLabel}>{label}:</Text>
    <Text style={styles.infoValue}>{value}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f8f8f8',
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  emoji: {
    fontSize: 60,
    marginBottom: 10,
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
  },
  infoContainer: {
    flex: 1,
  },
  infoItem: {
    flexDirection: 'row',
    marginBottom: 12,
    paddingBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  infoLabel: {
    width: 100,
    fontWeight: 'bold',
    color: '#555',
  },
  infoValue: {
    flex: 1,
    color: '#333',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 8,
    color: '#333',
  },
  languageItem: {
    marginLeft: 8,
    marginBottom: 4,
    color: '#333',
  },
  noDataText: {
    color: '#888',
    fontStyle: 'italic',
    marginLeft: 8,
  },
});

export default CountryInfo;
