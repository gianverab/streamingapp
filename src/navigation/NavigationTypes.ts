import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamList = {
  CountryList: undefined;
  CountryDetail: { countryCode: string };
};

export type CountryListScreenNavigationProps = NativeStackScreenProps<
  RootStackParamList,
  'CountryList'
>;

export type CountryDetailScreenNavigationProps = NativeStackScreenProps<
  RootStackParamList,
  'CountryDetail'
>;
