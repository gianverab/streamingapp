import React from 'react';
import { SafeAreaView, StyleSheet, View, Text } from 'react-native';
import { CountryDetailScreenNavigationProps } from '../navigation/NavigationTypes';

/* interface CountryDetailScreenProps {
  navigation: CountryDetailScreenNavigationProp;
} */

const CountryDetailScreen: React.FC<CountryDetailScreenNavigationProps> = ({
  navigation,
}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text>CountryDetailScreen</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
  },
});

export default CountryDetailScreen;
