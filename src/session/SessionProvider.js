import React, { useState, useEffect } from 'react'
import SessionContext from './SessionContext'

export default function SessionProvider({ children }) {

    const [session, updateSession] = useState({
        gameInfo:{
            question:0,
            ammount:0,
            points:0,
            timer:15,

        }
    });


    function setSession(nextSession) {
        updateSession(prevSession => ({
            ...prevSession,
            ...nextSession
        }));
    }

   

    useEffect(() => {
    
    }, []);

    let context = { session, actions: {} }

    return (
        <SessionContext.Provider value={context}>
            {children}
        </SessionContext.Provider>
    )
}