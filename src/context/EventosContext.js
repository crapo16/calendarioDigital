import { useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";
import { Context } from "react";
import getEventos from "../api";
import axios from "axios";

export const EventosContext= createContext([]);

export default function EventosContextProvider({children}){
    const [eventos, setEventos]=useState({});
    const [user,setUser]=useState("");
    const [fechaHasta,setFechaHasta]=useState("");
    const [hash,setHash]=useState("");

    const setDatosUsuario=(user,hash,fechaHasta)=>{
        setUser(user);
        setHash(hash);
        setFechaHasta(fechaHasta);
    }

    useEffect(function(){
        
        if(user!=="")
        {
            const obtenerEventos = async() => {
                await axios.get('https://localhost:7144/Evento', 
                {params: {
                hash: hash,
                user:user,
                fechaHasta:fechaHasta
                }},
                {headers: {'Access-Control-Allow-Origin': '*'}})
                    .then(response => {
                        setEventos(response.data);
                })
            }

            obtenerEventos();
        }
        
    },[user,fechaHasta,hash]);

    return(
        <EventosContext.Provider value={{eventos, setDatosUsuario}}>
            {children}
        </EventosContext.Provider>
    );

}