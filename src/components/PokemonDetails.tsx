import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { PokemonFull } from '../interfaces/pokemonInterfaces';
import { FadeInImage } from './FadeInImage';

interface Props {
  pokemon: PokemonFull;
}

const PokemonDetails = ({ pokemon }: Props) => {

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{
        ...StyleSheet.absoluteFillObject,
      }}
    >
      <View style={{
        ...styles.container,
        marginTop: 370,
      }}>
        <Text style={styles.title}>Types</Text>
        <View style={{ flexDirection: 'row' }}>
          {pokemon.types.map(({ type }) => (
            <Text
              style={{ ...styles.regularText, marginRight: 10 }}
              key={type.name}>
              {type.name}
            </Text>
          ))}
        </View>

        <Text style={styles.title}>Peso</Text>
        <Text style={styles.regularText}>{pokemon.weight} lb</Text>
      </View>

      {/* sprites */}
      <View style={styles.container}>
        <Text style={styles.title}>Sprites</Text>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        <FadeInImage
          uri={pokemon.sprites.front_default}
          style={styles.basicSprite}
        />
        <FadeInImage
          uri={pokemon.sprites.back_default}
          style={styles.basicSprite}
        />
        <FadeInImage
          uri={pokemon.sprites.front_shiny}
          style={styles.basicSprite}
        />
        <FadeInImage
          uri={pokemon.sprites.back_shiny}
          style={styles.basicSprite}
        />
      </ScrollView>

      {/* habilidades base */}
      <View style={styles.container}>
        <Text style={styles.title}>Habilidades base</Text>
        <View style={{ flexDirection: 'row' }}>
          {pokemon.abilities.map(({ ability }) => (
            <Text
              style={{ ...styles.regularText, marginRight: 10 }}
              key={ability.name}>
              {ability.name}
            </Text>
          ))}
        </View>
      </View>

      {/* movimientos */}
      <View style={styles.container}>
        <Text style={styles.title}>Movimientos</Text>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
          {pokemon.moves.map(({ move }) => (
            <Text
              style={{ ...styles.regularText, marginRight: 10 }}
              key={move.name}>
              {move.name}
            </Text>
          ))}
        </View>
      </View>

      {/* stats */}
      <View style={styles.container}>
        <Text style={styles.title}>Stats</Text>
        <View style={{ flexWrap: 'wrap' }}>
          {pokemon.stats.map(({ stat, base_stat }, i) => (
            <View
              key={stat.name + i}
              style={{ flexDirection: 'row' }}
            >
              <Text
                style={{
                  ...styles.regularText,
                  marginRight: 10,
                  flex: 1,
                }}>
                {stat.name}
              </Text>
              <Text
                style={{
                  ...styles.regularText,
                  fontWeight: 'bold',
                  flex: 1,
                }}>
                {base_stat}
              </Text>
            </View>
          ))}
        </View>
      </View>

      {/* sprite final */}

      <View style={styles.bottomSprite}>
        <FadeInImage
          uri={pokemon.sprites.front_default}
          style={styles.basicSprite}
        />
      </View>

    </ScrollView>
  );
};

export default PokemonDetails;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 22,
    marginTop: 20,
  },
  regularText: {
    fontSize: 18,
  },
  basicSprite: {
    width: 100,
    height: 100,
  },
  bottomSprite: {
    marginBottom: 80,
    alignItems: 'center',
  },
});
