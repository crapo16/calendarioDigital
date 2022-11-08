import { useState } from "react";
import { createContext } from "react";

export const EventosContext = createContext({
    setEventos: () => {},
    eventos: [],
  });

export const EventosContextProvider = ( {children} ) => {
    const [eventosActual, setEventosActual] = useState([]);

    const setEventos = (eventos) => {
        setEventosActual(eventos);
    }

    return (
        <EventosContext.Provider value={{ eventos: eventosActual, setEventos}}>
            {children}
        </EventosContext.Provider>
    );

}