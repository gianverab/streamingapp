import React, { useMemo } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useQuery } from '@apollo/client';
import { GET_COUNTRIES } from '../../api/graphql/queries';
import { LOCAL_CURRENCY_QUERY, writeSelectedCurrency } from '../apollo/client';

const CurrencyFilter: React.FC = () => {
  const { data: countriesData } = useQuery(GET_COUNTRIES);
  const { data: localData } = useQuery(LOCAL_CURRENCY_QUERY);

  // Extraer monedas únicas
  const currencies = useMemo(() => {
    if (!countriesData?.countries) return [];

    const currencySet = new Set<string>();
    countriesData.countries.forEach((country: any) => {
      if (country.currency) {
        currencySet.add(country.currency);
      }
    });

    return Array.from(currencySet).sort();
  }, [countriesData]);

  const handleCurrencyChange = (value: string) => {
    writeSelectedCurrency(value);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Filtrar por moneda:</Text>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={localData?.selectedCurrency || ''}
          onValueChange={handleCurrencyChange}
          style={styles.picker}>
          <Picker.Item label="Todas las monedas" value="" />
          {currencies.map((currency: string) => (
            <Picker.Item key={currency} label={currency} value={currency} />
          ))}
        </Picker>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    overflow: 'hidden',
    backgroundColor: '#fff',
  },
  picker: {
    height: 40,
  },
});

export default CurrencyFilter;
