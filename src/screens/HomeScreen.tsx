/* eslint-disable react-native/no-inline-styles */
import { ActivityIndicator, FlatList, Image, View } from 'react-native';
import React from 'react';
import { appTheme } from '../theme/appTheme';
import HeaderTitle from '../components/HeaderTitle';
import usePokemonPaginated from '../hooks/usePokemonPaginated';
import PokemonCard from '../components/PokemonCard';

const HomeScreen = () => {
  const { simplePokemonList, loadPokemons } = usePokemonPaginated();

  return (
    <>
      <Image
        source={require('../assets/pokebola.png')}
        style={appTheme.pokeballBg}
      />
      <View style={{
        // ...appTheme.globalMargin,
        alignItems: 'center',
      }}>
        <FlatList
          ListHeaderComponent={() => <HeaderTitle title="Pokedex" />}
          data={simplePokemonList}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => <PokemonCard pokemon={item} />}
          keyExtractor={(pokemon) => pokemon.id}
          onEndReached={loadPokemons}
          onEndReachedThreshold={0.4}
          ListFooterComponent={(
            <ActivityIndicator
              style={{ height: 100 }}
              size={25}
              color="gray"
            />
          )}
        />
      </View>
    </>
  );
};

export default HomeScreen;
