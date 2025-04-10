import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useQuery } from '@apollo/client';
import { GET_COUNTRY } from '../api/graphql/queries';
import Loading from '../components/common/Loading';
import VideoPlayer from '../components/video/VideoPlayer';
import { CountryDetailScreenProps } from '../navigation/types';
import { CountryData } from '../types';
import Error from '../components/common/Error';
import CountryInfo from '../components/country/CountryInfo';

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
      <CountryInfo country={country} />

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
