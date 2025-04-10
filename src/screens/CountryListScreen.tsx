import React, { useCallback } from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  Text,
  SafeAreaView,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import { useQuery, useReactiveVar } from '@apollo/client';
import { useNavigation } from '@react-navigation/native';
import { GET_COUNTRIES } from '../graphql/queries';
import {
  searchQueryVar,
  selectedContinentVar,
  selectedCurrencyVar,
  resetFilters,
} from '../services/apollo';
import SearchBar from '../components/CountryList/SearchBar';
//import ContinentFilter from '../components/ContinentFilter';
//import CurrencyFilter from '../components/CurrencyFilter';
import CountryItem from '../components/CountryList/CountryItem';
import { Country } from '../types';

const CountryListScreen: React.FC = () => {
  const navigation = useNavigation();
  const { data, loading, error } = useQuery(GET_COUNTRIES);

  // Usar variables reactivas para el estado de filtros
  const searchQuery = useReactiveVar(searchQueryVar);
  const selectedContinent = useReactiveVar(selectedContinentVar);
  const selectedCurrency = useReactiveVar(selectedCurrencyVar);

  // Verificar si hay filtros activos
  const hasActiveFilters = searchQuery || selectedContinent || selectedCurrency;

  // Filtrar países según los criterios seleccionados
  const filteredCountries = React.useMemo(() => {
    if (!data?.countries) return [];

    let filtered = [...data.countries];

    // Filtrar por búsqueda
    if (searchQuery) {
      filtered = filtered.filter(country =>
        country.name.toLowerCase().includes(searchQuery.toLowerCase()),
      );
    }

    // Filtrar por continente
    if (selectedContinent) {
      filtered = filtered.filter(
        country => country.continent.code === selectedContinent,
      );
    }

    // Filtrar por moneda
    if (selectedCurrency) {
      filtered = filtered.filter(
        country => country.currency === selectedCurrency,
      );
    }

    return filtered;
  }, [data, searchQuery, selectedContinent, selectedCurrency]);

  // Navegación al detalle del país
  const navigateToDetail = useCallback(
    (countryCode: string) => {
      navigation.navigate('CountryDetail', { countryCode });
    },
    [navigation],
  );

  // Mostrar indicador de carga si los datos están cargando
  if (loading) {
    return (
      <View style={styles.centerContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  // Mostrar mensaje de error si hay un problema
  if (error) {
    return (
      <View style={styles.centerContainer}>
        <Text style={styles.errorText}>
          Error al cargar los países: {error.message}
        </Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <SearchBar />
      <ContinentFilter />
      <CurrencyFilter />

      {/* Botón para limpiar filtros (solo visible cuando hay filtros activos) */}
      {hasActiveFilters && (
        <View style={styles.resetButtonContainer}>
          <TouchableOpacity style={styles.resetButton} onPress={resetFilters}>
            <Text style={styles.resetButtonText}>Limpiar filtros</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* Mostrar mensaje cuando no hay resultados */}
      {filteredCountries.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>
            No se encontraron países con los filtros seleccionados
          </Text>
        </View>
      ) : (
        <View style={styles.countContainer}>
          <Text style={styles.countText}>
            Mostrando {filteredCountries.length} países
            {hasActiveFilters ? ' (filtrados)' : ''}
          </Text>
        </View>
      )}

      <FlatList
        data={filteredCountries}
        keyExtractor={item => item.code}
        renderItem={({ item }) => (
          <CountryItem country={item} onPress={navigateToDetail} />
        )}
        contentContainerStyle={[
          styles.listContent,
          filteredCountries.length === 0 && styles.emptyList,
        ]}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
  },
  listContent: {
    paddingVertical: 10,
  },
  emptyList: {
    flexGrow: 1,
  },
  emptyContainer: {
    padding: 20,
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
  resetButtonContainer: {
    paddingHorizontal: 10,
    paddingBottom: 10,
    alignItems: 'flex-end',
  },
  resetButton: {
    backgroundColor: '#f0f0f0',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  resetButtonText: {
    color: '#666',
    fontSize: 14,
  },
  countContainer: {
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  countText: {
    color: '#666',
    fontSize: 14,
  },
});

export default CountryListScreen;
