import './EventosHome.css';
import getEventos from '../../api';
import {useState,useEffect} from 'react';

function EventosHome(){
    useEffect(function(){
        getEventos().then(function(eventos){
            console.log(eventos);
        });
    }, []);

    return (
        <div className='card-panel teal lighten-2'>dfd</div>
    )
}

export default EventosHome;