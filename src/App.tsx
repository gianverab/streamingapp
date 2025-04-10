import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import { ApolloProvider } from '@apollo/client';
import { client } from './api/apollo';
import AppNavigator from './navigation/AppNavigator';

const App = () => {
  return (
    <ApolloProvider client={client}>
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="dark-content" backgroundColor="#f5f5f5" />
        <AppNavigator />
      </SafeAreaView>
    </ApolloProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
