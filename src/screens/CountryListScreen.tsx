import React from 'react';
import { SafeAreaView, StyleSheet, View, Text } from 'react-native';
import { CountryListScreenNavigationProp } from '../navigation/NavigationTypes';

interface CountryListScreenProps {
  navigation: CountryListScreenNavigationProp;
}

const CountryListScreen: React.FC<CountryListScreenProps> = ({
  navigation,
}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text>CountryListScreen</Text>
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

export default CountryListScreen;
