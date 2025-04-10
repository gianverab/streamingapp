import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useQuery } from '@apollo/client';
import { GET_COUNTRY } from '../api/graphql/queries';
import Loading from '../components/common/Loading';
import VideoPlayer from '../components/video/VideoPlayer';
import { CountryDetailScreenProps } from '../navigation/types';
import { CountryData } from '../types';
import Error from '../components/common/Error';

const CountryDetailScreen: React.FC<CountryDetailScreenProps> = ({ route }) => {
  const { countryCode } = route.params;

  const { loading, error, data } = useQuery<CountryData>(GET_COUNTRY, {
    variables: { code: countryCode },
  });

  if (loading) {
    return <Loading message="Loading country details..." />;
  }

  if (error || !data?.country) {
    return (
      <Error message="Error loading country details. Please try again later." />
    );
  }

  const { country } = data;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
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
          <Text style={styles.infoLabel}>Languages:</Text>
          <View style={styles.languagesContainer}>
            {country.languages.map(language => (
              <View key={language.code} style={styles.languageTag}>
                <Text style={styles.languageText}>{language.name}</Text>
              </View>
            ))}
          </View>
        </View>
      </View>

      <View style={styles.videoSection}>
        <Text style={styles.sectionTitle}>Video Player</Text>
        <VideoPlayer />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
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
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 5,
  },
  code: {
    fontSize: 16,
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
    width: 100,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  infoValue: {
    flex: 1,
    fontSize: 16,
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
    fontSize: 14,
    color: '#0066cc',
  },
  videoSection: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
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

export default CountryDetailScreen;
