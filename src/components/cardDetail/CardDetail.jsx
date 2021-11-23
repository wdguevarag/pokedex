import './styles.scss'
import { Grid } from '@material-ui/core';

import imgCenter from '../../assets/images/bkg-pkm.png';

function CardDetail(props) {

    const { artwork, name, types, order, height, weight, stats } = props.data;
    
    return (
        <>
        {
            order ? <div className='cardDetail'>
                <div className='cardDetail__content-img'>
                    <img src={artwork} />
                </div>
                <div className='cardDetail__content-order'>
                    National Pokedex N° {order}
                </div>
                <div className='cardDetail__content-name'>
                    {name}
                </div>
                <div className='cardDetail__content-type'>
                    {
                        types ? types.map((t)=>{
                            return (
                                <span className={t.type.name}>{t.type.name}</span>
                            )
                        }):''
                    }
                </div>
                <Grid container className='cardDetail__content-body'>
                    <Grid item xs={6}>
                        <div className=''>Height: { height/10 } m.</div>
                    </Grid>
                    <Grid item xs={6}>
                        <div className=''>Weight: { weight/10 } kg.</div>
                    </Grid>
                </Grid>
                <Grid container className='cardDetail__content-stats' spacing={1}>
                    {
                        stats ? stats.map ((s) => {
                            return (
                                <Grid item xs={5}>
                                    <div className=''><span className='valueStat'>{ s.base_stat }</span> {s.stat.name} </div>
                                </Grid>
                            )
                        }) : ''
                    }
                    
                </Grid>
            </div> :
            <div className='cardDetail'>
                <div class='cardDetail__default-img'>
                    <img src= {imgCenter} />
                </div>
            </div>
        }
            
        </>
    )
}


export default CardDetail;