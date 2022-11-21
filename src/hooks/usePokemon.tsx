import { useEffect, useState } from 'react';
import { pokemonApi } from '../api/pokemon-api';
import { PokemonFull } from '../interfaces/pokemonInterfaces';

export const usePokemon = (id: string) => {
  const [isLoading, setIsLoading] = useState(true);
  const [pokemonData, setPokemonData] = useState<PokemonFull>({} as PokemonFull);

  const loadPokemonData = async () => {
    const resp = await pokemonApi.get<PokemonFull>(`https://pokeapi.co/api/v2/pokemon/${id}`);
    setPokemonData(resp.data);
    setIsLoading(false);
  };

  useEffect(() => {
    loadPokemonData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    pokemonData,
    isLoading,
  };
};
