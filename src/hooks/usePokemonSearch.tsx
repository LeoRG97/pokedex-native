import { useEffect, useState } from 'react';
import { pokemonApi } from '../api/pokemon-api';
import { PokemonPaginatedResponse, Result, SimplePokemon } from '../interfaces/pokemonInterfaces';

const usePokemonSearch = () => {
  const [isFetching, setIsFetching] = useState(true);
  const [simplePokemonList, setSimplePokemonList] = useState<SimplePokemon[]>([]);

  const loadPokemons = async () => {
    setIsFetching(true);
    const resp = await pokemonApi.get<PokemonPaginatedResponse>('https://pokeapi.co/api/v2/pokemon?limit=1200');
    mapPokemonList(resp.data.results);
  };

  const mapPokemonList = (pokemons: Result[]) => {
    const newPokemonList: SimplePokemon[] = pokemons.map((pokemon) => {
      const urlParts = pokemon.url.split('/');
      const id = urlParts[urlParts.length - 2];
      return {
        id,
        name: pokemon.name,
        picture: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`,
      };
    });
    setSimplePokemonList(newPokemonList);
    setIsFetching(false);
  };

  useEffect(() => {
    loadPokemons();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    simplePokemonList,
    isFetching,
  };
};

export default usePokemonSearch;
