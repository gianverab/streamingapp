import React from 'react';
import { SafeAreaView, StyleSheet, ScrollView } from 'react-native';
import { useQuery } from '@apollo/client';
import { GET_COUNTRY_BY_CODE } from '../graphql/queries';
import { GetCountryResponse } from '../types';
import CountryInfo from '../components/CountryDetail/CountryInfo';
import VideoPlayer from '../components/CountryDetail/VideoPlayer';
import Loading from '../components/common/Loading';
import Error from '../components/common/Error';
import { CountryDetailScreenNavigationProps } from '../navigation/NavigationTypes';

/* interface CountryDetailScreenProps {
  navigation: CountryDetailScreenNavigationProp;
} */

const CountryDetailScreen: React.FC<CountryDetailScreenNavigationProps> = ({
  route,
}) => {
  const { countryCode } = route.params;

  const { loading, error, data, refetch } = useQuery<GetCountryResponse>(
    GET_COUNTRY_BY_CODE,
    {
      variables: { code: countryCode },
    },
  );

  if (loading) {
    return <Loading message="Loading country details..." />;
  }

  if (error || !data) {
    return (
      <Error
        message="Failed to load country details"
        onRetry={() => refetch()}
      />
    );
  }

  const { country } = data;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <CountryInfo country={country} />
        <VideoPlayer title="Demo HLS Stream" />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  scrollView: {
    flex: 1,
  },
});

export default CountryDetailScreen;
