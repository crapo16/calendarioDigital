import { useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";
import { Context } from "react";
import getEventos from "../api";

export const EventosContext= createContext([]);

export default function EventosContextProvider({children}){
    const [eventos, setEventos]=useState([]);

    useEffect(function(){
        getEventos().then(function(eventos){
            setEventos(eventos);          
                      
        });
    },[]);

    return(
        <EventosContext.Provider value={{eventos}}>
            {children}
        </EventosContext.Provider>
    );

}