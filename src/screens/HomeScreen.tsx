import { ActivityIndicator, FlatList, Image, View } from 'react-native';
import React from 'react';
import { appTheme } from '../theme/appTheme';
import HeaderTitle from '../components/HeaderTitle';
import usePokemonPaginated from '../hooks/usePokemonPaginated';
import PokemonCard from '../components/PokemonCard';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const HomeScreen = () => {
  const { simplePokemonList, loadPokemons } = usePokemonPaginated();

  const { top } = useSafeAreaInsets();
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
          ListHeaderComponent={() => <HeaderTitle
            title="Pokedex"
            style={{
              top: top + 20,
              marginBottom: top + 20,
            }}
          />}
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
