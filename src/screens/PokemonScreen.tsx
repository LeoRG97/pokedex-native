import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParams } from '../navigation/Navigator';

interface Props extends NativeStackScreenProps<RootStackParams, 'PokemonScreen'> { }

const PokemonScreen = ({ route }: Props) => {

  console.log(route.params);

  return (
    <View>
      <Text>PokemonScreen</Text>
    </View>
  );
};

export default PokemonScreen;

const styles = StyleSheet.create({});
