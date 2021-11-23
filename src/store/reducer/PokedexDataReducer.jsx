import TYPES from '../types/types'

const initialState = {
    error: null,
    name: '',
    pokemon_entries: '',
    pokemon_filter: ''
}


export const PokedexDataReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case TYPES.pokedexData:
            return {
                ...state,
                error: null,
                name: action.payload.data.name,
                pokemon_entries: action.payload.data.pokemon_entries,
                pokemon_filter: action.payload.data.pokemon_entries
        }

        case TYPES.pokedexError:
            return {
                ...initialState,
                error: action.payload
            }

        case TYPES.searchPokemon:
            {
                return {
                    ...state,
                    error: null,
                    pokemon_filter: state.pokemon_entries.filter((item) => {                        
                        return item.pokemon_species.name.includes(action.payload.pkm.toLowerCase())
                    })
                }
            }

        default: return state;
    }
}
