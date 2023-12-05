/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';

/**
 * Hook para devolver un valor después de un lapso de tiempo sin modificar el valor de un TextInput
 */
export const useDebouncedValue = (input: string = '', time: number = 500) => {

  const [debouncedValue, setDebouncedValue] = useState(input);

  useEffect(() => {
    const timeout = setTimeout(() => {
      // asigna el valor ingresado luego del tiempo de espera
      setDebouncedValue(input);
    }, time);

    return () => {
      // cuando el useEffect se dispara, la instancia anterior se detiene, por ende ya no se ejecuta
      clearTimeout(timeout);
    };
  }, [input]);

  return debouncedValue;
};
