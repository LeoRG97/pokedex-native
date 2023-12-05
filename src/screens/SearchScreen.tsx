import { View, Platform, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import SearchInput from '../components/SearchInput';
import usePokemonSearch from '../hooks/usePokemonSearch';
import HeaderTitle from '../components/HeaderTitle';
import PokemonCard from '../components/PokemonCard';
import Loading from '../components/Loading';
import { SimplePokemon } from '../interfaces/pokemonInterfaces';

const SearchScreen = () => {

  const { top } = useSafeAreaInsets();
  const { isFetching, simplePokemonList } = usePokemonSearch();

  const [filteredPokemons, setFilteredPokemons] = useState<SimplePokemon[]>([]);

  const [term, setTerm] = useState('');

  useEffect(() => {
    if (term.length === 0) {
      return setFilteredPokemons([]);
    }

    if (isNaN(Number(term))) {
      // búsqueda por nombre
      return setFilteredPokemons(
        simplePokemonList.filter((pokemon) => pokemon.name.toLowerCase().includes(term.toLowerCase()))
      );
    }

    // búsqueda por id
    const pokemonById = simplePokemonList.find((pokemon) => pokemon.id === term);
    setFilteredPokemons(pokemonById ? [pokemonById] : []);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [term]);


  if (isFetching) {
    return (
      <Loading />
    );
  }

  return (
    <View style={{
      flex: 1,
      marginHorizontal: 20,
    }}>

      <SearchInput
        onDebounce={setTerm}
        style={{
          position: 'absolute',
          zIndex: 999,
          width: '100%',
          top: Platform.OS === 'ios' ? top : top + 30,
        }}
      />

      <FlatList
        ListHeaderComponent={() => (
          <View style={{ marginTop: Platform.OS === 'ios' ? top : top + 20 }}>
            <HeaderTitle
              title={term}
              style={{
                marginTop: Platform.OS === 'ios' ? top + 25 : top + 75,
                paddingBottom: 10,
              }}
            />
          </View>
        )}
        data={filteredPokemons}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <PokemonCard pokemon={item} />}
        keyExtractor={(pokemon) => pokemon.id}
      />

    </View>
  );
};

export default SearchScreen;

