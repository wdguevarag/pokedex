import React, {useEffect, useState} from 'react';
import './styles.scss'

import { getPokemon } from '../../store/actions/consumerPokeApi';
import { Grid } from '@material-ui/core';
import { useDispatch, useSelector } from "react-redux";
import { isNullLiteralTypeAnnotation } from '@babel/types';

function CardPokemon(props) {

    //console.log('props=> ', props)
    
    const dispatch = useDispatch();

    const { entry_number, pokemon_species } = props.data;
    
    const [urlImg, seturlImg] = useState('');

    useEffect(() => {
        getPokemon(entry_number, pokemon_species.url).then((data) => {   
             
            let url = data.sprites ? data.sprites.front_default : 'https://codigos-ascii.com/wp-content/uploads/abre-signo-admiracion-apertura-admiracion.png';
            seturlImg(url);
        } )
    }, [props]);

    const cardSelected = (id) => {
        props.cardSelected(id)
    }

    return (
        <>
            <div className='cardItem' onClick={()=>cardSelected(props.data.pokemon_species.name)}>
                <div className='cardItem__image'>
                    <img src={ urlImg } ></img>
                </div>              
                <Grid container className='cardItem__content'>
                    <Grid item xs={6}>
                        <div className='cardItem__name'>
                            { pokemon_species.name }
                        </div>
                    </Grid>
                    <Grid item xs={6}>
                        <div className='cardItem__number'>{ entry_number }</div>
                    </Grid>
                </Grid>

            </div>
        </>
    )
}

export default CardPokemon;