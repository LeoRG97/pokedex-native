import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

const HomeScreen = () => {
  return (
    <View>
      <Text>HomeScreen</Text>
      <Icon name="star-outline" color="red" size={32} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
