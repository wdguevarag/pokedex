import React, {Fragment, useEffect, useState} from 'react';
import {getAllPokemons, getPokemonDetail, getPokemonByName } from '../store/actions/consumerPokeApi'

import CardPokemon from '../components/cardPokemon/CardPokemon'
import CardDetail from '../components/cardDetail/CardDetail'

import { useDispatch, useSelector } from "react-redux";
import { Grid } from '@material-ui/core';
import TextField from "@material-ui/core/TextField";

import './styles.scss'

function StartPage() {

    const dispatch = useDispatch();
    
    const { pokemon_filter } = useSelector(state => state.pokedex)

    const [pokedex, setpokedex] = useState(2)
    
    useEffect(() => {
        dispatch(getAllPokemons(pokedex));
    }, [pokedex])

    const changePokedex = (id) => {
        setpokedex(id);
    }

    //const [pokemonSelected, setpokemonSelected] = useState(null);

    const pokemonSelected = useSelector(state => state.pokemon);

    const basePokedex = [
        {
            name: 'Kanto',
            id: 2
        }, {
            name: 'Johto',
            id: 3
        }, {
            name: 'Hoenn',
            id: 4
        }, {
            name: 'Sinnoh',
            id: 5
        },  {
            name: 'Unova',
            id: 8
        }, 

    ]

    const cardSelected = (id) => {
        dispatch(getPokemonDetail(id));
      //  setpokemonSelected(useSelector(state => state.pokemon))
    }

    const [fromValues, setFromValues] = useState({
        searchByName: ""
    })

    const { searchByName } = fromValues;

    useEffect(() => {
        dispatch(getPokemonByName(searchByName));
    }, [searchByName])


    const handleInputChange = (event) => {
        setFromValues({
            ...fromValues,
            [event.target.name]: event.target.value
        })
    }

    return(
        <>

            <div className='header'>

                <table>
                    <tr>
                        <th class='header__logo'>
                            <img src={'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2560px-International_Pok%C3%A9mon_logo.svg.png'} height='40px;'/>
                        </th>
                        <th className='header__item'>
                            <div className='header__item-button'>
                                API
                            </div>
                        </th>
                    </tr>
                </table>                

            </div>
            <div className='main-body'>
                <Grid container justifyContent='center'>
                
                <Grid item md={7} xs={12}>
                    <TextField
                        id="searchByName"
                        name="searchByName"
                        value={searchByName}
                        label="Nombre de pokemon"
                        variant="outlined"
                        fullWidth
                        onChange={handleInputChange}
                    />

                </Grid>
                <Grid md={5} xs={12} justifyContent="center" container alignItems="center">
                {
                        basePokedex.map((item) => {
                            return (
                                <Grid xs={2} className='section-pkms'>
                                    <div onClick={()=>changePokedex(item.id)} className={pokedex==item.id ? 'selected': ''}>{item.name}</div>
                                </Grid>
                            )
                        })
                    }
                </Grid>

                <Grid container xs={12} md={7} spacing={2} className='cardsContainer' >
                    {
                        pokemon_filter ? pokemon_filter.map((item) => {
                            return (
                                <Grid justifyContent="center"
                                alignItems="center" item md={4} xs={6} >
                                    <CardPokemon data={item} cardSelected={cardSelected}/>
                                </Grid>
                            )
                        }) : <div/>
                    }
                </Grid>
                <Grid xs={12} md={5} justifyContent="center" alignItems="center" className='cardDetailContainer'>
                    <CardDetail data={pokemonSelected}/>
                </Grid> 
                </Grid>
            </div>

        </>
    )
}

export default StartPage;