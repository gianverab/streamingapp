import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './NavigationTypes';
import CountryListScreen from '../screens/CountryListScreen';
import CountryDetailScreen from '../screens/CountryDetailScreen';

// Create the navigator
const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="CountryList"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen
        name="CountryList"
        component={CountryListScreen}
        options={{ title: 'Countries' }}
      />
      <Stack.Screen
        name="CountryDetail"
        component={CountryDetailScreen}
        options={{ title: 'Country Details' }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
