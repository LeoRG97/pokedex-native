import { useRef } from 'react';
import { Animated } from 'react-native';

export const useAnimation = () => {
  const opacity = useRef(new Animated.Value(0)).current;
  const position = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true, // acelerar la animación por hardware
    }).start();
  };

  return {
    fadeIn,
    opacity,
    position,
  };
};
