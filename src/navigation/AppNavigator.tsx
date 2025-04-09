// src/navigation/AppNavigator.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParamList } from './NavigationTypes';
import CountryListScreen from '../screens/CountryListScreen';
import CountryDetailScreen from '../screens/CountryDetailScreen';

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <NavigationContainer>
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
          options={({ route }) => ({ title: 'Country Details' })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
