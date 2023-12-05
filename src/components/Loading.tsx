import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Loading = () => {
  return (
    <View style={styles.loadingContainer}>
      <ActivityIndicator size={50} color="gray" />
      <Text>Cargando...</Text>
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

