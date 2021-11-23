import { combineReducers, createStore, applyMiddleware, compose } from 'redux'
import { PersonDataReducer }  from "./PersonDataReducer";
import { PokedexDataReducer } from './PokedexDataReducer'; 
import { PokemonDataReducer } from './PokemonDataReducer';

import thunk from "redux-thunk";

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const reducers = combineReducers({
    person: PersonDataReducer,
    pokedex: PokedexDataReducer,
    pokemon: PokemonDataReducer
})

export const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(thunk))
);
