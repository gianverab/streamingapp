import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamList = {
  CountryList: undefined;
  CountryDetail: { countryCode: string };
};

export type CountryListScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'CountryList'
>;

export type CountryDetailScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'CountryDetail'
>;
