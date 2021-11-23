import React, {useEffect, useState} from 'react';
import './styles.scss'

import { getPokemon } from '../../store/actions/consumerPokeApi';
import { Grid } from '@material-ui/core';

import iconHeight from '../../assets/images/height-icon.png';
import iconWeight from '../../assets/images/weight-icon.png';

function CardPokemon(props) {

    const { entry_number, pokemon_species } = props.data;
    
    const [urlImg, seturlImg] = useState('');
    const [heigth, setheigth] = useState('');
    const [weigth, setweigth] = useState('');

    useEffect(() => {
        getPokemon(entry_number, pokemon_species.url).then((data) => {
            let url = data.sprites ? data.sprites.front_default : 'https://codigos-ascii.com/wp-content/uploads/abre-signo-admiracion-apertura-admiracion.png';
            seturlImg(url);
            let h = data.height ? data.height/10 : '-';
            setheigth(h);
            let w = data.weight ? data.weight/10 : '-';
            setweigth(w);
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
                    <Grid item xs={6}>
                        <div className='cardItem__stat left'>
                            <img src={ iconHeight }/> {heigth} m.
                        </div>
                    </Grid>
                    <Grid item xs={6}>
                        <div className='cardItem__stat right'>
                        <img src={ iconWeight }/> {weigth} kg.
                        </div>
                    </Grid>
                </Grid>

            </div>
        </>
    )
}

export default CardPokemon;