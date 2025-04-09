import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export type RootStackParamList = {
  CountryList: undefined;
  CountryDetail: { countryCode: string };
};

export type CountryListScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'CountryList'
>;

export type CountryDetailScreenRouteProp = RouteProp<
  RootStackParamList,
  'CountryDetail'
>;

export type CountryDetailScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'CountryDetail'
>;
