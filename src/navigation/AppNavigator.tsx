import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './types';
import CountryListScreen from '../screens/CountryListScreen';
import CountryDetailScreen from '../screens/CountryDetailScreen';

// Create the navigator
const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="CountryList"
        screenOptions={{
          headerShown: true,
          headerStyle: {
            backgroundColor: '#f5f5f5',
          },
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
