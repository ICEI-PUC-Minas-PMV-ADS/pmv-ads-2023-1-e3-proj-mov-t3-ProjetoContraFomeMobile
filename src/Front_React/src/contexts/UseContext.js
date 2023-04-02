import React, { createContext, useContext, useState } from 'react';


export const UserContext = createContext();

export default function UserProvider({ children }) {

    const [signed, setSigned] = useState(false);
    const [nomeDaOng, setnomeDaOng] = useState('');

    return (

        <UserContext.Provider
            value={{
                signed,
                setSigned,
                nomeDaOng,
                setnomeDaOng
            }}
        >
            {children}
        </UserContext.Provider>
    )
}

export function useUser() {
    const context = useContext(UserContext);

    const { signed, setSigned, nomeDaOng, setnomeDaOng } = context;

    return { signed, setSigned, nomeDaOng, setnomeDaOng };
}