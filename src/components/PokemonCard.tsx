import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import { SimplePokemon } from '../interfaces/pokemonInterfaces';
import { FadeInImage } from './FadeInImage';
import { getImageColors } from '../helpers/getColors';

interface Props {
  pokemon: SimplePokemon;
}

const windowWidth = Dimensions.get('window').width;

const PokemonCard = ({ pokemon }: Props) => {
  const [bgColor, setBgColor] = useState('gray');
  const isMounted = useRef(true);

  useEffect(() => {
    if (!pokemon.picture) {
      return;
    }
    getImageColors(pokemon.picture).then(([primary]) => {
      if (!isMounted.current) {
        return;
      }
      setBgColor(primary || 'gray');
    });
    return () => {
      // proteger actualización de estado si el componente está desmontado
      isMounted.current = false;
    };
  }, [pokemon.picture]);

  return (
    <TouchableOpacity onPress={() => { }} activeOpacity={0.8}>
      <View style={{
        ...styles.pokemonCard,
        backgroundColor: bgColor,
      }}>
        <View>
          <Text style={styles.name}>
            {pokemon.name}
            {'\n#' + pokemon.id}
          </Text>
        </View>
        <View style={styles.pokeballContainer}>
          <Image
            source={require('../assets/pokebola-blanca.png')}
            style={styles.pokeball}
          />
        </View>
        <FadeInImage
          uri={pokemon.picture}
          style={styles.pokemonImage}
        />

      </View>
    </TouchableOpacity>
  );
};

export default PokemonCard;

const styles = StyleSheet.create({
  pokemonCard: {
    marginHorizontal: 10,
    backgroundColor: 'grey',
    height: 120,
    width: windowWidth * 0.4,
    marginBottom: 25,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  name: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    top: 20,
    left: 10,
  },
  pokeballContainer: {
    width: 100,
    height: 100,
    position: 'absolute',
    bottom: 0,
    right: 0,
    overflow: 'hidden',
  },
  pokeball: {
    width: 100,
    height: 100,
    position: 'absolute',
    right: -20,
    bottom: -20,
    opacity: 0.5,
  },
  pokemonImage: {
    width: 110,
    height: 110,
    position: 'absolute',
    right: -6,
    bottom: -6,
  },
});
