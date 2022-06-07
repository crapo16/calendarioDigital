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
        <div className='date-container'>
            <div className='row'>
                <h3>Martes 17 de mayo, 2022</h3>
            </div>
        </div>
    )
}

export default EventosHome;