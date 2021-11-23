import { ConsumerPokeApi } from "../../consumers/consumers";
import TYPES from "../types/types";

export const getDataByApi = () => {
    
    return async (dispatch)  => {

        try {
            const data = await ConsumerPokeApi('https://randomuser.me/api ', 'GET')

            dispatch({
                type: TYPES.personData, payload: {data, document}
            })
        }

        catch (e) {
            dispatch({
                type: TYPES.personError, payload: e
            })
        }
    }
}

export const getAllPokemons = (idPokedex) => {
    return async (dispatch) => {
        try {
            const data = await ConsumerPokeApi(`https://pokeapi.co/api/v2/pokedex/${idPokedex}/`, 'GET')     

            dispatch({
                type: TYPES.pokedexData, payload: {data, document}
            })
        }

        catch (e) {
            dispatch({
                type: TYPES.pokedexError, payload: e
            })
        }
    }
}

export const getPokemon = async (idPokemon, url) => {

    let newUrl = url.replace('pokemon-species', 'pokemon')
        try {
            const data = await ConsumerPokeApi(`${newUrl}`, 'GET')
            return data;
        }
        catch (e) {            
            return 'error';
        }
    
}

export const getPokemonByName = (pkm) => {
    return async (dispatch) => {
        try {
            dispatch({
                type: TYPES.searchPokemon, payload: {document, pkm}
            })
        }

        catch (e) {
            dispatch({
                type: TYPES.errorSearchPokemon, payload: e
            })
        }
    }
}

export const getPokemonDetail = (idPokemon) => {
    return async (dispatch) => {
        try {
            const data = await ConsumerPokeApi(`https://pokeapi.co/api/v2/pokemon/${idPokemon}/`, 'GET')     

            dispatch({
                type: TYPES.pokemonData, payload: {data, document}
            })
        }

        catch (e) {
            dispatch({
                type: TYPES.pokemonError, payload: e
            })
        }
    }
}