import { ActivityIndicator, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParams } from '../navigation/Navigator';
import Icon from 'react-native-vector-icons/Ionicons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { FadeInImage } from '../components/FadeInImage';
import { usePokemon } from '../hooks/usePokemon';
import PokemonDetails from '../components/PokemonDetails';

interface Props extends NativeStackScreenProps<RootStackParams, 'PokemonScreen'> { }

const PokemonScreen = ({ navigation, route }: Props) => {

  const { top } = useSafeAreaInsets();

  const { color, simplePokemon } = route.params;
  const { id, name, picture } = simplePokemon;

  const { isLoading, pokemonData } = usePokemon(id);

  console.log({ pokemonData });


  return (
    <View style={{ flex: 1 }}>
      {/* Header container */}
      <View style={{
        ...styles.header,
        backgroundColor: color,
      }}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={{ ...styles.backButton, top: top + 10 }}
          onPress={() => navigation.pop()}
        >
          <Icon
            name="arrow-back-outline"
            color="white"
            size={35}
          />
        </TouchableOpacity>
        {/* Nombre del Pokemon */}
        <Text style={{
          ...styles.pokemonName,
          top: top + 45,
        }}>
          {name + '\n'}#{id}
        </Text>
        {/* Pokebola blanca */}
        <Image
          source={require('../assets/pokebola-blanca.png')}
          style={styles.pokeball}
        />
        {/* Imagen del pokemon */}
        <FadeInImage
          uri={picture}
          style={styles.pokemonImage}
        />
      </View>

      {/* Detalles del pokemon */}
      {isLoading ? <View style={styles.loadingContainer}>
        <ActivityIndicator
          color={color}
          size={60}
        />
      </View> : <PokemonDetails pokemon={pokemonData} />}
    </View>
  );
};

export default PokemonScreen;

const styles = StyleSheet.create({
  header: {
    height: 370,
    zIndex: 999,
    alignItems: 'center',
    borderBottomLeftRadius: 1000,
    borderBottomRightRadius: 1000,
  },
  backButton: {
    position: 'absolute',
    left: 20,
  },
  pokemonName: {
    color: 'white',
    fontSize: 40,
    alignSelf: 'flex-start',
    left: 20,
  },
  pokeball: {
    width: 250,
    height: 250,
    bottom: -20,
    opacity: 0.7,
  },
  pokemonImage: {
    width: 250,
    height: 250,
    position: 'absolute',
    bottom: -15,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
