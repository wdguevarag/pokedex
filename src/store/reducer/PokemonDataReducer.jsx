import TYPES from '../types/types'

const initialState = {
    error: null,
    name: '',
    front_default: ''
}


export const PokemonDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case TYPES.pokemonData:
            return {
                ...state,
                error: null,
                name: action.payload.data.name,
                front_default: action.payload.data.sprites.front_default,
                types: action.payload.data.types,
                base_experience: action.payload.data.base_experience,
                artwork: action.payload.data.sprites.other["official-artwork"].front_default,
                order: action.payload.data.order,
                weight: action.payload.data.weight,
                height: action.payload.data.height,
                stats: action.payload.data.stats
        }

        case TYPES.pokemonError:
            return {
                ...initialState,
                error: action.payload
            }
        default: return state;
    }
}
